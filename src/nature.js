import * as THREE from 'three';
import { groundHeight, fieldAt, pathX, railZ, noise } from './terrain.js';
let seed = 87423;
const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const range = (a,b) => a + random() * (b-a);
const canvasTexture = canvas => { const t = new THREE.CanvasTexture(canvas); t.colorSpace = THREE.SRGBColorSpace; return t; };

// Original, alpha-masked botanical atlases: individually shaded leaves, twigs and needles.
function foliageTexture(wholeTree = false, cedar = false) {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const ctx = c.getContext('2d');
  const leaf = (x,y,size,angle,light) => {
    ctx.save();ctx.translate(x,y);ctx.rotate(angle);
    const g=ctx.createLinearGradient(-size,0,size,0);
    g.addColorStop(0,`hsl(88 39% ${light*.72}%)`);g.addColorStop(.5,`hsl(84 45% ${light}%)`);g.addColorStop(1,`hsl(94 42% ${light*.78}%)`);
    ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(-size,0);ctx.quadraticCurveTo(0,-size*.72,size,0);ctx.quadraticCurveTo(0,size*.7,-size,0);ctx.fill();
    if(size>5){ctx.strokeStyle='#c1cd7629';ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(-size,0);ctx.lineTo(size,0);ctx.stroke();}ctx.restore();
  };
  if (cedar) {
    ctx.strokeStyle='#68624a';ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(256,508);ctx.lineTo(258,22);ctx.stroke();
    for(let j=0;j<65;j++){
      const y=35+j*6.3,span=12+j*2.45;
      for(const side of [-1,1]){
        const ex=256+side*span,ey=y+range(12,27);ctx.strokeStyle='#3e5036';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(256,y);ctx.lineTo(ex,ey);ctx.stroke();
        for(let k=0;k<34;k++){const t=k/34;leaf(256+(ex-256)*t+range(-6,6),y+(ey-y)*t+range(-7,7),range(3,9),range(-3,3),range(24,43));}
      }
    }
  } else if (wholeTree) {
    ctx.strokeStyle='#675c44';ctx.lineWidth=11;ctx.beginPath();ctx.moveTo(256,510);ctx.lineTo(248,234);ctx.stroke();
    for(let j=0;j<20;j++){
      const angle=j*2.4,rr=range(35,150),cx=256+Math.cos(angle)*rr,cy=206+Math.sin(angle)*rr*.8;
      ctx.lineWidth=range(2,6);ctx.beginPath();ctx.moveTo(253,390);ctx.quadraticCurveTo(253,270,cx,cy);ctx.stroke();
      for(let k=0;k<160;k++){const a=range(0,Math.PI*2),r=Math.sqrt(random())*range(35,75);leaf(cx+Math.cos(a)*r,cy+Math.sin(a)*r*.85,range(2,6),range(-3,3),range(29,55)-(cy/512)*10);}
    }
  } else {
    for(let branch=0;branch<12;branch++){
      const angle=branch*2.4,ex=256+Math.cos(angle)*range(100,210),ey=256+Math.sin(angle)*range(90,210);
      ctx.strokeStyle='#6b6742';ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(250,300);ctx.quadraticCurveTo(256,240,ex,ey);ctx.stroke();
      for(let j=0;j<58;j++){
        const t=range(.1,1),a=range(0,Math.PI*2),r=Math.sqrt(random())*55;
        const x=250+(ex-250)*t+Math.cos(a)*r,y=300+(ey-300)*t+Math.sin(a)*r;
        leaf(x,y,range(5,12),range(-3,3),range(30,57));
      }
    }
  }
  return canvasTexture(c);
}

export function buildVegetation(world) {
  const plane = new THREE.PlaneGeometry(1,1);plane.translate(0,.5,0);
  const broadMat=new THREE.MeshLambertMaterial({map:foliageTexture(true),alphaTest:.42,side:THREE.DoubleSide,color:0xb5c49c});
  const cedarMat=new THREE.MeshLambertMaterial({map:foliageTexture(true,true),alphaTest:.42,side:THREE.DoubleSide,color:0xa9bda5});
  const trees=[],cedars=[];
  // Jittered stratified placement gives continuous forest coverage, with small clearings.
  for(let z=-480;z<210;z+=8.5)for(let x=-440;x<440;x+=8.5){
    const xx=x+range(-4,4),zz=z+range(-4,4);
    if(zz>-93 && zz<140 && Math.abs(xx)<119)continue;
    if(Math.abs(zz-railZ(xx))<9&&Math.abs(xx)<230)continue;
    const t={x:xx,z:zz,h:range(8,15),s:range(.7,1.2)};
    (noise(xx*.03,zz*.04)>.66?cedars:trees).push(t);
  }
  for(let i=0;i<58;i++)cedars.push({x:range(23,83),z:range(-119,-96),h:range(16,25),s:.8});
  const dummy=new THREE.Object3D(),color=new THREE.Color();
  const instantiate = (data,material,width) => {
    // Spatial batches keep whole mountain forests out of the render when behind the viewer.
    const tiles=new Map();for(const t of data){const k=`${Math.floor(t.x/70)},${Math.floor(t.z/70)}`;if(!tiles.has(k))tiles.set(k,[]);tiles.get(k).push(t);}
    for(const points of tiles.values()){
      const mesh=new THREE.InstancedMesh(plane,material,points.length*2);let i=0;
      for(const t of points)for(let side=0;side<2;side++){
        dummy.position.set(t.x,groundHeight(t.x,t.z)-.15,t.z);dummy.scale.set(t.h*width*t.s,t.h,1);dummy.rotation.set(0,side*Math.PI/2+noise(t.x,t.z)*.8,0);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);
        color.setHSL(range(.21,.27),range(.03,.12),range(.72,1));mesh.setColorAt(i++,color);
      }
      mesh.castShadow=mesh.receiveShadow=true;
      mesh.computeBoundingSphere();world.scene.add(mesh);
    }
  };
  instantiate(trees,broadMat,.91);instantiate(cedars,cedarMat,.52);
  const leafMat=new THREE.MeshLambertMaterial({map:foliageTexture(),alphaTest:.4,side:THREE.DoubleSide,color:0xc7d3a7});
  const closeTrees=[[-16,19,15],[-37,-56,12],[-46,-69,15],[31,-69,11],[66,-62,12],[-83,-38,13],[45,27,14],[101,13,13],[-108,55,16],[72,-89,15],[-10,-84,12],[-86,-86,15]];
  const cards=new THREE.InstancedMesh(new THREE.PlaneGeometry(1,1),leafMat,closeTrees.length*64);let index=0;
  const branchGeometries=[];
  function branch(a,b,r1,r2){const dir=new THREE.Vector3().subVectors(b,a);const g=new THREE.CylinderGeometry(r2,r1,dir.length(),7,1);const q=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize());g.applyQuaternion(q);g.translate((a.x+b.x)/2,(a.y+b.y)/2,(a.z+b.z)/2);branchGeometries.push(g);}
  closeTrees.forEach(([x,z,h])=>{
    const y=groundHeight(x,z);world.colliders.push({x,z,r:h*.025+.35});
    branch(new THREE.Vector3(x,y,z),new THREE.Vector3(x+.2,y+h*.6,z),h*.027,h*.008);
    for(let j=0;j<9;j++){
      const a=j*2.4,r=h*range(.18,.31),end=new THREE.Vector3(x+Math.cos(a)*r,y+h*range(.59,.86),z+Math.sin(a)*r);
      branch(new THREE.Vector3(x+.1,y+h*.38,z),end,h*.011,h*.0015);
    }
    for(let j=0;j<64;j++){
      const a=j*2.39996,r=Math.sqrt(random())*h*.37;
      dummy.position.set(x+Math.cos(a)*r,y+h*(.64+.26*random())-(r/h)*1.5,z+Math.sin(a)*r);
      dummy.rotation.set(range(-.8,.8),range(0,Math.PI*2),range(-.5,.5));dummy.scale.setScalar(h*range(.27,.43));dummy.updateMatrix();cards.setMatrixAt(index,dummy.matrix);
      color.setHSL(range(.22,.27),.12,range(.65,.96));cards.setColorAt(index++,color);
    }
  });
  cards.castShadow=true;cards.receiveShadow=true;world.scene.add(cards);world.forest=cards;
  // Import-free merging keeps botanical detail in one bark draw call.
  const pos=[],norm=[],uv=[];
  for(let g of branchGeometries){if(g.index)g=g.toNonIndexed();pos.push(...g.attributes.position.array);norm.push(...g.attributes.normal.array);uv.push(...g.attributes.uv.array);g.dispose();}
  const branches=new THREE.BufferGeometry();branches.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));branches.setAttribute('normal',new THREE.Float32BufferAttribute(norm,3));branches.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));
  const trunk=new THREE.Mesh(branches,world.materials.wood);trunk.castShadow=trunk.receiveShadow=true;world.scene.add(trunk);
  buildVerge(world);
}

function buildVerge(world){
  const c=document.createElement('canvas');c.width=256;c.height=256;const ctx=c.getContext('2d');
  for(let i=0;i<145;i++){
    const x=range(8,248),h=range(40,225),bend=range(-65,65);
    const g=ctx.createLinearGradient(0,256,0,0);g.addColorStop(0,'#314a1d');g.addColorStop(.6,`hsl(${range(77,105)} 52% ${range(30,49)}%)`);g.addColorStop(1,'#a5b850');ctx.fillStyle=g;
    ctx.beginPath();ctx.moveTo(x,256);ctx.quadraticCurveTo(x+bend*.25,256-h*.5,x+bend,256-h);ctx.quadraticCurveTo(x+bend*.25+2,256-h*.4,x+range(1,3),256);ctx.fill();
  }
  const texture=canvasTexture(c),material=new THREE.MeshLambertMaterial({map:texture,alphaTest:.35,side:THREE.DoubleSide});
  const geo=new THREE.PlaneGeometry(1,1);geo.translate(0,.5,0);
  const points=[];
  for(let i=0;i<9000;i++){
    let x=range(-115,115),z=range(-86,121);
    if(i<3300){z=range(-85,121);x=pathX(z)+(random()>.5?1:-1)*range(1.48,2.8);}
    if(fieldAt(x,z,-.5)||Math.abs(x-pathX(z))<1.4||Math.abs(z-railZ(x))<2.5||Math.abs(z+29-1.3*Math.sin(x*.04))<1.5)continue;
    if(world.colliders.some(t=>Math.hypot(x-t.x,z-t.z)<t.r))continue;
    points.push({x,z});
  }
  const tufts=new THREE.InstancedMesh(geo,material,points.length*2),d=new THREE.Object3D();let n=0;
  for(const p of points)for(let k=0;k<2;k++){d.position.set(p.x,groundHeight(p.x,p.z)+.02,p.z);d.scale.set(range(.6,1.15),range(.38,.84),1);d.rotation.set(0,k*Math.PI/2+random(),0);d.updateMatrix();tufts.setMatrixAt(n++,d.matrix);}
  tufts.castShadow=tufts.receiveShadow=true;world.scene.add(tufts);
}

export function buildCumulus(world){
  const c=document.createElement('canvas');c.width=512;c.height=256;const ctx=c.getContext('2d');
  const balls=Array.from({length:22},()=>({x:range(65,440),y:range(82,174),r:range(24,69)}));
  const img=ctx.createImageData(512,256);
  for(let y=0;y<256;y++)for(let x=0;x<512;x++){
    let d=-1;for(const b of balls)d=Math.max(d,1-Math.hypot(x-b.x,(y-b.y)*1.1)/b.r);
    d+=noise(x*.075,y*.075)*.17;
    const alpha=THREE.MathUtils.smoothstep(d,.045,.21),light=230+21*(1-y/256)+noise(x*.055,y*.055)*6;
    const i=(y*512+x)*4;img.data[i]=light;img.data[i+1]=light+1;img.data[i+2]=Math.min(255,light+4);img.data[i+3]=alpha*245;
  }
  ctx.putImageData(img,0,0);const map=canvasTexture(c);world.clouds=[];
  for(let i=0;i<14;i++){
    const m=new THREE.SpriteMaterial({map,transparent:true,depthWrite:false,fog:false,opacity:range(.75,.96)});
    const cloud=new THREE.Sprite(m);cloud.position.set(range(-680,680),range(180,260),range(-950,-460));cloud.scale.set(range(125,210),range(60,95),1);world.scene.add(cloud);world.clouds.push(cloud);
  }
}

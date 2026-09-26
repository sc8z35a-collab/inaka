import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { groundHeight, surfaceHeight, colliderContains, roadZ, railZ, railHeight, pathX, clamp } from './terrain.js';
const mat = (color,roughness=.8,metalness=0) => new THREE.MeshStandardMaterial({color,roughness,metalness});
function box(p,w,h,d,x,y,z,m,r=0){const o=new THREE.Mesh(r?new RoundedBoxGeometry(w,h,d,2,r):new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;p.add(o);return o;}
function cyl(p,r,h,x,y,z,m){const o=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,12),m);o.position.set(x,y,z);o.castShadow=true;p.add(o);return o;}
function merge(p){p.updateMatrixWorld(true);const batches=new Map();p.traverse(o=>{if(!o.isMesh)return;if(!batches.has(o.material))batches.set(o.material,[]);let g=o.geometry.clone().applyMatrix4(o.matrixWorld);if(g.index)g=g.toNonIndexed();batches.get(o.material).push(g);});p.clear();for(const [m,gs]of batches){const o=new THREE.Mesh(mergeGeometries(gs),m);o.castShadow=o.receiveShadow=true;p.add(o);gs.forEach(g=>g.dispose());}}
export class VillageLife{
 constructor(w){this.world=w;this.scene=w.scene;this.time=0;this.trainX=-62;this.speed=7.2;this.cx=pathX(-39);this.cz=railZ(this.cx);this.warning=false;this.gateAngle=Math.PI/2;this.cars=[];this.gates=[];this.lights=[];this.npcs=[];this.railway();this.train();this.villagers();this.update(0);}
 railway(){
  const g=new THREE.Group();this.scene.add(g);const steel=mat(0x747e7a,.3,.7),rust=mat(0x66503d),wood=mat(0x504733),concrete=mat(0x9b9d8f),yellow=mat(0xe5b735),black=mat(0x272e29);
  // Share the already requested gravel image instead of downloading it a second time.
  const map=this.world.groundTexture('path');
  const ballast=new THREE.MeshStandardMaterial({map,color:0x8e8c83,bumpMap:map,bumpScale:.12,roughness:1});const points=[];for(let x=-230;x<=230;x+=2)points.push([x,railZ(x)]);this.world.ribbon(points,4.5,ballast,.26);
  for(let x=-230;x<230;x+=2)for(const s of [-1,1]){box(g,2.03,.10,.07,x,railHeight(x)+.08,railZ(x)+s*.6,steel).rotation.y=-Math.atan(.00144*x);box(g,2.03,.06,.15,x,railHeight(x),railZ(x)+s*.6,rust).rotation.y=-Math.atan(.00144*x);}
  const ties=new THREE.InstancedMesh(new THREE.BoxGeometry(.18,.12,2.1),wood,656),d=new THREE.Object3D();for(let i=0;i<656;i++){const x=-229+i*.7;d.position.set(x,railHeight(x)-.065,railZ(x));d.rotation.y=-Math.atan(.00144*x);d.updateMatrix();ties.setMatrixAt(i,d.matrix);}ties.receiveShadow=true;this.scene.add(ties);
  const wire=new THREE.LineBasicMaterial({color:0x38443d});for(let x=-180;x<180;x+=32){const z=railZ(x)-4,y=groundHeight(x,z);cyl(g,.11,8.4,x,y+4.2,z,concrete);box(g,2,.12,.12,x,y+7.8,z,concrete);for(const off of [-.8,0,.8]){cyl(g,.07,.22,x+off,y+7.96,z,concrete);if(x<148){const pts=[];for(let j=0;j<=14;j++){const t=j/14,xx=x+32*t;pts.push(new THREE.Vector3(xx+off,THREE.MathUtils.lerp(y,groundHeight(x+32,railZ(x+32)-4),t)+8-.7*Math.sin(Math.PI*t),railZ(xx)-4));}this.scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),wire));}}}
  box(g,5,.08,3.6,this.cx,railHeight(this.cx)+.02,this.cz,mat(0x555951));
  for(const s of [-1,1]){const x=this.cx+s*2.7,z=this.cz+s*3.6,y=groundHeight(x,z);cyl(g,.11,3.9,x,y+1.95,z,black);for(let i=0;i<10;i++)cyl(g,.116,.18,x,y+.2+i*.36,z,yellow);box(g,.65,.8,.56,x,y+.5,z,yellow,.05);for(const a of [-Math.PI/4,Math.PI/4]){box(g,1.45,.2,.12,x,y+3.7,z,yellow).rotation.z=a;for(const n of [-1,1])box(g,.25,.21,.13,x+n*.36*Math.cos(a),y+3.7+n*.36*Math.sin(a),z,black).rotation.z=a;}
   for(const off of [-.33,.33]){const housing=cyl(g,.22,.15,x+off,y+2.9,z+.1,black);housing.rotation.x=Math.PI/2;const m=new THREE.MeshStandardMaterial({color:0x3b110b,emissive:0xff2510,emissiveIntensity:0});const lamp=new THREE.Mesh(new THREE.SphereGeometry(.15,12,8),m);lamp.scale.z=.35;lamp.position.set(x+off,y+2.9,z+.2);this.scene.add(lamp);this.lights.push({lamp,phase:off>0?0:1});}
   const gate=new THREE.Group();gate.position.set(x,y+1,z);gate.userData.side=s;for(let i=0;i<12;i++)box(gate,.42,.075,.075,-s*(.21+i*.42),0,0,i%2?black:yellow);this.scene.add(gate);this.gates.push(gate);box(g,.6,1.1,.5,x+s*.75,y+.55,z-1,concrete,.04);
  }
  for(let i=0;i<7;i++){const z=this.cz+7+i*1.6,x=pathX(z)-2.8,y=groundHeight(x,z);cyl(g,.055,.8,x,y+.4,z,concrete);box(g,.07,.22,1.7,x,y+.68,z,concrete);}merge(g);
 }
 train(){
  const cream=mat(0xe6dfc6,.43,.25),green=mat(0x3e7058,.45,.3),stripe=mat(0xb96842),roof=mat(0x8b948d,.5,.4),frame=mat(0x29352f,.6,.6),glass=mat(0x2b454d,.12,.7),trim=mat(0xc6cabb,.35,.6);
  for(let n=0;n<2;n++){const group=new THREE.Group(),body=new THREE.Group();this.scene.add(group);group.add(body);box(body,15.3,2.65,2.72,0,2.28,0,cream,.18);box(body,15.36,.65,2.76,0,1.32,0,green,.05);box(body,15.4,.13,2.78,0,1.72,0,stripe);box(body,15.25,.34,2.78,0,3.65,0,roof,.16);box(body,13.8,.4,2.18,0,.78,0,frame,.05);
   for(const x of [-3.4,3.4]){box(body,1.9,.3,1.65,x,3.94,0,roof,.07);box(body,1.55,.04,1.4,x,4.1,0,frame);}
   for(const s of [-1,1]){for(let j=0;j<8;j++){const x=-5.6+j*1.6;box(body,1.34,1.06,.045,x,2.7,s*1.38,trim,.035);box(body,1.21,.94,.05,x,2.7,s*1.41,glass,.025);box(body,.035,.93,.05,x,2.7,s*1.445,trim);}for(const x of [-6.7,6.7]){box(body,.76,2.05,.055,x,2.08,s*1.425,trim,.02);box(body,.6,1.93,.06,x,2.08,s*1.46,cream,.02);box(body,.44,.86,.068,x,2.68,s*1.5,glass,.02);box(body,.85,.1,.28,x,.91,s*1.43,frame);}}
   for(const end of [-1,1]){box(body,.075,.95,2.15,end*7.72,2.7,0,glass,.03);box(body,.08,1.04,.055,end*7.78,2.7,0,trim);box(body,.3,.22,1.25,end*7.77,1.01,0,frame);box(body,.65,.2,.25,end*7.9,.85,0,frame);for(const s of [-1,1]){const lamp=new THREE.Mesh(new THREE.SphereGeometry(.11,10,8),new THREE.MeshStandardMaterial({color:0xfff9cf,emissive:0xffe5ab,emissiveIntensity:end===1&&n===0?1.4:0}));lamp.position.set(end*7.73,1.88,s*.92);body.add(lamp);}}
   const wheels=[];for(const x of [-5.2,-3.8,3.8,5.2])for(const s of [-1,1]){const wheel=cyl(group,.38,.18,x,.43,s*.93,frame);wheel.rotation.x=Math.PI/2;wheels.push(wheel);}for(const x of [-4.5,4.5])box(body,2.25,.25,2.15,x,.58,0,frame,.03);merge(body);this.cars.push({group,wheels,offset:n*16.25});
  }
 }
 villagers(){
  // Dense samples follow the actual winding roads, not a shortcut spline
  // between their endpoints (which previously sent villagers into the paddies).
  const sample=(from,to,point)=>{const count=Math.ceil(Math.abs(to-from)/2);return Array.from({length:count+1},(_,i)=>point(THREE.MathUtils.lerp(from,to,i/count)));};
  const routes=[
    // Turn before the house at (10,-81), rather than waiting at its wall forever.
    sample(40,-68,z=>[pathX(z)-.65,z]),
    sample(-75,60,x=>[x,roadZ(x)-.55]),
    sample(8,105,z=>[pathX(z)+.65,z]),
    sample(-97,-31,x=>[x,roadZ(x)+.55]),
    sample(42,85,x=>[x,roadZ(x)+.55]),
  ];
  routes.forEach((pts,i)=>{const root=new THREE.Group(),shirt=mat([0xcac6b3,0x75988c,0xb0b8c3,0x758265,0xb59b81][i]),pants=mat(0x414d50),skin=mat(0xc69b78),hat=mat(0xc9b78c),shoe=mat(0x373c32);const cap=(p,r,l,y,m)=>{const o=new THREE.Mesh(new THREE.CapsuleGeometry(r,l,3,8),m);o.position.y=y;p.add(o);return o;};cap(root,.175,.3,1.15,shirt).scale.z=.68;cyl(root,.067,.14,0,1.49,0,skin);const head=new THREE.Mesh(new THREE.SphereGeometry(.13,12,10),skin);head.scale.set(.86,1.18,.9);head.position.set(0,1.65,.01);root.add(head);cyl(root,.23,.045,0,1.79,0,hat);cyl(root,.14,.11,0,1.85,0,hat);box(root,.28,.17,.2,0,.94,0,pants,.04);
   const eye=mat(0x302a24);
   for(const side of [-1,1]){const e=new THREE.Mesh(new THREE.SphereGeometry(.012,8,6),eye);e.position.set(side*.043,1.67,.117);root.add(e);}
   const nose=new THREE.Mesh(new THREE.SphereGeometry(.023,8,6),skin);nose.position.set(0,1.63,.125);root.add(nose);
   const limbs=[];
   for(const s of [-1,1]){const leg=new THREE.Group();leg.position.set(s*.1,.94,0);root.add(leg);cap(leg,.077,.28,-.19,pants);const knee=new THREE.Group();knee.position.y=-.4;leg.add(knee);cap(knee,.059,.29,-.18,pants);const foot=box(knee,.14,.09,.25,0,-.4,.055,shoe,.03);const arm=new THREE.Group();arm.position.set(s*.235,1.38,0);root.add(arm);cap(arm,.06,.22,-.15,shirt);cap(arm,.044,.2,-.41,skin);cap(arm,.045,.04,-.56,skin);limbs.push({leg,knee,arm,foot,s});}box(root,.24,.28,.11,-.23,1,0,mat(0x88765a),.03);root.traverse(o=>{if(o.isMesh)o.castShadow=o.receiveShadow=true;});this.scene.add(root);const curve=new THREE.CatmullRomCurve3(pts.map(([x,z])=>new THREE.Vector3(x,0,z)),false,'centripetal'),length=curve.getLength();this.npcs.push({root,limbs,curve,length,distance:[.2,.58,.2,.22,.58][i]*length,direction:i%2?-1:1,speed:.65+i*.06,phase:i*1.7,gait:0});});
 }
 canEnter(x,z){if(this.warning&&Math.abs(x-this.cx)<3.2&&Math.abs(z-this.cz)<3.4)return false;if(Math.abs(z-railZ(x))<1.9&&this.cars.some(c=>Math.abs(x-c.group.position.x)<8.6))return false;return !this.npcs.some(n=>Math.hypot(x-n.root.position.x,z-n.root.position.z)<.48);}
 clearTrack(pos,dt){
  const offset=pos.z-railZ(pos.x);
  if(Math.abs(offset)>=2.1||!this.cars.some(c=>Math.abs(pos.x-c.group.position.x)<10))return;
  const target=railZ(pos.x)+(offset<0?-2.1:2.1);
  pos.z=THREE.MathUtils.damp(pos.z,target,8,dt);
  pos.y=Math.max(pos.y,surfaceHeight(pos.x,pos.z)+1.7);
 }
 update(dt){this.time+=dt;this.trainX+=dt*this.speed;if(this.trainX>249)this.trainX=-230;for(const car of this.cars){const x=this.trainX-car.offset;car.group.position.set(x,railHeight(x)+.12,railZ(x));car.group.rotation.y=-Math.atan(.00144*x);car.wheels.forEach(w=>w.rotation.y-=dt*this.speed/.38);}this.warning=this.trainX+8>this.cx-55&&this.trainX-24<this.cx+17;this.gateAngle=THREE.MathUtils.lerp(this.gateAngle,this.warning?0:Math.PI/2,Math.min(1,dt*.95));this.gates.forEach(g=>g.rotation.z=-g.userData.side*this.gateAngle);this.lights.forEach(l=>l.lamp.material.emissiveIntensity=this.warning&&Math.floor(this.time*2.6)%2===l.phase?2.7:0);
  for(const n of this.npcs){
   let next=n.distance+dt*n.speed*n.direction;
   if(next>n.length||next<0){n.direction*=-1;next=clamp(next,0,n.length);}
   const p=n.curve.getPointAt(clamp(next/n.length,0,1));
   // A pedestrian already on the crossing must exit, not freeze on the rails.
   // Previously only z was compared, so anyone in that z band anywhere on the map
   // counted as "on the crossing" and ignored the warning.
   const here=n.root.position,onCrossing=Math.abs(here.z-this.cz)<3.5&&Math.abs(here.x-this.cx)<3.4;
   // Someone already between the rails must keep walking off them, never freeze there.
   const onRails=Math.abs(here.z-railZ(here.x))<2;
   const trainClose=!onRails&&this.cars.some(c=>Math.abs(p.x-c.group.position.x)<8.8)&&Math.abs(p.z-railZ(p.x))<2;
   // Villagers walked straight through each other.
   const crowded=this.npcs.some(o=>o!==n&&Math.hypot(p.x-o.root.position.x,p.z-o.root.position.z)<.55
     &&Math.hypot(p.x-o.root.position.x,p.z-o.root.position.z)<Math.hypot(here.x-o.root.position.x,here.z-o.root.position.z));
   n.waiting=(this.warning&&!onCrossing&&Math.abs(p.x-this.cx)<3.4&&Math.abs(p.z-this.cz)<5.4)
     ||trainClose||crowded||Math.hypot(p.x-this.world.camera.position.x,p.z-this.world.camera.position.z)<1.1
     ||this.world.colliders.some(c=>colliderContains(c,p.x,p.z,.28));
   if(!n.waiting){n.distance=next;n.phase+=dt*n.speed*7;}
   n.gait=THREE.MathUtils.damp(n.gait,n.waiting?0:1,12,dt);
   const pos=n.curve.getPointAt(n.distance/n.length),t=n.curve.getTangentAt(n.distance/n.length).multiplyScalar(n.direction);
   n.root.position.set(pos.x,surfaceHeight(pos.x,pos.z),pos.z);n.root.rotation.y=Math.atan2(t.x,t.z);
   const swing=Math.sin(n.phase)*.32*n.gait;
   for(const l of n.limbs){l.leg.rotation.x=swing*l.s;l.knee.rotation.x=Math.max(0,-swing*l.s)*.7;l.arm.rotation.x=-swing*l.s*.7;}
   // Ground the lowest sole corner on the rendered path/bridge at every step.
   // This removes the fixed .25m offset and handles slopes and bent knees.
   n.root.updateMatrixWorld(true);
   let correction=-Infinity;
   const sole=new THREE.Vector3();
   for(const limb of n.limbs)for(const x of [-.07,.07])for(const z of [-.125,.125]){
     sole.set(x,-.045,z).applyMatrix4(limb.foot.matrixWorld);
     correction=Math.max(correction,surfaceHeight(sole.x,sole.z)-sole.y);
   }
   n.root.position.y+=correction+.008;
  }

 }
}

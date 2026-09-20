(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=(i,t,e=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(t).forEach(s=>{n.setAttribute(s,String(t[s]))}),e.length&&e.forEach(s=>{const r=Ic(...s);n.appendChild(r)}),n};var Gh=([i,t,e])=>Ic(i,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=i=>Array.from(i.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),Xh=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",qh=i=>i.flatMap(Xh).map(e=>e.trim()).filter(Boolean).filter((e,n,s)=>s.indexOf(e)===n).join(" "),Yh=i=>i.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,n)=>e.toUpperCase()+n.toLowerCase()),Sl=(i,{nameAttr:t,icons:e,attrs:n})=>{var m;const s=i.getAttribute(t);if(s==null)return;const r=Yh(s),a=e[r];if(!a)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const o=Wh(i),[l,c,h]=a,u={...c,"data-lucide":s,...n,...o},d=qh(["lucide",`lucide-${s}`,o,n]);d&&Object.assign(u,{class:d});const f=Gh([l,u,h]);return(m=i.parentNode)==null?void 0:m.replaceChild(f,i)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=["svg",Xe,[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=["svg",Xe,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=["svg",Xe,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=["svg",Xe,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=["svg",Xe,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=["svg",Xe,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=["svg",Xe,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=["svg",Xe,[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=["svg",Xe,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=["svg",Xe,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=["svg",Xe,[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=["svg",Xe,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=["svg",Xe,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=["svg",Xe,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=["svg",Xe,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=({icons:i={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(s=>Sl(s,{nameAttr:t,icons:i,attrs:e})),t==="data-lucide"){const s=document.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(r=>Sl(r,{nameAttr:"icon-name",icons:i,attrs:e})))}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fo="180",hu=0,yl=1,uu=2,Uc=1,Nc=2,Bn=3,Jn=0,We=1,ce=2,kn=0,Zi=1,za=2,El=3,bl=4,du=5,fi=100,fu=101,pu=102,mu=103,gu=104,_u=200,vu=201,xu=202,Mu=203,Ha=204,ka=205,Su=206,yu=207,Eu=208,bu=209,Tu=210,wu=211,Au=212,Ru=213,Cu=214,Va=0,Ga=1,Wa=2,es=3,Xa=4,qa=5,Ya=6,$a=7,Oo=0,Pu=1,Lu=2,Zn=0,Fc=1,Oc=2,Bc=3,zr=4,zc=5,Bo=6,Hc=7,kc=300,ns=301,is=302,ja=303,Ka=304,Hr=306,xi=1e3,gi=1001,Za=1002,tn=1003,Du=1004,Xs=1005,Tn=1006,jr=1007,_i=1008,Pn=1009,Vc=1010,Gc=1011,Ds=1012,zo=1013,Mi=1014,wn=1015,Cn=1016,Ho=1017,ko=1018,Is=1020,Wc=35902,Xc=35899,qc=1021,Yc=1022,vn=1023,Us=1026,Ns=1027,Vo=1028,Go=1029,$c=1030,Wo=1031,Xo=1033,yr=33776,Er=33777,br=33778,Tr=33779,Ja=35840,Qa=35841,to=35842,eo=35843,no=36196,io=37492,so=37496,ro=37808,ao=37809,oo=37810,lo=37811,co=37812,ho=37813,uo=37814,fo=37815,po=37816,mo=37817,go=37818,_o=37819,vo=37820,xo=37821,Mo=36492,So=36494,yo=36495,Eo=36283,bo=36284,To=36285,wo=36286,Iu=3200,jc=3201,qo=0,Uu=1,zn="",De="srgb",ss="srgb-linear",Lr="linear",te="srgb",Ai=7680,Tl=519,Nu=512,Fu=513,Ou=514,Kc=515,Bu=516,zu=517,Hu=518,ku=519,Ao=35044,wl="300 es",An=2e3,Dr=2001;class cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const Rs=Math.PI/180,Fs=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function Yo(i,t){return(i%t+t)%t}function Vu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Gu(i,t,e){return i!==t?(e-i)/(t-i):0}function Cs(i,t,e){return(1-e)*i+e*t}function Wu(i,t,e,n){return Cs(i,t,1-Math.exp(-e*n))}function Xu(i,t=1){return t-Math.abs(Yo(i,t*2)-t)}function qu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $u(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ju(i,t){return i+Math.random()*(t-i)}function Ku(i){return i*(.5-Math.random())}function Zu(i){i!==void 0&&(Al=i);let t=Al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ju(i){return i*Rs}function Qu(i){return i*Fs}function td(i){return(i&i-1)===0&&i!==0}function ed(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function id(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Te={DEG2RAD:Rs,RAD2DEG:Fs,generateUUID:Vn,clamp:Gt,euclideanModulo:Yo,mapLinear:Vu,inverseLerp:Gu,lerp:Cs,damp:Wu,pingpong:Xu,smoothstep:qu,smootherstep:Yu,randInt:$u,randFloat:ju,randFloatSpread:Ku,seededRandom:Zu,degToRad:Ju,radToDeg:Qu,isPowerOfTwo:td,ceilPowerOfTwo:ed,floorPowerOfTwo:nd,setQuaternionFromProperEuler:id,normalize:ee,denormalize:_n};class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*_,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const A=Math.sqrt(b),T=Math.atan2(A,p*M);g=Math.sin(g*T)/A,o=Math.sin(o*T)/A}const v=o*M;if(l=l*g+d*v,c=c*g+f*v,h=h*g+m*v,u=u*g+_*v,g===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kr.copy(this).projectOnVector(t),this.sub(Kr)}reflect(t){return this.sub(Kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new D,Rl=new bi;class Ht{constructor(t,e,n,s,r,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],M=s[1],b=s[4],v=s[7],A=s[2],T=s[5],R=s[8];return r[0]=a*_+o*M+l*A,r[3]=a*g+o*b+l*T,r[6]=a*p+o*v+l*R,r[1]=c*_+h*M+u*A,r[4]=c*g+h*b+u*T,r[7]=c*p+h*v+u*R,r[2]=d*_+f*M+m*A,r[5]=d*g+f*b+m*T,r[8]=d*p+f*v+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new Ht;function Zc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sd(){const i=Os("canvas");return i.style.display="block",i}const Cl={};function Bs(i){i in Cl||(Cl[i]=!0,console.warn(i))}function rd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Pl=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ad(){const i={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ss]:{primaries:t,whitePoint:n,transfer:Lr,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}const $t=ad();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class od{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ri===void 0&&(Ri=Os("canvas")),Ri.width=t.width,Ri.height=t.height;const s=Ri.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Os("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ld=0;class $o{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jr(s[a].image)):r.push(Jr(s[a]))}else r=Jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?od.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cd=0;const Qr=new D;class Ie extends cs{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=gi,s=gi,r=Tn,a=_i,o=vn,l=Pn,c=Ie.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Vn(),this.name="",this.source=new $o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qr).x}get height(){return this.source.getSize(Qr).y}get depth(){return this.source.getSize(Qr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xi:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xi:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=kc;Ie.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,v=(f+1)/2,A=(p+1)/2,T=(h+d)/4,R=(u+_)/4,L=(m+g)/4;return b>v&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=R/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=L/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hd extends cs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ie(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new $o(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends hd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jc extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ud extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),Ys.subVectors(this.max,ms),Ci.subVectors(t.a,ms),Pi.subVectors(t.b,ms),Li.subVectors(t.c,ms),Wn.subVectors(Pi,Ci),Xn.subVectors(Li,Pi),ri.subVectors(Ci,Li);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ri.z,ri.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ri.z,0,-ri.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ri.y,ri.x,0];return!ta(e,Ci,Pi,Li,Ys)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,Ci,Pi,Li,Ys))?!1:($s.crossVectors(Wn,Xn),e=[$s.x,$s.y,$s.z],ta(e,Ci,Pi,Li,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Dn=[new D,new D,new D,new D,new D,new D,new D,new D],fn=new D,qs=new ti,Ci=new D,Pi=new D,Li=new D,Wn=new D,Xn=new D,ri=new D,ms=new D,Ys=new D,$s=new D,ai=new D;function ta(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ai.fromArray(i,r);const o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const dd=new ti,gs=new D,ea=new D;class hs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(ea)),this.expandByPoint(gs.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const In=new D,na=new D,js=new D,qn=new D,ia=new D,Ks=new D,sa=new D;class Qc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){na.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(na);const r=t.distanceTo(e)*.5,a=-this.direction.dot(js),o=qn.dot(this.direction),l=-qn.dot(js),c=qn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(na).addScaledVector(js,d),f}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){ia.subVectors(e,t),Ks.subVectors(n,t),sa.crossVectors(ia,Ks);let a=this.direction.dot(sa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);const l=o*this.direction.dot(Ks.crossVectors(qn,Ks));if(l<0)return null;const c=o*this.direction.dot(ia.cross(qn));if(c<0||l+c>a)return null;const h=-o*qn.dot(sa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,g){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fd,t,pd)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Yn.crossVectors(n,Ze),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Yn.crossVectors(n,Ze)),Yn.normalize(),Zs.crossVectors(Ze,Yn),s[0]=Yn.x,s[4]=Zs.x,s[8]=Ze.x,s[1]=Yn.y,s[5]=Zs.y,s[9]=Ze.y,s[2]=Yn.z,s[6]=Zs.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],b=n[7],v=n[11],A=n[15],T=s[0],R=s[4],L=s[8],S=s[12],y=s[1],P=s[5],F=s[9],H=s[13],X=s[2],W=s[6],q=s[10],K=s[14],k=s[3],ot=s[7],ut=s[11],wt=s[15];return r[0]=a*T+o*y+l*X+c*k,r[4]=a*R+o*P+l*W+c*ot,r[8]=a*L+o*F+l*q+c*ut,r[12]=a*S+o*H+l*K+c*wt,r[1]=h*T+u*y+d*X+f*k,r[5]=h*R+u*P+d*W+f*ot,r[9]=h*L+u*F+d*q+f*ut,r[13]=h*S+u*H+d*K+f*wt,r[2]=m*T+_*y+g*X+p*k,r[6]=m*R+_*P+g*W+p*ot,r[10]=m*L+_*F+g*q+p*ut,r[14]=m*S+_*H+g*K+p*wt,r[3]=M*T+b*y+v*X+A*k,r[7]=M*R+b*P+v*W+A*ot,r[11]=M*L+b*F+v*q+A*ut,r[15]=M*S+b*H+v*K+A*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],M=u*g*c-_*d*c+_*l*f-o*g*f-u*l*p+o*d*p,b=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,v=h*_*c-m*u*c+m*o*f-a*_*f-h*o*p+a*u*p,A=m*u*l-h*_*l-m*o*d+a*_*d+h*o*g-a*u*g,T=e*M+n*b+s*v+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=M*R,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*p-n*d*p)*R,t[2]=(o*g*r-_*l*r+_*s*c-n*g*c-o*s*p+n*l*p)*R,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*R,t[4]=b*R,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*R,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*p-e*l*p)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*R,t[8]=v*R,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(a*_*r-m*o*r+m*n*c-e*_*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*R,t[12]=A*R,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*g+e*u*g)*R,t[14]=(m*o*s-a*_*s-m*n*l+e*_*l+a*n*g-e*o*g)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,M=l*c,b=l*h,v=l*u,A=n.x,T=n.y,R=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+v)*A,s[2]=(m-b)*A,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(m+b)*R,s[9]=(g-M)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Di.set(s[0],s[1],s[2]).length();const a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const c=1/r,h=1/a,u=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=An,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===An)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Dr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===An)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===Dr)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new D,pn=new Zt,fd=new D(0,0,0),pd=new D(1,1,1),Yn=new D,Zs=new D,Ze=new D,Dl=new Zt,Il=new bi;class xn{constructor(t=0,e=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let md=0;const Ul=new D,Ii=new bi,Un=new Zt,Js=new D,_s=new D,gd=new D,_d=new bi,Nl=new D(1,0,0),Fl=new D(0,1,0),Ol=new D(0,0,1),Bl={type:"added"},vd={type:"removed"},Ui={type:"childadded",child:null},ra={type:"childremoved",child:null};class he extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new D,e=new xn,n=new bi,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ht}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Nl,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Ul.copy(t).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nl,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(_s,Js,this.up):Un.lookAt(Js,_s,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Un),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vd),ra.child=t,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,_d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}he.DEFAULT_UP=new D(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new D,Nn=new D,aa=new D,Fn=new D,Ni=new D,Fi=new D,zl=new D,oa=new D,la=new D,ca=new D,ha=new Me,ua=new Me,da=new Me;class on{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Nn.subVectors(n,e),aa.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Nn),l=mn.dot(aa),c=Nn.dot(Nn),h=Nn.dot(aa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ha.setScalar(0),ua.setScalar(0),da.setScalar(0),ha.fromBufferAttribute(t,e),ua.fromBufferAttribute(t,n),da.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ha,r.x),a.addScaledVector(ua,r.y),a.addScaledVector(da,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Nn.subVectors(t,e),mn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),mn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ni.subVectors(s,n),Fi.subVectors(r,n),oa.subVectors(t,n);const l=Ni.dot(oa),c=Fi.dot(oa);if(l<=0&&c<=0)return e.copy(n);la.subVectors(t,s);const h=Ni.dot(la),u=Fi.dot(la);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ni,a);ca.subVectors(t,r);const f=Ni.dot(ca),m=Fi.dot(ca);if(m>=0&&f<=m)return e.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Fi,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return zl.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(zl,o);const p=1/(g+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Yo(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=fa(a,r,t+1/3),this.g=fa(a,r,t),this.b=fa(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=eh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return $t.workingToColorSpace(Fe.copy(this),t),Math.round(Gt(Fe.r*255,0,255))*65536+Math.round(Gt(Fe.g*255,0,255))*256+Math.round(Gt(Fe.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=De){$t.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Qs);const n=Cs($n.h,Qs.h,e),s=Cs($n.s,Qs.s,e),r=Cs($n.l,Qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Ct;Ct.NAMES=eh;let xd=0;class ei extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Zi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=ka,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class us extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new D,tr=new _t;let Md=0;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ao,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ao&&(t.usage=this.usage),t}}class nh extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ih extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sd=0;const sn=new Zt,pa=new he,Oi=new D,Je=new ti,vs=new ti,Pe=new D;class ve extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zc(t)?ih:nh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return pa.lookAt(t),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Je.min,vs.min),Je.expandByPoint(Pe),Pe.addVectors(Je.max,vs.max),Je.expandByPoint(Pe)):(Je.expandByPoint(vs.min),Je.expandByPoint(vs.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(t,c),Pe.add(Oi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new D,l[L]=new D;const c=new D,h=new D,u=new D,d=new _t,f=new _t,m=new _t,_=new D,g=new D;function p(L,S,y){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[L].add(_),o[S].add(_),o[y].add(_),l[L].add(g),l[S].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,S=M.length;L<S;++L){const y=M[L],P=y.start,F=y.count;for(let H=P,X=P+F;H<X;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const b=new D,v=new D,A=new D,T=new D;function R(L){A.fromBufferAttribute(s,L),T.copy(A);const S=o[L];b.copy(S),b.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(T,S);const P=v.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,P)}for(let L=0,S=M.length;L<S;++L){const y=M[L],P=y.start,F=y.count;for(let H=P,X=P+F;H<X;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new Zt,oi=new Qc,er=new hs,kl=new D,nr=new D,ir=new D,sr=new D,ma=new D,rr=new D,Vl=new D,ar=new D;class Nt extends he{constructor(t=new ve,e=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ma.fromBufferAttribute(u,t),a?rr.addScaledVector(ma,h):rr.addScaledVector(ma.sub(e),h))}e.add(rr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(er.containsPoint(oi.origin)===!1&&(oi.intersectSphere(er,kl)===null||oi.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),oi.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,A=b;v<A;v+=3){const T=o.getX(v),R=o.getX(v+1),L=o.getX(v+2);s=or(this,p,t,n,c,h,u,T,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const M=o.getX(g),b=o.getX(g+1),v=o.getX(g+2);s=or(this,a,t,n,c,h,u,M,b,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,A=b;v<A;v+=3){const T=v,R=v+1,L=v+2;s=or(this,p,t,n,c,h,u,T,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const M=g,b=g+1,v=g+2;s=or(this,a,t,n,c,h,u,M,b,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function yd(i,t,e,n,s,r,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Jn,o),l===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ar);return c<e.near||c>e.far?null:{distance:c,point:ar.clone(),object:i}}function or(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,nr),i.getVertexPosition(l,ir),i.getVertexPosition(c,sr);const h=yd(i,t,e,n,nr,ir,sr,Vl);if(h){const u=new D;on.getBarycoord(Vl,nr,ir,sr,u),s&&(h.uv=on.getInterpolatedAttribute(s,o,l,c,u,new _t)),r&&(h.uv1=on.getInterpolatedAttribute(r,o,l,c,u,new _t)),a&&(h.normal=on.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};on.getNormal(nr,ir,sr,d.normal),h.face=d,h.barycoord=u}return h}class dn extends ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function m(_,g,p,M,b,v,A,T,R,L,S){const y=v/R,P=A/L,F=v/2,H=A/2,X=T/2,W=R+1,q=L+1;let K=0,k=0;const ot=new D;for(let ut=0;ut<q;ut++){const wt=ut*P-H;for(let Wt=0;Wt<W;Wt++){const re=Wt*y-F;ot[_]=re*M,ot[g]=wt*b,ot[p]=X,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[g]=0,ot[p]=T>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Wt/R),u.push(1-ut/L),K+=1}}for(let ut=0;ut<L;ut++)for(let wt=0;wt<R;wt++){const Wt=d+wt+W*ut,re=d+wt+W*(ut+1),de=d+(wt+1)+W*(ut+1),Jt=d+(wt+1)+W*ut;l.push(Wt,re,Jt),l.push(re,de,Jt),k+=6}o.addGroup(f,k,S),f+=k,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=rs(i[e]);for(const s in n)t[s]=n[s]}return t}function Ed(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const as={clone:rs,merge:He};var bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oe extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rh extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new D,Gl=new _t,Wl=new _t;class Qe extends rh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Wl),e.subVectors(Wl,Gl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class wd extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Bi,zi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Bi,zi,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Bi,zi,t,e);a.layers=this.layers,this.add(a);const o=new Qe(Bi,zi,t,e);o.layers=this.layers,this.add(o);const l=new Qe(Bi,zi,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Bi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ah extends Ie{constructor(t=[],e=ns,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ad extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ah(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dn(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:kn});r.uniforms.tEquirect.value=e;const a=new Nt(s,r),o=e.minFilter;return e.minFilter===_i&&(e.minFilter=Tn),new wd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Le extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rd={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class jo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(t),this.density=e}clone(){return new jo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cd extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ao,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new D;class Ir{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ir(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oh extends ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hi;const xs=new D,ki=new D,Vi=new D,Gi=new _t,Ms=new _t,lh=new Zt,lr=new D,Ss=new D,cr=new D,Xl=new _t,_a=new _t,ql=new _t;class Ld extends he{constructor(t=new oh){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pd(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Ir(n,3,0,!1)),Hi.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new _t(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Vi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;hr(lr.set(-.5,-.5,0),Vi,a,ki,s,r),hr(Ss.set(.5,-.5,0),Vi,a,ki,s,r),hr(cr.set(.5,.5,0),Vi,a,ki,s,r),Xl.set(0,0),_a.set(1,0),ql.set(1,1);let o=t.ray.intersectTriangle(lr,Ss,cr,!1,xs);if(o===null&&(hr(Ss.set(-.5,.5,0),Vi,a,ki,s,r),_a.set(0,1),o=t.ray.intersectTriangle(lr,cr,Ss,!1,xs),o===null))return;const l=t.ray.origin.distanceTo(xs);l<t.near||l>t.far||e.push({distance:l,point:xs.clone(),uv:on.getInterpolation(xs,lr,Ss,cr,Xl,_a,ql,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function hr(i,t,e,n,s,r){Gi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ms.x=r*Gi.x-s*Gi.y,Ms.y=s*Gi.x+r*Gi.y):Ms.copy(Gi),i.copy(t),i.x+=Ms.x,i.y+=Ms.y,i.applyMatrix4(lh)}class Dd extends Ie{constructor(t=null,e=1,n=1,s,r,a,o,l,c=tn,h=tn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yl extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new Zt,$l=new Zt,ur=[],jl=new ti,Id=new Zt,ys=new Nt,Es=new hs;class ln extends Nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Id)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),jl.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(jl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Es.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),$l.multiplyMatrices(n,Wi),ys.matrixWorld=$l,ys.raycast(t,ur);for(let a=0,o=ur.length;a<o;a++){const l=ur[a];l.instanceId=r,l.object=this,e.push(l)}ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dd(new Float32Array(s*this.count),s,this.count,Vo,wn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const va=new D,Ud=new D,Nd=new Ht;class ui{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=va.subVectors(n,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nd.getNormalMatrix(t),s=this.coplanarPoint(va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new hs,Fd=new _t(.5,.5),dr=new D;class Ko{constructor(t=new ui,e=new ui,n=new ui,s=new ui,r=new ui,a=new ui){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],M=r[12],b=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,p-m,A-M).normalize(),s[1].setComponents(c+a,f+h,p+m,A+M).normalize(),s[2].setComponents(c+o,f+u,p+_,A+b).normalize(),s[3].setComponents(c-o,f-u,p-_,A-b).normalize(),n)s[4].setComponents(l,d,g,v).normalize(),s[5].setComponents(c-l,f-d,p-g,A-v).normalize();else if(s[4].setComponents(c-l,f-d,p-g,A-v).normalize(),e===An)s[5].setComponents(c+l,f+d,p+g,A+v).normalize();else if(e===Dr)s[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=Fd.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zo extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ur=new D,Nr=new D,Kl=new Zt,bs=new Qc,fr=new hs,xa=new D,Zl=new D;class ch extends he{constructor(t=new ve,e=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ur.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Nr);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;Kl.copy(s).invert(),bs.copy(t.ray).applyMatrix4(Kl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),M=h.getX(_+1),b=pr(this,t,bs,l,p,M,_);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=pr(this,t,bs,l,_,g,m-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=pr(this,t,bs,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=pr(this,t,bs,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Ur.fromBufferAttribute(o,s),Nr.fromBufferAttribute(o,r),e.distanceSqToSegment(Ur,Nr,xa,Zl)>n)return;xa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(xa);if(!(c<t.near||c>t.far))return{distance:c,point:Zl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Jo extends Ie{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hh extends Ie{constructor(t,e,n=Mi,s,r,a,o=tn,l=tn,c,h=Us,u=1){if(h!==Us&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $o(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class uh extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qo extends ve{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=n*2+r,_=s+1,g=new D,p=new D;for(let M=0;M<=m;M++){let b=0,v=0,A=0,T=0;if(M<=n){const S=M/n,y=S*Math.PI/2;v=-h-t*Math.cos(y),A=t*Math.sin(y),T=-t*Math.cos(y),b=S*u}else if(M<=n+r){const S=(M-n)/r;v=-h+S*e,A=t,T=0,b=u+S*d}else{const S=(M-n-r)/n,y=S*Math.PI/2;v=h+t*Math.sin(y),A=t*Math.cos(y),T=t*Math.sin(y),b=u+d+S*u}const R=Math.max(0,Math.min(1,b/f));let L=0;M===0?L=.5/s:M===m&&(L=-.5/s);for(let S=0;S<=s;S++){const y=S/s,P=y*Math.PI*2,F=Math.sin(P),H=Math.cos(P);p.x=-A*H,p.y=v,p.z=A*F,o.push(p.x,p.y,p.z),g.set(-A*H,T,A*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(y+L,R)}if(M>0){const S=(M-1)*_;for(let y=0;y<s;y++){const P=S+y,F=S+y+1,H=M*_+y,X=M*_+y+1;a.push(P,F,H),a.push(F,X,H)}}}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Rn extends ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;M(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function M(){const v=new D,A=new D;let T=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const S=[],y=L/r,P=y*(e-t)+t;for(let F=0;F<=s;F++){const H=F/s,X=H*l+o,W=Math.sin(X),q=Math.cos(X);A.x=P*W,A.y=-y*n+g,A.z=P*q,u.push(A.x,A.y,A.z),v.set(W,R,q).normalize(),d.push(v.x,v.y,v.z),f.push(H,1-y),S.push(m++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const y=_[S][L],P=_[S+1][L],F=_[S+1][L+1],H=_[S][L+1];(t>0||S!==0)&&(h.push(y,P,H),T+=3),(e>0||S!==r-1)&&(h.push(P,F,H),T+=3)}c.addGroup(p,T,0),p+=T}function b(v){const A=m,T=new _t,R=new D;let L=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),m++;const P=m;for(let F=0;F<=s;F++){const X=F/s*l+o,W=Math.cos(X),q=Math.sin(X);R.x=S*q,R.y=g*y,R.z=S*W,u.push(R.x,R.y,R.z),d.push(0,y,0),T.x=W*.5+.5,T.y=q*.5*y+.5,f.push(T.x,T.y),m++}for(let F=0;F<s;F++){const H=A+F,X=P+F;v===!0?h.push(X,X+1,H):h.push(X+1,X,H),L+=3}c.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tl extends Rn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new tl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class el extends ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const b=new D,v=new D,A=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],b),f(e[T+1],v),f(e[T+2],A),l(b,v,A,M)}function l(M,b,v,A){const T=A+1,R=[];for(let L=0;L<=T;L++){R[L]=[];const S=M.clone().lerp(v,L/T),y=b.clone().lerp(v,L/T),P=T-L;for(let F=0;F<=P;F++)F===0&&L===T?R[L][F]=S:R[L][F]=S.clone().lerp(y,F/P)}for(let L=0;L<T;L++)for(let S=0;S<2*(T-L)-1;S++){const y=Math.floor(S/2);S%2===0?(d(R[L][y+1]),d(R[L+1][y]),d(R[L][y])):(d(R[L][y+1]),d(R[L+1][y+1]),d(R[L+1][y]))}}function c(M){const b=new D;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(M),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){const M=new D;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];const v=g(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;a.push(v,1-A)}m(),u()}function u(){for(let M=0;M<a.length;M+=6){const b=a[M+0],v=a[M+2],A=a[M+4],T=Math.max(b,v,A),R=Math.min(b,v,A);T>.9&&R<.1&&(b<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,b){const v=M*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function m(){const M=new D,b=new D,v=new D,A=new D,T=new _t,R=new _t,L=new _t;for(let S=0,y=0;S<r.length;S+=9,y+=6){M.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),L.set(a[y+4],a[y+5]),A.copy(M).add(b).add(v).divideScalar(3);const P=g(A);_(T,y+0,M,P),_(R,y+2,b,P),_(L,y+4,v,P)}}function _(M,b,v,A){A<0&&M.x===1&&(a[b]=M.x-1),v.x===0&&v.z===0&&(a[b]=A/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.vertices,t.indices,t.radius,t.details)}}class Od{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new _t:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],a=[],o=new D,l=new Zt;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Gt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function nl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const mr=new D,Ma=new nl,Sa=new nl,ya=new nl;class Bd extends Od{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(mr.subVectors(s[0],s[1]).add(s[0]),c=mr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Ma.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,g),Sa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,g),ya.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ya.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ma.calc(l),Sa.calc(l),ya.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Fr extends el{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fr(t.radius,t.detail)}}class we extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const M=p*d-a;for(let b=0;b<c;b++){const v=b*u-r;m.push(v,-M,0),_.push(0,0,1),g.push(b/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const b=M+c*p,v=M+c*(p+1),A=M+1+c*(p+1),T=M+1+c*p;f.push(b,v,T),f.push(v,A,T)}this.setIndex(f),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.widthSegments,t.heightSegments)}}class Kn extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const M=[],b=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const T=A/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+b*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(T+v,1-b),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const b=h[p][M+1],v=h[p][M],A=h[p+1][M],T=h[p+1][M+1];(p!==0||a>0)&&f.push(b,v,T),(p!==n-1||l<Math.PI)&&f.push(v,A,T)}this.setIndex(f),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zd extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class le extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hd extends le{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Qi extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dh extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kd extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ea={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vd{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Gd=new Vd;class il{constructor(t){this.manager=t!==void 0?t:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}il.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi=new WeakMap;class Wd extends il{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ea.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=Xi.get(a);u===void 0&&(u=[],Xi.set(a,u)),u.push({onLoad:e,onError:s})}return a}const o=Os("img");function l(){h(),e&&e(this);const u=Xi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Xi.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Ea.remove(`image:${t}`);const d=Xi.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}Xi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ea.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class fh extends il{constructor(t){super(t)}load(t,e,n,s){const r=new Ie,a=new Wd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ph extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xd extends ph{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ba=new Zt,Jl=new D,Ql=new D;class qd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),Ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ql),e.updateMatrixWorld(),ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sl extends rh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yd extends qd{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mh extends ph{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new Yd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $d extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class gh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function tc(i,t,e,n){const s=jd(n);switch(e){case qc:return i*t;case Vo:return i*t/s.components*s.byteLength;case Go:return i*t/s.components*s.byteLength;case $c:return i*t*2/s.components*s.byteLength;case Wo:return i*t*2/s.components*s.byteLength;case Yc:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Xo:return i*t*4/s.components*s.byteLength;case yr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:case eo:return Math.max(i,16)*Math.max(t,8)/4;case Ja:case to:return Math.max(i,8)*Math.max(t,8)/2;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Mo:case So:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Eo:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case To:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jd(i){switch(i){case Pn:case Vc:return{byteLength:1,components:1};case Ds:case Gc:case Cn:return{byteLength:2,components:1};case Ho:case ko:return{byteLength:2,components:4};case Mi:case zo:case wn:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _h(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ef=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,op=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ym=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Zd,alphahash_pars_fragment:Jd,alphamap_fragment:Qd,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:af,batching_vertex:of,begin_vertex:lf,beginnormal_vertex:cf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:_f,color_pars_fragment:vf,color_pars_vertex:xf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:yf,defaultnormal_vertex:Ef,displacementmap_pars_vertex:bf,displacementmap_vertex:Tf,emissivemap_fragment:wf,emissivemap_pars_fragment:Af,colorspace_fragment:Rf,colorspace_pars_fragment:Cf,envmap_fragment:Pf,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Df,envmap_pars_vertex:If,envmap_physical_pars_fragment:Wf,envmap_vertex:Uf,fog_vertex:Nf,fog_pars_vertex:Ff,fog_fragment:Of,fog_pars_fragment:Bf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:Hf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Gf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:$f,lights_physical_fragment:jf,lights_physical_pars_fragment:Kf,lights_fragment_begin:Zf,lights_fragment_maps:Jf,lights_fragment_end:Qf,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:sp,map_pars_fragment:rp,map_particle_fragment:ap,map_particle_pars_fragment:op,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:hp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:fp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:_p,normal_pars_vertex:vp,normal_vertex:xp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:bp,opaque_fragment:Tp,packing:wp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:Fp,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:zp,skinnormal_vertex:Hp,specularmap_fragment:kp,specularmap_pars_fragment:Vp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:Yp,uv_pars_vertex:$p,uv_vertex:jp,worldpos_vertex:Kp,background_vert:Zp,background_frag:Jp,backgroundCube_vert:Qp,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:sm,distanceRGBA_vert:rm,distanceRGBA_frag:am,equirect_vert:om,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:fm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:_m,meshnormal_frag:vm,meshphong_vert:xm,meshphong_frag:Mm,meshphysical_vert:Sm,meshphysical_frag:ym,meshtoon_vert:Em,meshtoon_frag:bm,points_vert:Tm,points_frag:wm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},at={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},bn={basic:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:He([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:He([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:He([at.points,at.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:He([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:He([at.common,at.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:He([at.sprite,at.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:He([at.common,at.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:He([at.lights,at.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};bn.physical={uniforms:He([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const gr={r:0,b:0,g:0},ci=new xn,Lm=new Zt;function Dm(i,t,e,n,s,r,a){const o=new Ct(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function _(b){let v=!1;const A=m(b);A===null?p(o,l):A&&A.isColor&&(p(A,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,v){const A=m(v);A&&(A.isCubeTexture||A.mapping===Hr)?(h===void 0&&(h=new Nt(new dn(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:rs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ci.copy(v.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(ci)),h.material.toneMapped=$t.getTransfer(A.colorSpace)!==te,(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Nt(new we(2,2),new Oe({name:"BackgroundMaterial",uniforms:rs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=$t.getTransfer(A.colorSpace)!==te,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(gr,sh(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,v,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:g,dispose:M}}function Im(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,P,F,H,X){let W=!1;const q=u(H,F,P);r!==q&&(r=q,c(r.object)),W=f(y,H,F,X),W&&m(y,H,F,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(y,P,F,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,F){const H=F.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let W=X[P.id];W===void 0&&(W={},X[P.id]=W);let q=W[H];return q===void 0&&(q=d(l()),W[H]=q),q}function d(y){const P=[],F=[],H=[];for(let X=0;X<e;X++)P[X]=0,F[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:H,object:y,attributes:{},index:null}}function f(y,P,F,H){const X=r.attributes,W=P.attributes;let q=0;const K=F.getAttributes();for(const k in K)if(K[k].location>=0){const ut=X[k];let wt=W[k];if(wt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor)),ut===void 0||ut.attribute!==wt||wt&&ut.data!==wt.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function m(y,P,F,H){const X={},W=P.attributes;let q=0;const K=F.getAttributes();for(const k in K)if(K[k].location>=0){let ut=W[k];ut===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));const wt={};wt.attribute=ut,ut&&ut.data&&(wt.data=ut.data),X[k]=wt,q++}r.attributes=X,r.attributesNum=q,r.index=H}function _(){const y=r.newAttributes;for(let P=0,F=y.length;P<F;P++)y[P]=0}function g(y){p(y,0)}function p(y,P){const F=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;F[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),X[y]!==P&&(i.vertexAttribDivisor(y,P),X[y]=P)}function M(){const y=r.newAttributes,P=r.enabledAttributes;for(let F=0,H=P.length;F<H;F++)P[F]!==y[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function b(y,P,F,H,X,W,q){q===!0?i.vertexAttribIPointer(y,P,F,X,W):i.vertexAttribPointer(y,P,F,H,X,W)}function v(y,P,F,H){_();const X=H.attributes,W=F.getAttributes(),q=P.defaultAttributeValues;for(const K in W){const k=W[K];if(k.location>=0){let ot=X[K];if(ot===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),ot!==void 0){const ut=ot.normalized,wt=ot.itemSize,Wt=t.get(ot);if(Wt===void 0)continue;const re=Wt.buffer,de=Wt.type,Jt=Wt.bytesPerElement,Y=de===i.INT||de===i.UNSIGNED_INT||ot.gpuType===zo;if(ot.isInterleavedBufferAttribute){const Z=ot.data,pt=Z.stride,Ut=ot.offset;if(Z.isInstancedInterleavedBuffer){for(let Tt=0;Tt<k.locationSize;Tt++)p(k.location+Tt,Z.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<k.locationSize;Tt++)g(k.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Tt=0;Tt<k.locationSize;Tt++)b(k.location+Tt,wt/k.locationSize,de,ut,pt*Jt,(Ut+wt/k.locationSize*Tt)*Jt,Y)}else{if(ot.isInstancedBufferAttribute){for(let Z=0;Z<k.locationSize;Z++)p(k.location+Z,ot.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Z=0;Z<k.locationSize;Z++)g(k.location+Z);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Z=0;Z<k.locationSize;Z++)b(k.location+Z,wt/k.locationSize,de,ut,wt*Jt,wt/k.locationSize*Z*Jt,Y)}}else if(q!==void 0){const ut=q[K];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(k.location,ut);break;case 3:i.vertexAttrib3fv(k.location,ut);break;case 4:i.vertexAttrib4fv(k.location,ut);break;default:i.vertexAttrib1fv(k.location,ut)}}}}M()}function A(){L();for(const y in n){const P=n[y];for(const F in P){const H=P[F];for(const X in H)h(H[X].object),delete H[X];delete P[F]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const F in P){const H=P[F];for(const X in H)h(H[X].object),delete H[X];delete P[F]}delete n[y.id]}function R(y){for(const P in n){const F=n[P];if(F[y.id]===void 0)continue;const H=F[y.id];for(const X in H)h(H[X].object),delete H[X];delete F[y.id]}}function L(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Um(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Nm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:A,maxSamples:T}}function Fm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ui,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,b=M*4;let v=p.clippingState||null;l.value=v,v=h(m,d,b,f);for(let A=0;A!==b;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,v=f;b!==_;++b,v+=4)a.copy(u[b]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Om(i){let t=new WeakMap;function e(a,o){return o===ja?a.mapping=ns:o===Ka&&(a.mapping=is),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ja||o===Ka)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ad(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ji=4,ec=[.125,.215,.35,.446,.526,.582],pi=20,Ta=new sl,nc=new Ct;let wa=null,Aa=0,Ra=0,Ca=!1;const di=(1+Math.sqrt(5))/2,qi=1/di,ic=[new D(-di,qi,0),new D(di,qi,0),new D(-qi,0,di),new D(qi,0,di),new D(0,di,-qi),new D(0,di,qi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Bm=new D;class Or{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Bm}=r;wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Aa,Ra),this._renderer.xr.enabled=Ca,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Cn,format:vn,colorSpace:ss,depthBuffer:!1},s=sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(r)),this._blurMaterial=Hm(r,t,e)}return s}_compileMaterial(t){const e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,n,s,r){const l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(nc),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new us({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Nt(new dn,_);let p=!1;const M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,p=!0):(_.color.copy(nc),p=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const A=this._cubeSize;_r(s,v*A,b>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ns||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;_r(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ta)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ic[(s-r-1)%ic.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Nt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):pi;g>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pi}`);const p=[];let M=0;for(let R=0;R<pi;++R){const L=R/_,S=Math.exp(-L*L/2);p.push(S),R===0?M+=S:R<g&&(M+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;const v=this._sizeLods[s],A=3*v*(s>b-ji?s-b+ji:0),T=4*(this._cubeSize-v);_r(e,A,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Ta)}}function zm(i){const t=[],e=[],n=[];let s=i;const r=i-ji+1+ec.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ji?l=ec[a-i+ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*f),b=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,L=T>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];M.set(S,_*m*T),b.set(d,g*m*T);const y=[T,T,T,T,T,T];v.set(y,p*m*T)}const A=new ve;A.setAttribute("position",new $e(M,_)),A.setAttribute("uv",new $e(b,g)),A.setAttribute("faceIndex",new $e(v,p)),t.push(A),s>ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sc(i,t,e){const n=new hn(i,t,e);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hm(i,t,e){const n=new Float32Array(pi),s=new D(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function rc(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ac(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function km(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ja||l===Ka,h=l===ns||l===is;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Or(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Or(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let b=0,v=M.length;b<v;b+=3){const A=M[b+0],T=M[b+1],R=M[b+2];d.push(A,T,T,R,R,A)}}else if(m!==void 0){const M=m.array;_=m.version;for(let b=0,v=M.length/3-1;b<v;b+=3){const A=b+0,T=b+1,R=b+2;d.push(A,T,T,R,R,A)}}else return;const g=new(Zc(d)?ih:nh)(d,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Wm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){const n=new WeakMap,s=new Me;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let A=o.attributes.position.count*v,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*T*4*u),L=new Jc(R,A,T,u);L.type=wn,L.needsUpdate=!0;const S=v*4;for(let P=0;P<u;P++){const F=p[P],H=M[P],X=b[P],W=A*T*4*P;for(let q=0;q<F.count;q++){const K=q*S;m===!0&&(s.fromBufferAttribute(F,q),R[W+K+0]=s.x,R[W+K+1]=s.y,R[W+K+2]=s.z,R[W+K+3]=0),_===!0&&(s.fromBufferAttribute(H,q),R[W+K+4]=s.x,R[W+K+5]=s.y,R[W+K+6]=s.z,R[W+K+7]=0),g===!0&&(s.fromBufferAttribute(X,q),R[W+K+8]=s.x,R[W+K+9]=s.y,R[W+K+10]=s.z,R[W+K+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new _t(A,T)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ym(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const vh=new Ie,oc=new hh(1,1),xh=new Jc,Mh=new ud,Sh=new ah,lc=[],cc=[],hc=new Float32Array(16),uc=new Float32Array(9),dc=new Float32Array(4);function ds(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=cc[t];e===void 0&&(e=new Int32Array(t),cc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),Re(e,n)}}function Qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),Re(e,n)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),Re(e,n)}}function eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oc.compareFunction=Kc,r=oc):r=vh,e.setTexture2D(t||r,s)}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mh,s)}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sh,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xh,s)}function fg(i){switch(i){case 5126:return $m;case 35664:return jm;case 35665:return Km;case 35666:return Zm;case 35674:return Jm;case 35675:return Qm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(i,t){i.uniform1fv(this.addr,t)}function mg(i,t){const e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function gg(i,t){const e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function _g(i,t){const e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function vg(i,t){const e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xg(i,t){const e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mg(i,t){const e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sg(i,t){i.uniform1iv(this.addr,t)}function yg(i,t){i.uniform2iv(this.addr,t)}function Eg(i,t){i.uniform3iv(this.addr,t)}function bg(i,t){i.uniform4iv(this.addr,t)}function Tg(i,t){i.uniform1uiv(this.addr,t)}function wg(i,t){i.uniform2uiv(this.addr,t)}function Ag(i,t){i.uniform3uiv(this.addr,t)}function Rg(i,t){i.uniform4uiv(this.addr,t)}function Cg(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vh,r[a])}function Pg(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mh,r[a])}function Lg(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Sh,r[a])}function Dg(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xh,r[a])}function Ig(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return vg;case 35675:return xg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return yg;case 35668:case 35672:return Eg;case 35669:case 35673:return bg;case 5125:return Tg;case 36294:return wg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fg(e.type)}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ig(e.type)}}class Fg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function fc(i,t){i.seq.push(t),i.map[t.id]=t}function Og(i,t,e){const n=i.name,s=n.length;for(Pa.lastIndex=0;;){const r=Pa.exec(n),a=Pa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fc(e,c===void 0?new Ug(o,i,t):new Ng(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Fg(o),fc(e,u)),e=u}}}class wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Og(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function pc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bg=37297;let zg=0;function Hg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const mc=new Ht;function kg(i){$t._getMatrix(mc,$t.workingColorSpace,i);const t=`mat3( ${mc.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Lr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Hg(i.getShaderSource(t),o)}else return r}function Vg(i,t){const e=kg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gg(i,t){let e;switch(t){case Fc:e="Linear";break;case Oc:e="Reinhard";break;case Bc:e="Cineon";break;case zr:e="ACESFilmic";break;case Bo:e="AgX";break;case Hc:e="Neutral";break;case zc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vr=new D;function Wg(){$t.getLuminanceCoefficients(vr);const i=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function qg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function As(i){return i!==""}function _c(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(i){return i.replace($g,Kg)}const jg=new Map;function Kg(i,t){let e=Ft[t];if(e===void 0){const n=jg.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ro(e)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(Zg,Jg)}function Jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function t0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case Hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function n0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oo:t="ENVMAP_BLENDING_MULTIPLY";break;case Pu:t="ENVMAP_BLENDING_MIX";break;case Lu:t="ENVMAP_BLENDING_ADD";break}return t}function i0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function s0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Qg(e),c=t0(e),h=e0(e),u=n0(e),d=i0(e),f=Xg(e),m=qg(r),_=s.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(As).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(As).join(`
`),p.length>0&&(p+=`
`)):(g=[Mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),p=[Mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),Wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),a=Ro(a),a=_c(a,e),a=vc(a,e),o=Ro(o),o=_c(o,e),o=vc(o,e),a=xc(a),o=xc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+g+a,v=M+p+o,A=pc(s,s.VERTEX_SHADER,b),T=pc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(T)||"",W=F.trim(),q=H.trim(),K=X.trim();let k=!0,ot=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,T);else{const ut=gc(s,A,"vertex"),wt=gc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ut+`
`+wt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||K==="")&&(ot=!1);ot&&(P.diagnostics={runnable:k,programLog:W,vertexShader:{log:q,prefix:g},fragmentShader:{log:K,prefix:p}})}s.deleteShader(A),s.deleteShader(T),L=new wr(s,_),S=Yg(s,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Bg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let r0=0;class a0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new o0(t),e.set(t,n)),n}}class o0{constructor(t){this.id=r0++,this.code=t,this.usedTimes=0}}function l0(i,t,e,n,s,r,a){const o=new th,l=new a0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,y,P,F,H){const X=F.fog,W=H.geometry,q=S.isMeshStandardMaterial?F.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),k=K&&K.mapping===Hr?K.image.height:null,ot=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,wt=ut!==void 0?ut.length:0;let Wt=0;W.morphAttributes.position!==void 0&&(Wt=1),W.morphAttributes.normal!==void 0&&(Wt=2),W.morphAttributes.color!==void 0&&(Wt=3);let re,de,Jt,Y;if(ot){const Qt=bn[ot];re=Qt.vertexShader,de=Qt.fragmentShader}else re=S.vertexShader,de=S.fragmentShader,l.update(S),Jt=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const Z=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Ut=H.isInstancedMesh===!0,Tt=H.isBatchedMesh===!0,Yt=!!S.map,Ue=!!S.matcap,C=!!K,fe=!!S.aoMap,Bt=!!S.lightMap,Dt=!!S.bumpMap,vt=!!S.normalMap,pe=!!S.displacementMap,xt=!!S.emissiveMap,kt=!!S.metalnessMap,Ce=!!S.roughnessMap,Se=S.anisotropy>0,w=S.clearcoat>0,x=S.dispersion>0,O=S.iridescence>0,G=S.sheen>0,j=S.transmission>0,V=Se&&!!S.anisotropyMap,bt=w&&!!S.clearcoatMap,st=w&&!!S.clearcoatNormalMap,St=w&&!!S.clearcoatRoughnessMap,yt=O&&!!S.iridescenceMap,et=O&&!!S.iridescenceThicknessMap,ht=G&&!!S.sheenColorMap,Lt=G&&!!S.sheenRoughnessMap,Et=!!S.specularMap,lt=!!S.specularColorMap,zt=!!S.specularIntensityMap,I=j&&!!S.transmissionMap,nt=j&&!!S.thicknessMap,rt=!!S.gradientMap,ft=!!S.alphaMap,Q=S.alphaTest>0,$=!!S.alphaHash,gt=!!S.extensions;let Ot=Zn;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const ae={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:de,defines:S.defines,customVertexShaderID:Jt,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&H._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&H.instanceColor!==null,instancingMorph:Ut&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ss,alphaToCoverage:!!S.alphaToCoverage,map:Yt,matcap:Ue,envMap:C,envMapMode:C&&K.mapping,envMapCubeUVHeight:k,aoMap:fe,lightMap:Bt,bumpMap:Dt,normalMap:vt,displacementMap:d&&pe,emissiveMap:xt,normalMapObjectSpace:vt&&S.normalMapType===Uu,normalMapTangentSpace:vt&&S.normalMapType===qo,metalnessMap:kt,roughnessMap:Ce,anisotropy:Se,anisotropyMap:V,clearcoat:w,clearcoatMap:bt,clearcoatNormalMap:st,clearcoatRoughnessMap:St,dispersion:x,iridescence:O,iridescenceMap:yt,iridescenceThicknessMap:et,sheen:G,sheenColorMap:ht,sheenRoughnessMap:Lt,specularMap:Et,specularColorMap:lt,specularIntensityMap:zt,transmission:j,transmissionMap:I,thicknessMap:nt,gradientMap:rt,opaque:S.transparent===!1&&S.blending===Zi&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:Q,alphaHash:$,combine:S.combine,mapUv:Yt&&_(S.map.channel),aoMapUv:fe&&_(S.aoMap.channel),lightMapUv:Bt&&_(S.lightMap.channel),bumpMapUv:Dt&&_(S.bumpMap.channel),normalMapUv:vt&&_(S.normalMap.channel),displacementMapUv:pe&&_(S.displacementMap.channel),emissiveMapUv:xt&&_(S.emissiveMap.channel),metalnessMapUv:kt&&_(S.metalnessMap.channel),roughnessMapUv:Ce&&_(S.roughnessMap.channel),anisotropyMapUv:V&&_(S.anisotropyMap.channel),clearcoatMapUv:bt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(S.sheenRoughnessMap.channel),specularMapUv:Et&&_(S.specularMap.channel),specularColorMapUv:lt&&_(S.specularColorMap.channel),specularIntensityMapUv:zt&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:nt&&_(S.thicknessMap.channel),alphaMapUv:ft&&_(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(vt||Se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(Yt||ft),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:H.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Yt&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===te,decodeVideoTextureEmissive:xt&&S.emissiveMap.isVideoTexture===!0&&$t.getTransfer(S.emissiveMap.colorSpace)===te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ce,flipSided:S.side===We,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:gt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&S.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(y,S),b(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const y=m[S.type];let P;if(y){const F=bn[y];P=as.clone(F.uniforms)}else P=S.uniforms;return P}function A(S,y){let P;for(let F=0,H=h.length;F<H;F++){const X=h[F];if(X.cacheKey===y){P=X,++P.usedTimes;break}}return P===void 0&&(P=new s0(i,y,S,r),h.push(P)),P}function T(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:L}}function c0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function h0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function o(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||h0),n.length>1&&n.sort(d||Sc),s.length>1&&s.sort(d||Sc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function u0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new yc,i.set(n,[a])):s>=r.length?(a=new yc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ct};break;case"SpotLight":e={position:new D,direction:new D,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function f0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let p0=0;function m0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g0(i){const t=new d0,e=f0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new Zt,a=new Zt;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,M=0,b=0,v=0,A=0,T=0,R=0;c.sort(m0);for(let S=0,y=c.length;S<y;S++){const P=c[S],F=P.color,H=P.intensity,X=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*H,u+=F.g*H,d+=F.b*H;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],H);R++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,k=e.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=q,f++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(F).multiplyScalar(H),q.distance=X,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[_]=q;const K=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,K.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=W,v++}_++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(F).multiplyScalar(H),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=q,g++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const K=P.shadow,k=e.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=P.shadow.matrix,b++}n.point[m]=q,m++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(H),q.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[p]=q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==b||L.numSpotShadows!==v||L.numSpotMaps!==A||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.directionalLength=f,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=b,L.numSpotShadows=v,L.numSpotMaps=A,L.numLightProbes=R,n.version=p0++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const b=c[p];if(b.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(b.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Ec(i){const t=new g0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ec(i),t.set(s,[o])):r>=a.length?(o=new Ec(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function M0(i,t,e){let n=new Ko;const s=new _t,r=new _t,a=new Me,o=new dh({depthPacking:jc}),l=new kd,c={},h=e.maxTextureSize,u={[Jn]:We,[We]:Jn,[ce]:ce},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:v0,fragmentShader:x0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new ve;m.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let p=this.type;this.render=function(T,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(kn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==Bn&&this.type===Bn,X=p===Bn&&this.type!==Bn;for(let W=0,q=T.length;W<q;W++){const K=T[W],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ot=k.getFrameExtents();if(s.multiply(ot),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,k.mapSize.y=r.y)),k.map===null||H===!0||X===!0){const wt=this.type!==Bn?{minFilter:tn,magFilter:tn}:{};k.map!==null&&k.map.dispose(),k.map=new hn(s.x,s.y,wt),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ut=k.getViewportCount();for(let wt=0;wt<ut;wt++){const Wt=k.getViewport(wt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),F.viewport(a),k.updateMatrices(K,wt),n=k.getFrustum(),v(R,L,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Bn&&M(k,L),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,y,P)};function M(T,R){const L=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,L,f,_,null)}function b(T,R,L,S){let y=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=y.uuid,H=R.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let W=X[H];W===void 0&&(W=y.clone(),X[H]=W,R.addEventListener("dispose",A)),y=W}if(y.visible=R.visible,y.wireframe=R.wireframe,S===Bn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=i.properties.get(y);F.light=L}return y}function v(T,R,L,S,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const H=t.update(T),X=T.material;if(Array.isArray(X)){const W=H.groups;for(let q=0,K=W.length;q<K;q++){const k=W[q],ot=X[k.materialIndex];if(ot&&ot.visible){const ut=b(T,ot,S,y);T.onBeforeShadow(i,T,R,L,H,ut,k),i.renderBufferDirect(L,null,H,ut,T,k),T.onAfterShadow(i,T,R,L,H,ut,k)}}}else if(X.visible){const W=b(T,X,S,y);T.onBeforeShadow(i,T,R,L,H,W,null),i.renderBufferDirect(L,null,H,W,T,null),T.onAfterShadow(i,T,R,L,H,W,null)}}const F=T.children;for(let H=0,X=F.length;H<X;H++)v(F[H],R,L,S,y)}function A(T){T.target.removeEventListener("dispose",A);for(const L in c){const S=c[L],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const S0={[Va]:Ga,[Wa]:Ya,[Xa]:$a,[es]:qa,[Ga]:Va,[Ya]:Wa,[$a]:Xa,[qa]:es};function y0(i,t){function e(){let I=!1;const nt=new Me;let rt=null;const ft=new Me(0,0,0,0);return{setMask:function(Q){rt!==Q&&!I&&(i.colorMask(Q,Q,Q,Q),rt=Q)},setLocked:function(Q){I=Q},setClear:function(Q,$,gt,Ot,ae){ae===!0&&(Q*=Ot,$*=Ot,gt*=Ot),nt.set(Q,$,gt,Ot),ft.equals(nt)===!1&&(i.clearColor(Q,$,gt,Ot),ft.copy(nt))},reset:function(){I=!1,rt=null,ft.set(-1,0,0,0)}}}function n(){let I=!1,nt=!1,rt=null,ft=null,Q=null;return{setReversed:function($){if(nt!==$){const gt=t.get("EXT_clip_control");$?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),nt=$;const Ot=Q;Q=null,this.setClear(Ot)}},getReversed:function(){return nt},setTest:function($){$?Z(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function($){rt!==$&&!I&&(i.depthMask($),rt=$)},setFunc:function($){if(nt&&($=S0[$]),ft!==$){switch($){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=$}},setLocked:function($){I=$},setClear:function($){Q!==$&&(nt&&($=1-$),i.clearDepth($),Q=$)},reset:function(){I=!1,rt=null,ft=null,Q=null,nt=!1}}}function s(){let I=!1,nt=null,rt=null,ft=null,Q=null,$=null,gt=null,Ot=null,ae=null;return{setTest:function(Qt){I||(Qt?Z(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Qt){nt!==Qt&&!I&&(i.stencilMask(Qt),nt=Qt)},setFunc:function(Qt,Ln,Sn){(rt!==Qt||ft!==Ln||Q!==Sn)&&(i.stencilFunc(Qt,Ln,Sn),rt=Qt,ft=Ln,Q=Sn)},setOp:function(Qt,Ln,Sn){($!==Qt||gt!==Ln||Ot!==Sn)&&(i.stencilOp(Qt,Ln,Sn),$=Qt,gt=Ln,Ot=Sn)},setLocked:function(Qt){I=Qt},setClear:function(Qt){ae!==Qt&&(i.clearStencil(Qt),ae=Qt)},reset:function(){I=!1,nt=null,rt=null,ft=null,Q=null,$=null,gt=null,Ot=null,ae=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,M=null,b=null,v=null,A=null,T=null,R=new Ct(0,0,0),L=0,S=!1,y=null,P=null,F=null,H=null,X=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=K>=2);let ot=null,ut={};const wt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),re=new Me().fromArray(wt),de=new Me().fromArray(Wt);function Jt(I,nt,rt,ft){const Q=new Uint8Array(4),$=i.createTexture();i.bindTexture(I,$),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<rt;gt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(nt+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return $}const Y={};Y[i.TEXTURE_2D]=Jt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(es),Dt(!1),vt(yl),Z(i.CULL_FACE),fe(kn);function Z(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function pt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ut(I,nt){return u[I]!==nt?(i.bindFramebuffer(I,nt),u[I]=nt,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=nt),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Tt(I,nt){let rt=f,ft=!1;if(I){rt=d.get(nt),rt===void 0&&(rt=[],d.set(nt,rt));const Q=I.textures;if(rt.length!==Q.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let $=0,gt=Q.length;$<gt;$++)rt[$]=i.COLOR_ATTACHMENT0+$;rt.length=Q.length,ft=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,ft=!0);ft&&i.drawBuffers(rt)}function Yt(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const Ue={[fi]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};Ue[mu]=i.MIN,Ue[gu]=i.MAX;const C={[_u]:i.ZERO,[vu]:i.ONE,[xu]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[Tu]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[Su]:i.DST_ALPHA,[Mu]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[yu]:i.ONE_MINUS_DST_ALPHA,[wu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Ru]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(I,nt,rt,ft,Q,$,gt,Ot,ae,Qt){if(I===kn){_===!0&&(pt(i.BLEND),_=!1);return}if(_===!1&&(Z(i.BLEND),_=!0),I!==du){if(I!==g||Qt!==S){if((p!==fi||v!==fi)&&(i.blendEquation(i.FUNC_ADD),p=fi,v=fi),Qt)switch(I){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case za:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case za:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case El:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,b=null,A=null,T=null,R.set(0,0,0),L=0,g=I,S=Qt}return}Q=Q||nt,$=$||rt,gt=gt||ft,(nt!==p||Q!==v)&&(i.blendEquationSeparate(Ue[nt],Ue[Q]),p=nt,v=Q),(rt!==M||ft!==b||$!==A||gt!==T)&&(i.blendFuncSeparate(C[rt],C[ft],C[$],C[gt]),M=rt,b=ft,A=$,T=gt),(Ot.equals(R)===!1||ae!==L)&&(i.blendColor(Ot.r,Ot.g,Ot.b,ae),R.copy(Ot),L=ae),g=I,S=!1}function Bt(I,nt){I.side===ce?pt(i.CULL_FACE):Z(i.CULL_FACE);let rt=I.side===We;nt&&(rt=!rt),Dt(rt),I.blending===Zi&&I.transparent===!1?fe(kn):fe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ft=I.stencilWrite;o.setTest(ft),ft&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function vt(I){I!==hu?(Z(i.CULL_FACE),I!==P&&(I===yl?i.cullFace(i.BACK):I===uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),P=I}function pe(I){I!==F&&(q&&i.lineWidth(I),F=I)}function xt(I,nt,rt){I?(Z(i.POLYGON_OFFSET_FILL),(H!==nt||X!==rt)&&(i.polygonOffset(nt,rt),H=nt,X=rt)):pt(i.POLYGON_OFFSET_FILL)}function kt(I){I?Z(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Ce(I){I===void 0&&(I=i.TEXTURE0+W-1),ot!==I&&(i.activeTexture(I),ot=I)}function Se(I,nt,rt){rt===void 0&&(ot===null?rt=i.TEXTURE0+W-1:rt=ot);let ft=ut[rt];ft===void 0&&(ft={type:void 0,texture:void 0},ut[rt]=ft),(ft.type!==I||ft.texture!==nt)&&(ot!==rt&&(i.activeTexture(rt),ot=rt),i.bindTexture(I,nt||Y[I]),ft.type=I,ft.texture=nt)}function w(){const I=ut[ot];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(I){re.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),re.copy(I))}function Lt(I){de.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),de.copy(I))}function Et(I,nt){let rt=c.get(nt);rt===void 0&&(rt=new WeakMap,c.set(nt,rt));let ft=rt.get(I);ft===void 0&&(ft=i.getUniformBlockIndex(nt,I.name),rt.set(I,ft))}function lt(I,nt){const ft=c.get(nt).get(I);l.get(nt)!==ft&&(i.uniformBlockBinding(nt,ft,I.__bindingPointIndex),l.set(nt,ft))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,ut={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,M=null,b=null,v=null,A=null,T=null,R=new Ct(0,0,0),L=0,S=!1,y=null,P=null,F=null,H=null,X=null,re.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:pt,bindFramebuffer:Ut,drawBuffers:Tt,useProgram:Yt,setBlending:fe,setMaterial:Bt,setFlipSided:Dt,setCullFace:vt,setLineWidth:pe,setPolygonOffset:xt,setScissorTest:kt,activeTexture:Ce,bindTexture:Se,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:yt,texImage3D:et,updateUBOMapping:Et,uniformBlockBinding:lt,texStorage2D:st,texStorage3D:St,texSubImage2D:G,texSubImage3D:j,compressedTexSubImage2D:V,compressedTexSubImage3D:bt,scissor:ht,viewport:Lt,reset:zt}}function E0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,x){return f?new OffscreenCanvas(w,x):Os("canvas")}function _(w,x,O){let G=1;const j=Se(w);if((j.width>O||j.height>O)&&(G=O/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const V=Math.floor(G*j.width),bt=Math.floor(G*j.height);u===void 0&&(u=m(V,bt));const st=x?m(V,bt):u;return st.width=V,st.height=bt,st.getContext("2d").drawImage(w,0,0,V,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+bt+")."),st}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,x,O,G,j=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=x;if(x===i.RED&&(O===i.FLOAT&&(V=i.R32F),O===i.HALF_FLOAT&&(V=i.R16F),O===i.UNSIGNED_BYTE&&(V=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.R8UI),O===i.UNSIGNED_SHORT&&(V=i.R16UI),O===i.UNSIGNED_INT&&(V=i.R32UI),O===i.BYTE&&(V=i.R8I),O===i.SHORT&&(V=i.R16I),O===i.INT&&(V=i.R32I)),x===i.RG&&(O===i.FLOAT&&(V=i.RG32F),O===i.HALF_FLOAT&&(V=i.RG16F),O===i.UNSIGNED_BYTE&&(V=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.RG8UI),O===i.UNSIGNED_SHORT&&(V=i.RG16UI),O===i.UNSIGNED_INT&&(V=i.RG32UI),O===i.BYTE&&(V=i.RG8I),O===i.SHORT&&(V=i.RG16I),O===i.INT&&(V=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.RGB8UI),O===i.UNSIGNED_SHORT&&(V=i.RGB16UI),O===i.UNSIGNED_INT&&(V=i.RGB32UI),O===i.BYTE&&(V=i.RGB8I),O===i.SHORT&&(V=i.RGB16I),O===i.INT&&(V=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),O===i.UNSIGNED_INT&&(V=i.RGBA32UI),O===i.BYTE&&(V=i.RGBA8I),O===i.SHORT&&(V=i.RGBA16I),O===i.INT&&(V=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),x===i.RGBA){const bt=j?Lr:$t.getTransfer(G);O===i.FLOAT&&(V=i.RGBA32F),O===i.HALF_FLOAT&&(V=i.RGBA16F),O===i.UNSIGNED_BYTE&&(V=bt===te?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function v(w,x){let O;return w?x===null||x===Mi||x===Is?O=i.DEPTH24_STENCIL8:x===wn?O=i.DEPTH32F_STENCIL8:x===Ds&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mi||x===Is?O=i.DEPTH_COMPONENT24:x===wn?O=i.DEPTH_COMPONENT32F:x===Ds&&(O=i.DEPTH_COMPONENT16),O}function A(w,x){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==tn&&w.minFilter!==Tn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){const x=w.target;x.removeEventListener("dispose",T),L(x),x.isVideoTexture&&h.delete(x)}function R(w){const x=w.target;x.removeEventListener("dispose",R),y(x)}function L(w){const x=n.get(w);if(x.__webglInit===void 0)return;const O=w.source,G=d.get(O);if(G){const j=G[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(w),Object.keys(G).length===0&&d.delete(O)}n.remove(w)}function S(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const O=w.source,G=d.get(O);delete G[x.__cacheKey],a.memory.textures--}function y(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let j=0;j<x.__webglFramebuffer[G].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[G][j]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=w.textures;for(let G=0,j=O.length;G<j;G++){const V=n.get(O[G]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(O[G])}n.remove(w)}let P=0;function F(){P=0}function H(){const w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function X(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function W(w,x){const O=n.get(w);if(w.isVideoTexture&&kt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const G=w.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function q(w,x){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Y(O,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function K(w,x){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Y(O,w,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function k(w,x){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Z(O,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const ot={[xi]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},ut={[tn]:i.NEAREST,[Du]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},wt={[Nu]:i.NEVER,[ku]:i.ALWAYS,[Fu]:i.LESS,[Kc]:i.LEQUAL,[Ou]:i.EQUAL,[Hu]:i.GEQUAL,[Bu]:i.GREATER,[zu]:i.NOTEQUAL};function Wt(w,x){if(x.type===wn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Tn||x.magFilter===jr||x.magFilter===Xs||x.magFilter===_i||x.minFilter===Tn||x.minFilter===jr||x.minFilter===Xs||x.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ot[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ot[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ot[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ut[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,wt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==Xs&&x.minFilter!==_i||x.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function re(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",T));const G=x.source;let j=d.get(G);j===void 0&&(j={},d.set(G,j));const V=X(x);if(V!==w.__cacheKey){j[V]===void 0&&(j[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[V].usedTimes++;const bt=j[w.__cacheKey];bt!==void 0&&(j[w.__cacheKey].usedTimes--,bt.usedTimes===0&&S(x)),w.__cacheKey=V,w.__webglTexture=j[V].texture}return O}function de(w,x,O){return Math.floor(Math.floor(w/O)/x)}function Jt(w,x,O,G){const V=w.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,G,x.data);else{V.sort((et,ht)=>et.start-ht.start);let bt=0;for(let et=1;et<V.length;et++){const ht=V[bt],Lt=V[et],Et=ht.start+ht.count,lt=de(Lt.start,x.width,4),zt=de(ht.start,x.width,4);Lt.start<=Et+1&&lt===zt&&de(Lt.start+Lt.count-1,x.width,4)===lt?ht.count=Math.max(ht.count,Lt.start+Lt.count-ht.start):(++bt,V[bt]=Lt)}V.length=bt+1;const st=i.getParameter(i.UNPACK_ROW_LENGTH),St=i.getParameter(i.UNPACK_SKIP_PIXELS),yt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let et=0,ht=V.length;et<ht;et++){const Lt=V[et],Et=Math.floor(Lt.start/4),lt=Math.ceil(Lt.count/4),zt=Et%x.width,I=Math.floor(Et/x.width),nt=lt,rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,zt,I,nt,rt,O,G,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,st),i.pixelStorei(i.UNPACK_SKIP_PIXELS,St),i.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function Y(w,x,O){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);const j=re(w,x),V=x.source;e.bindTexture(G,w.__webglTexture,i.TEXTURE0+O);const bt=n.get(V);if(V.version!==bt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);const st=$t.getPrimaries($t.workingColorSpace),St=x.colorSpace===zn?null:$t.getPrimaries(x.colorSpace),yt=x.colorSpace===zn||st===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let et=_(x.image,!1,s.maxTextureSize);et=Ce(x,et);const ht=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type);let Et=b(x.internalFormat,ht,Lt,x.colorSpace,x.isVideoTexture);Wt(G,x);let lt;const zt=x.mipmaps,I=x.isVideoTexture!==!0,nt=bt.__version===void 0||j===!0,rt=V.dataReady,ft=A(x,et);if(x.isDepthTexture)Et=v(x.format===Ns,x.type),nt&&(I?e.texStorage2D(i.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Et,et.width,et.height,0,ht,Lt,null));else if(x.isDataTexture)if(zt.length>0){I&&nt&&e.texStorage2D(i.TEXTURE_2D,ft,Et,zt[0].width,zt[0].height);for(let Q=0,$=zt.length;Q<$;Q++)lt=zt[Q],I?rt&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,ht,Lt,lt.data):e.texImage2D(i.TEXTURE_2D,Q,Et,lt.width,lt.height,0,ht,Lt,lt.data);x.generateMipmaps=!1}else I?(nt&&e.texStorage2D(i.TEXTURE_2D,ft,Et,et.width,et.height),rt&&Jt(x,et,ht,Lt)):e.texImage2D(i.TEXTURE_2D,0,Et,et.width,et.height,0,ht,Lt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Et,zt[0].width,zt[0].height,et.depth);for(let Q=0,$=zt.length;Q<$;Q++)if(lt=zt[Q],x.format!==vn)if(ht!==null)if(I){if(rt)if(x.layerUpdates.size>0){const gt=tc(lt.width,lt.height,x.format,x.type);for(const Ot of x.layerUpdates){const ae=lt.data.subarray(Ot*gt/lt.data.BYTES_PER_ELEMENT,(Ot+1)*gt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ot,lt.width,lt.height,1,ht,ae)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,et.depth,ht,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Et,lt.width,lt.height,et.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,et.depth,ht,Lt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Et,lt.width,lt.height,et.depth,0,ht,Lt,lt.data)}else{I&&nt&&e.texStorage2D(i.TEXTURE_2D,ft,Et,zt[0].width,zt[0].height);for(let Q=0,$=zt.length;Q<$;Q++)lt=zt[Q],x.format!==vn?ht!==null?I?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Et,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,ht,Lt,lt.data):e.texImage2D(i.TEXTURE_2D,Q,Et,lt.width,lt.height,0,ht,Lt,lt.data)}else if(x.isDataArrayTexture)if(I){if(nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Et,et.width,et.height,et.depth),rt)if(x.layerUpdates.size>0){const Q=tc(et.width,et.height,x.format,x.type);for(const $ of x.layerUpdates){const gt=et.data.subarray($*Q/et.data.BYTES_PER_ELEMENT,($+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,et.width,et.height,1,ht,Lt,gt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ht,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,ht,Lt,et.data);else if(x.isData3DTexture)I?(nt&&e.texStorage3D(i.TEXTURE_3D,ft,Et,et.width,et.height,et.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ht,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,ht,Lt,et.data);else if(x.isFramebufferTexture){if(nt)if(I)e.texStorage2D(i.TEXTURE_2D,ft,Et,et.width,et.height);else{let Q=et.width,$=et.height;for(let gt=0;gt<ft;gt++)e.texImage2D(i.TEXTURE_2D,gt,Et,Q,$,0,ht,Lt,null),Q>>=1,$>>=1}}else if(zt.length>0){if(I&&nt){const Q=Se(zt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Et,Q.width,Q.height)}for(let Q=0,$=zt.length;Q<$;Q++)lt=zt[Q],I?rt&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ht,Lt,lt):e.texImage2D(i.TEXTURE_2D,Q,Et,ht,Lt,lt);x.generateMipmaps=!1}else if(I){if(nt){const Q=Se(et);e.texStorage2D(i.TEXTURE_2D,ft,Et,Q.width,Q.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,Et,ht,Lt,et);g(x)&&p(G),bt.__version=V.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Z(w,x,O){if(x.image.length!==6)return;const G=re(w,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const V=n.get(j);if(j.version!==V.__version||G===!0){e.activeTexture(i.TEXTURE0+O);const bt=$t.getPrimaries($t.workingColorSpace),st=x.colorSpace===zn?null:$t.getPrimaries(x.colorSpace),St=x.colorSpace===zn||bt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const yt=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let $=0;$<6;$++)!yt&&!et?ht[$]=_(x.image[$],!0,s.maxCubemapSize):ht[$]=et?x.image[$].image:x.image[$],ht[$]=Ce(x,ht[$]);const Lt=ht[0],Et=r.convert(x.format,x.colorSpace),lt=r.convert(x.type),zt=b(x.internalFormat,Et,lt,x.colorSpace),I=x.isVideoTexture!==!0,nt=V.__version===void 0||G===!0,rt=j.dataReady;let ft=A(x,Lt);Wt(i.TEXTURE_CUBE_MAP,x);let Q;if(yt){I&&nt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,zt,Lt.width,Lt.height);for(let $=0;$<6;$++){Q=ht[$].mipmaps;for(let gt=0;gt<Q.length;gt++){const Ot=Q[gt];x.format!==vn?Et!==null?I?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt,0,0,Ot.width,Ot.height,Et,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt,zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt,0,0,Ot.width,Ot.height,Et,lt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt,zt,Ot.width,Ot.height,0,Et,lt,Ot.data)}}}else{if(Q=x.mipmaps,I&&nt){Q.length>0&&ft++;const $=Se(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,zt,$.width,$.height)}for(let $=0;$<6;$++)if(et){I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ht[$].width,ht[$].height,Et,lt,ht[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,zt,ht[$].width,ht[$].height,0,Et,lt,ht[$].data);for(let gt=0;gt<Q.length;gt++){const ae=Q[gt].image[$].image;I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt+1,0,0,ae.width,ae.height,Et,lt,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt+1,zt,ae.width,ae.height,0,Et,lt,ae.data)}}else{I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Et,lt,ht[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,zt,Et,lt,ht[$]);for(let gt=0;gt<Q.length;gt++){const Ot=Q[gt];I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt+1,0,0,Et,lt,Ot.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt+1,zt,Et,lt,Ot.image[$])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),V.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function pt(w,x,O,G,j,V){const bt=r.convert(O.format,O.colorSpace),st=r.convert(O.type),St=b(O.internalFormat,bt,st,O.colorSpace),yt=n.get(x),et=n.get(O);if(et.__renderTarget=x,!yt.__hasExternalTextures){const ht=Math.max(1,x.width>>V),Lt=Math.max(1,x.height>>V);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,V,St,ht,Lt,x.depth,0,bt,st,null):e.texImage2D(j,V,St,ht,Lt,0,bt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,j,et.__webglTexture,0,pe(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,j,et.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(w,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const G=x.depthTexture,j=G&&G.isDepthTexture?G.type:null,V=v(x.stencilBuffer,j),bt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=pe(x);xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,V,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,V,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,V,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,w)}else{const G=x.textures;for(let j=0;j<G.length;j++){const V=G[j],bt=r.convert(V.format,V.colorSpace),st=r.convert(V.type),St=b(V.internalFormat,bt,st,V.colorSpace),yt=pe(x);O&&xt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,St,x.width,x.height):xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,St,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,St,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const j=G.__webglTexture,V=pe(x);if(x.depthTexture.format===Us)xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(x.depthTexture.format===Ns)xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Yt(w){const x=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=G}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const G=w.texture.mipmaps;G&&G.length>0?Tt(x.__webglFramebuffer[0],w):Tt(x.__webglFramebuffer,w)}else if(O){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),Ut(x.__webglDepthbuffer[G],w,!1);else{const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,V)}}else{const G=w.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ut(x.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(w,x,O){const G=n.get(w);x!==void 0&&pt(G.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Yt(w)}function C(w){const x=w.texture,O=n.get(w),G=n.get(x);w.addEventListener("dispose",R);const j=w.textures,V=w.isWebGLCubeRenderTarget===!0,bt=j.length>1;if(bt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,a.memory.textures++),V){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let St=0;St<x.mipmaps.length;St++)O.__webglFramebuffer[st][St]=i.createFramebuffer()}else O.__webglFramebuffer[st]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)O.__webglFramebuffer[st]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(bt)for(let st=0,St=j.length;st<St;st++){const yt=n.get(j[st]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&xt(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){const St=j[st];O.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[st]);const yt=r.convert(St.format,St.colorSpace),et=r.convert(St.type),ht=b(St.internalFormat,yt,et,St.colorSpace,w.isXRRenderTarget===!0),Lt=pe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,ht,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,O.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,x);for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)pt(O.__webglFramebuffer[st][St],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St);else pt(O.__webglFramebuffer[st],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);g(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let st=0,St=j.length;st<St;st++){const yt=j[st],et=n.get(yt);let ht=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,et.__webglTexture),Wt(ht,yt),pt(O.__webglFramebuffer,w,yt,i.COLOR_ATTACHMENT0+st,ht,0),g(yt)&&p(ht)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(st=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,G.__webglTexture),Wt(st,x),x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)pt(O.__webglFramebuffer[St],w,x,i.COLOR_ATTACHMENT0,st,St);else pt(O.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,st,0);g(x)&&p(st),e.unbindTexture()}w.depthBuffer&&Yt(w)}function fe(w){const x=w.textures;for(let O=0,G=x.length;O<G;O++){const j=x[O];if(g(j)){const V=M(w),bt=n.get(j).__webglTexture;e.bindTexture(V,bt),p(V),e.unbindTexture()}}}const Bt=[],Dt=[];function vt(w){if(w.samples>0){if(xt(w)===!1){const x=w.textures,O=w.width,G=w.height;let j=i.COLOR_BUFFER_BIT;const V=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(w),st=x.length>1;if(st)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const St=w.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);const et=n.get(x[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,j,i.NEAREST),l===!0&&(Bt.length=0,Dt.length=0,Bt.push(i.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Bt.push(V),Dt.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);const et=n.get(x[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function pe(w){return Math.min(s.maxSamples,w.samples)}function xt(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function kt(w){const x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Ce(w,x){const O=w.colorSpace,G=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==ss&&O!==zn&&($t.getTransfer(O)===te?(G!==vn||j!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=Ue,this.setupRenderTarget=C,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=xt}function b0(i,t){function e(n,s=zn){let r;const a=$t.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===zo)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===vn)return i.RGBA;if(n===Us)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===$c)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===yr||n===Er||n===br||n===Tr)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===Qa||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===no||n===io)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===so)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ro)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ao)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ho)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===po)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===go)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===So||n===yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eo||n===bo||n===To||n===wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const T0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new uh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Oe({vertexShader:T0,fragmentShader:w0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new we(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R0 extends cs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new A0,p={},M=e.getContextAttributes();let b=null,v=null;const A=[],T=[],R=new _t;let L=null;const S=new Qe;S.viewport=new Me;const y=new Qe;y.viewport=new Me;const P=[S,y],F=new $d;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=A[Y];return Z===void 0&&(Z=new ga,A[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=A[Y];return Z===void 0&&(Z=new ga,A[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=A[Y];return Z===void 0&&(Z=new ga,A[Y]=Z),Z.getHandSpace()};function W(Y){const Z=T.indexOf(Y.inputSource);if(Z===-1)return;const pt=A[Z];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,c||a),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<A.length;Y++){const Z=T[Y];Z!==null&&(T[Y]=null,A[Y].disconnect(Z))}H=null,X=null,g.reset();for(const Y in p)delete p[Y];t.setRenderTarget(b),f=null,d=null,u=null,s=null,v=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ut=null,Tt=null;M.depth&&(Tt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=M.stencil?Ns:Us,Ut=M.stencil?Is:Mi);const Yt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new hn(d.textureWidth,d.textureHeight,{format:vn,type:Pn,depthTexture:new hh(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new hn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(Y){for(let Z=0;Z<Y.removed.length;Z++){const pt=Y.removed[Z],Ut=T.indexOf(pt);Ut>=0&&(T[Ut]=null,A[Ut].disconnect(pt))}for(let Z=0;Z<Y.added.length;Z++){const pt=Y.added[Z];let Ut=T.indexOf(pt);if(Ut===-1){for(let Yt=0;Yt<A.length;Yt++)if(Yt>=T.length){T.push(pt),Ut=Yt;break}else if(T[Yt]===null){T[Yt]=pt,Ut=Yt;break}if(Ut===-1)break}const Tt=A[Ut];Tt&&Tt.connect(pt)}}const k=new D,ot=new D;function ut(Y,Z,pt){k.setFromMatrixPosition(Z.matrixWorld),ot.setFromMatrixPosition(pt.matrixWorld);const Ut=k.distanceTo(ot),Tt=Z.projectionMatrix.elements,Yt=pt.projectionMatrix.elements,Ue=Tt[14]/(Tt[10]-1),C=Tt[14]/(Tt[10]+1),fe=(Tt[9]+1)/Tt[5],Bt=(Tt[9]-1)/Tt[5],Dt=(Tt[8]-1)/Tt[0],vt=(Yt[8]+1)/Yt[0],pe=Ue*Dt,xt=Ue*vt,kt=Ut/(-Dt+vt),Ce=kt*-Dt;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ce),Y.translateZ(kt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Se=Ue+kt,w=C+kt,x=pe-Ce,O=xt+(Ut-Ce),G=fe*C/w*Se,j=Bt*C/w*Se;Y.projectionMatrix.makePerspective(x,O,G,j,Se,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function wt(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,pt=Y.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),F.near=y.near=S.near=Z,F.far=y.far=S.far=pt,(H!==F.near||X!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,X=F.far),F.layers.mask=Y.layers.mask|6,S.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const Ut=Y.parent,Tt=F.cameras;wt(F,Ut);for(let Yt=0;Yt<Tt.length;Yt++)wt(Tt[Yt],Ut);Tt.length===2?ut(F,S,y):F.projectionMatrix.copy(S.projectionMatrix),Wt(Y,F,Ut)};function Wt(Y,Z,pt){pt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let re=null;function de(Y,Z){if(h=Z.getViewerPose(c||a),m=Z,h!==null){const pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ut=!1;pt.length!==F.cameras.length&&(F.cameras.length=0,Ut=!0);for(let C=0;C<pt.length;C++){const fe=pt[C];let Bt=null;if(f!==null)Bt=f.getViewport(fe);else{const vt=u.getViewSubImage(d,fe);Bt=vt.viewport,C===0&&(t.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(v))}let Dt=P[C];Dt===void 0&&(Dt=new Qe,Dt.layers.enable(C),Dt.viewport=new Me,P[C]=Dt),Dt.matrix.fromArray(fe.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(fe.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),C===0&&(F.matrix.copy(Dt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ut===!0&&F.cameras.push(Dt)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const C=u.getDepthInformation(pt[0]);C&&C.isValid&&C.texture&&g.init(C,s.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<pt.length;C++){const fe=pt[C].camera;if(fe){let Bt=p[fe];Bt||(Bt=new uh,p[fe]=Bt);const Dt=u.getCameraImage(fe);Bt.sourceTexture=Dt}}}}for(let pt=0;pt<A.length;pt++){const Ut=T[pt],Tt=A[pt];Ut!==null&&Tt!==void 0&&Tt.update(Ut,Z,c||a)}re&&re(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}const Jt=new _h;Jt.setAnimationLoop(de),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}}const hi=new xn,C0=new Zt;function P0(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,sh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===We&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===We&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),b=M.envMap,v=M.envMapRotation;b&&(g.envMap.value=b,hi.copy(v),hi.x*=-1,hi.y*=-1,hi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),g.envMapRotation.value.setFromMatrix4(C0.makeRotationFromEuler(hi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const v=b.program;n.uniformBlockBinding(M,v)}function c(M,b){let v=s[M.id];v===void 0&&(m(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",g));const A=b.program;n.updateUBOMapping(M,A);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const b=u();M.__bindingPointIndex=b;const v=i.createBuffer(),A=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=s[M.id],v=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,R=v.length;T<R;T++){const L=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,y=L.length;S<y;S++){const P=L[S];if(f(P,T,S,A)===!0){const F=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let W=0;W<H.length;W++){const q=H[W],K=_(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,F+X,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,b,v,A){const T=M.value,R=b+"_"+v;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{const L=A[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return A[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function m(M){const b=M.uniforms;let v=0;const A=16;for(let R=0,L=b.length;R<L;R++){const S=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,P=S.length;y<P;y++){const F=S[y],H=Array.isArray(F.value)?F.value:[F.value];for(let X=0,W=H.length;X<W;X++){const q=H[X],K=_(q),k=v%A,ot=k%K.boundary,ut=k+ot;v+=ot,ut!==0&&A-ut<K.storage&&(v+=A-ut),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=K.storage}}}const T=v%A;return T>0&&(v+=A-T),M.__size=v,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function g(M){const b=M.target;b.removeEventListener("dispose",g);const v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class D0{constructor(t={}){const{canvas:e=sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=De;let T=0,R=0,L=null,S=-1,y=null;const P=new Me,F=new Me;let H=null;const X=new Ct(0);let W=0,q=e.width,K=e.height,k=1,ot=null,ut=null;const wt=new Me(0,0,q,K),Wt=new Me(0,0,q,K);let re=!1;const de=new Ko;let Jt=!1,Y=!1;const Z=new Zt,pt=new D,Ut=new Me,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Ue(){return L===null?k:1}let C=n;function fe(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fo}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",Q,!1),C===null){const U="webgl2";if(C=fe(U,E),C===null)throw fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Bt,Dt,vt,pe,xt,kt,Ce,Se,w,x,O,G,j,V,bt,st,St,yt,et,ht,Lt,Et,lt,zt;function I(){Bt=new Vm(C),Bt.init(),Et=new b0(C,Bt),Dt=new Nm(C,Bt,t,Et),vt=new y0(C,Bt),Dt.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),pe=new Xm(C),xt=new c0,kt=new E0(C,Bt,vt,xt,Dt,Et,pe),Ce=new Om(v),Se=new km(v),w=new Kd(C),lt=new Im(C,w),x=new Gm(C,w,pe,lt),O=new Ym(C,x,w,pe),et=new qm(C,Dt,kt),st=new Fm(xt),G=new l0(v,Ce,Se,Bt,Dt,lt,st),j=new P0(v,xt),V=new u0,bt=new _0(Bt),yt=new Dm(v,Ce,Se,vt,O,f,l),St=new M0(v,O,Dt),zt=new L0(C,pe,Dt,vt),ht=new Um(C,Bt,pe),Lt=new Wm(C,Bt,pe),pe.programs=G.programs,v.capabilities=Dt,v.extensions=Bt,v.properties=xt,v.renderLists=V,v.shadowMap=St,v.state=vt,v.info=pe}I();const nt=new R0(v,C);this.xr=nt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=Bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(q,K,!1))},this.getSize=function(E){return E.set(q,K)},this.setSize=function(E,U,B=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,K=U,e.width=Math.floor(E*k),e.height=Math.floor(U*k),B===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(q*k,K*k).floor()},this.setDrawingBufferSize=function(E,U,B){q=E,K=U,k=B,e.width=Math.floor(E*B),e.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(wt)},this.setViewport=function(E,U,B,z){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,U,B,z),vt.viewport(P.copy(wt).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(Wt)},this.setScissor=function(E,U,B,z){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,U,B,z),vt.scissor(F.copy(Wt).multiplyScalar(k).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){vt.setScissorTest(re=E)},this.setOpaqueSort=function(E){ot=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,B=!0){let z=0;if(E){let N=!1;if(L!==null){const tt=L.texture.format;N=tt===Xo||tt===Wo||tt===Go}if(N){const tt=L.texture.type,ct=tt===Pn||tt===Mi||tt===Ds||tt===Is||tt===Ho||tt===ko,mt=yt.getClearColor(),dt=yt.getClearAlpha(),Pt=mt.r,It=mt.g,At=mt.b;ct?(m[0]=Pt,m[1]=It,m[2]=At,m[3]=dt,C.clearBufferuiv(C.COLOR,0,m)):(_[0]=Pt,_[1]=It,_[2]=At,_[3]=dt,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}U&&(z|=C.DEPTH_BUFFER_BIT),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),yt.dispose(),V.dispose(),bt.dispose(),xt.dispose(),Ce.dispose(),Se.dispose(),O.dispose(),lt.dispose(),zt.dispose(),G.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Sn),nt.removeEventListener("sessionend",ml),ii.stop()};function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=pe.autoReset,U=St.enabled,B=St.autoUpdate,z=St.needsUpdate,N=St.type;I(),pe.autoReset=E,St.enabled=U,St.autoUpdate=B,St.needsUpdate=z,St.type=N}function Q(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $(E){const U=E.target;U.removeEventListener("dispose",$),gt(U)}function gt(E){Ot(E),xt.remove(E)}function Ot(E){const U=xt.get(E).programs;U!==void 0&&(U.forEach(function(B){G.releaseProgram(B)}),E.isShaderMaterial&&G.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,z,N,tt){U===null&&(U=Tt);const ct=N.isMesh&&N.matrixWorld.determinant()<0,mt=Oh(E,U,B,z,N);vt.setMaterial(z,ct);let dt=B.index,Pt=1;if(z.wireframe===!0){if(dt=x.getWireframeAttribute(B),dt===void 0)return;Pt=2}const It=B.drawRange,At=B.attributes.position;let Xt=It.start*Pt,ne=(It.start+It.count)*Pt;tt!==null&&(Xt=Math.max(Xt,tt.start*Pt),ne=Math.min(ne,(tt.start+tt.count)*Pt)),dt!==null?(Xt=Math.max(Xt,0),ne=Math.min(ne,dt.count)):At!=null&&(Xt=Math.max(Xt,0),ne=Math.min(ne,At.count));const xe=ne-Xt;if(xe<0||xe===1/0)return;lt.setup(N,z,mt,B,dt);let ue,se=ht;if(dt!==null&&(ue=w.get(dt),se=Lt,se.setIndex(ue)),N.isMesh)z.wireframe===!0?(vt.setLineWidth(z.wireframeLinewidth*Ue()),se.setMode(C.LINES)):se.setMode(C.TRIANGLES);else if(N.isLine){let Rt=z.linewidth;Rt===void 0&&(Rt=1),vt.setLineWidth(Rt*Ue()),N.isLineSegments?se.setMode(C.LINES):N.isLineLoop?se.setMode(C.LINE_LOOP):se.setMode(C.LINE_STRIP)}else N.isPoints?se.setMode(C.POINTS):N.isSprite&&se.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))se.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,ge=N._multiDrawCounts,jt=N._multiDrawCount,je=dt?w.get(dt).bytesPerElement:1,wi=xt.get(z).currentProgram.getUniforms();for(let Ke=0;Ke<jt;Ke++)wi.setValue(C,"_gl_DrawID",Ke),se.render(Rt[Ke]/je,ge[Ke])}else if(N.isInstancedMesh)se.renderInstances(Xt,xe,N.count);else if(B.isInstancedBufferGeometry){const Rt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ge=Math.min(B.instanceCount,Rt);se.renderInstances(Xt,xe,ge)}else se.render(Xt,xe)};function ae(E,U,B){E.transparent===!0&&E.side===ce&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,Ws(E,U,B),E.side=Jn,E.needsUpdate=!0,Ws(E,U,B),E.side=ce):Ws(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),p=bt.get(B),p.init(U),b.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==B&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const mt=tt[ct];ae(mt,B,N),z.add(mt)}else ae(tt,B,N),z.add(tt)}),p=b.pop(),z},this.compileAsync=function(E,U,B=null){const z=this.compile(E,U,B);return new Promise(N=>{function tt(){if(z.forEach(function(ct){xt.get(ct).currentProgram.isReady()&&z.delete(ct)}),z.size===0){N(E);return}setTimeout(tt,10)}Bt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Qt=null;function Ln(E){Qt&&Qt(E)}function Sn(){ii.stop()}function ml(){ii.start()}const ii=new _h;ii.setAnimationLoop(Ln),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(E){Qt=E,nt.setAnimationLoop(E),E===null?ii.stop():ii.start()},nt.addEventListener("sessionstart",Sn),nt.addEventListener("sessionend",ml),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(U),U=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,L),p=bt.get(E,b.length),p.init(U),b.push(p),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),de.setFromProjectionMatrix(Z,An,U.reversedDepth),Y=this.localClippingEnabled,Jt=st.init(this.clippingPlanes,Y),g=V.get(E,M.length),g.init(),M.push(g),nt.enabled===!0&&nt.isPresenting===!0){const tt=v.xr.getDepthSensingMesh();tt!==null&&Yr(tt,U,-1/0,v.sortObjects)}Yr(E,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ot,ut),Yt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Yt&&yt.addToRenderList(g,E),this.info.render.frame++,Jt===!0&&st.beginShadows();const B=p.state.shadowsArray;St.render(B,E,U),Jt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){const tt=U.cameras;if(N.length>0)for(let ct=0,mt=tt.length;ct<mt;ct++){const dt=tt[ct];_l(z,N,E,dt)}Yt&&yt.render(E);for(let ct=0,mt=tt.length;ct<mt;ct++){const dt=tt[ct];gl(g,E,dt,dt.viewport)}}else N.length>0&&_l(z,N,E,U),Yt&&yt.render(E),gl(g,E,U);L!==null&&R===0&&(kt.updateMultisampleRenderTarget(L),kt.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(v,E,U),lt.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],Jt===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Yr(E,U,B,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||de.intersectsSprite(E)){z&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const ct=O.update(E),mt=E.material;mt.visible&&g.push(E,ct,mt,B,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||de.intersectsObject(E))){const ct=O.update(E),mt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ut.copy(ct.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(mt)){const dt=ct.groups;for(let Pt=0,It=dt.length;Pt<It;Pt++){const At=dt[Pt],Xt=mt[At.materialIndex];Xt&&Xt.visible&&g.push(E,ct,Xt,B,Ut.z,At)}}else mt.visible&&g.push(E,ct,mt,B,Ut.z,null)}}const tt=E.children;for(let ct=0,mt=tt.length;ct<mt;ct++)Yr(tt[ct],U,B,z)}function gl(E,U,B,z){const N=E.opaque,tt=E.transmissive,ct=E.transparent;p.setupLightsView(B),Jt===!0&&st.setGlobalState(v.clippingPlanes,B),z&&vt.viewport(P.copy(z)),N.length>0&&Gs(N,U,B),tt.length>0&&Gs(tt,U,B),ct.length>0&&Gs(ct,U,B),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function _l(E,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new hn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Cn:Pn,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const tt=p.state.transmissionRenderTarget[z.id],ct=z.viewport||P;tt.setSize(ct.z*v.transmissionResolutionScale,ct.w*v.transmissionResolutionScale);const mt=v.getRenderTarget(),dt=v.getActiveCubeFace(),Pt=v.getActiveMipmapLevel();v.setRenderTarget(tt),v.getClearColor(X),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Yt&&yt.render(B);const It=v.toneMapping;v.toneMapping=Zn;const At=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Jt===!0&&st.setGlobalState(v.clippingPlanes,z),Gs(E,B,z),kt.updateMultisampleRenderTarget(tt),kt.updateRenderTargetMipmap(tt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ne=0,xe=U.length;ne<xe;ne++){const ue=U[ne],se=ue.object,Rt=ue.geometry,ge=ue.material,jt=ue.group;if(ge.side===ce&&se.layers.test(z.layers)){const je=ge.side;ge.side=We,ge.needsUpdate=!0,vl(se,B,z,Rt,ge,jt),ge.side=je,ge.needsUpdate=!0,Xt=!0}}Xt===!0&&(kt.updateMultisampleRenderTarget(tt),kt.updateRenderTargetMipmap(tt))}v.setRenderTarget(mt,dt,Pt),v.setClearColor(X,W),At!==void 0&&(z.viewport=At),v.toneMapping=It}function Gs(E,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=E.length;N<tt;N++){const ct=E[N],mt=ct.object,dt=ct.geometry,Pt=ct.group;let It=ct.material;It.allowOverride===!0&&z!==null&&(It=z),mt.layers.test(B.layers)&&vl(mt,U,B,dt,It,Pt)}}function vl(E,U,B,z,N,tt){E.onBeforeRender(v,U,B,z,N,tt),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,U,B,z,E,tt),N.transparent===!0&&N.side===ce&&N.forceSinglePass===!1?(N.side=We,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,E,tt),N.side=Jn,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,E,tt),N.side=ce):v.renderBufferDirect(B,U,z,N,E,tt),E.onAfterRender(v,U,B,z,N,tt)}function Ws(E,U,B){U.isScene!==!0&&(U=Tt);const z=xt.get(E),N=p.state.lights,tt=p.state.shadowsArray,ct=N.state.version,mt=G.getParameters(E,N.state,tt,U,B),dt=G.getProgramCacheKey(mt);let Pt=z.programs;z.environment=E.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(E.isMeshStandardMaterial?Se:Ce).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",$),Pt=new Map,z.programs=Pt);let It=Pt.get(dt);if(It!==void 0){if(z.currentProgram===It&&z.lightsStateVersion===ct)return Ml(E,mt),It}else mt.uniforms=G.getUniforms(E),E.onBeforeCompile(mt,v),It=G.acquireProgram(mt,dt),Pt.set(dt,It),z.uniforms=mt.uniforms;const At=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=st.uniform),Ml(E,mt),z.needsLights=zh(E),z.lightsStateVersion=ct,z.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=It,z.uniformsList=null,It}function xl(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=wr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ml(E,U){const B=xt.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Oh(E,U,B,z,N){U.isScene!==!0&&(U=Tt),kt.resetTextureUnits();const tt=U.fog,ct=z.isMeshStandardMaterial?U.environment:null,mt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ss,dt=(z.isMeshStandardMaterial?Se:Ce).get(z.envMap||ct),Pt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,It=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!B.morphAttributes.position,Xt=!!B.morphAttributes.normal,ne=!!B.morphAttributes.color;let xe=Zn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xe=v.toneMapping);const ue=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,se=ue!==void 0?ue.length:0,Rt=xt.get(z),ge=p.state.lights;if(Jt===!0&&(Y===!0||E!==y)){const Be=E===y&&z.id===S;st.setState(z,E,Be)}let jt=!1;z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ge.state.version||Rt.outputColorSpace!==mt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==dt||z.fog===!0&&Rt.fog!==tt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==st.numPlanes||Rt.numIntersection!==st.numIntersection)||Rt.vertexAlphas!==Pt||Rt.vertexTangents!==It||Rt.morphTargets!==At||Rt.morphNormals!==Xt||Rt.morphColors!==ne||Rt.toneMapping!==xe||Rt.morphTargetsCount!==se)&&(jt=!0):(jt=!0,Rt.__version=z.version);let je=Rt.currentProgram;jt===!0&&(je=Ws(z,U,N));let wi=!1,Ke=!1,ps=!1;const _e=je.getUniforms(),en=Rt.uniforms;if(vt.useProgram(je.program)&&(wi=!0,Ke=!0,ps=!0),z.id!==S&&(S=z.id,Ke=!0),wi||y!==E){vt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),_e.setValue(C,"projectionMatrix",E.projectionMatrix),_e.setValue(C,"viewMatrix",E.matrixWorldInverse);const qe=_e.map.cameraPosition;qe!==void 0&&qe.setValue(C,pt.setFromMatrixPosition(E.matrixWorld)),Dt.logarithmicDepthBuffer&&_e.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_e.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Ke=!0,ps=!0)}if(N.isSkinnedMesh){_e.setOptional(C,N,"bindMatrix"),_e.setOptional(C,N,"bindMatrixInverse");const Be=N.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),_e.setValue(C,"boneTexture",Be.boneTexture,kt))}N.isBatchedMesh&&(_e.setOptional(C,N,"batchingTexture"),_e.setValue(C,"batchingTexture",N._matricesTexture,kt),_e.setOptional(C,N,"batchingIdTexture"),_e.setValue(C,"batchingIdTexture",N._indirectTexture,kt),_e.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&_e.setValue(C,"batchingColorTexture",N._colorsTexture,kt));const nn=B.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&et.update(N,B,je),(Ke||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,_e.setValue(C,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(en.envMap.value=dt,en.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(en.envMapIntensity.value=U.environmentIntensity),Ke&&(_e.setValue(C,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&Bh(en,ps),tt&&z.fog===!0&&j.refreshFogUniforms(en,tt),j.refreshMaterialUniforms(en,z,k,K,p.state.transmissionRenderTarget[E.id]),wr.upload(C,xl(Rt),en,kt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(wr.upload(C,xl(Rt),en,kt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_e.setValue(C,"center",N.center),_e.setValue(C,"modelViewMatrix",N.modelViewMatrix),_e.setValue(C,"normalMatrix",N.normalMatrix),_e.setValue(C,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Be=z.uniformsGroups;for(let qe=0,$r=Be.length;qe<$r;qe++){const si=Be[qe];zt.update(si,je),zt.bind(si,je)}}return je}function Bh(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function zh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,U,B){const z=xt.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),xt.get(E.texture).__webglTexture=U,xt.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const B=xt.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Hh=C.createFramebuffer();this.setRenderTarget=function(E,U=0,B=0){L=E,T=U,R=B;let z=!0,N=null,tt=!1,ct=!1;if(E){const dt=xt.get(E);if(dt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(dt.__webglFramebuffer===void 0)kt.setupRenderTarget(E);else if(dt.__hasExternalTextures)kt.rebindTextures(E,xt.get(E.texture).__webglTexture,xt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const At=E.depthTexture;if(dt.__boundDepthTexture!==At){if(At!==null&&xt.has(At)&&(E.width!==At.image.width||E.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(E)}}const Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ct=!0);const It=xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[U])?N=It[U][B]:N=It[U],tt=!0):E.samples>0&&kt.useMultisampledRTT(E)===!1?N=xt.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?N=It[B]:N=It,P.copy(E.viewport),F.copy(E.scissor),H=E.scissorTest}else P.copy(wt).multiplyScalar(k).floor(),F.copy(Wt).multiplyScalar(k).floor(),H=re;if(B!==0&&(N=Hh),vt.bindFramebuffer(C.FRAMEBUFFER,N)&&z&&vt.drawBuffers(E,N),vt.viewport(P),vt.scissor(F),vt.setScissorTest(H),tt){const dt=xt.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,B)}else if(ct){const dt=U;for(let Pt=0;Pt<E.textures.length;Pt++){const It=xt.get(E.textures[Pt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Pt,It.__webglTexture,B,dt)}}else if(E!==null&&B!==0){const dt=xt.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,dt.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(E,U,B,z,N,tt,ct,mt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt){vt.bindFramebuffer(C.FRAMEBUFFER,dt);try{const Pt=E.textures[mt],It=Pt.format,At=Pt.type;if(!Dt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&B>=0&&B<=E.height-N&&(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+mt),C.readPixels(U,B,z,N,Et.convert(It),Et.convert(At),tt))}finally{const Pt=L!==null?xt.get(L).__webglFramebuffer:null;vt.bindFramebuffer(C.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(E,U,B,z,N,tt,ct,mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt)if(U>=0&&U<=E.width-z&&B>=0&&B<=E.height-N){vt.bindFramebuffer(C.FRAMEBUFFER,dt);const Pt=E.textures[mt],It=Pt.format,At=Pt.type;if(!Dt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xt),C.bufferData(C.PIXEL_PACK_BUFFER,tt.byteLength,C.STREAM_READ),E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+mt),C.readPixels(U,B,z,N,Et.convert(It),Et.convert(At),0);const ne=L!==null?xt.get(L).__webglFramebuffer:null;vt.bindFramebuffer(C.FRAMEBUFFER,ne);const xe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await rd(C,xe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,tt),C.deleteBuffer(Xt),C.deleteSync(xe),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,B=0){const z=Math.pow(2,-B),N=Math.floor(E.image.width*z),tt=Math.floor(E.image.height*z),ct=U!==null?U.x:0,mt=U!==null?U.y:0;kt.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,ct,mt,N,tt),vt.unbindTexture()};const kh=C.createFramebuffer(),Vh=C.createFramebuffer();this.copyTextureToTexture=function(E,U,B=null,z=null,N=0,tt=null){tt===null&&(N!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let ct,mt,dt,Pt,It,At,Xt,ne,xe;const ue=E.isCompressedTexture?E.mipmaps[tt]:E.image;if(B!==null)ct=B.max.x-B.min.x,mt=B.max.y-B.min.y,dt=B.isBox3?B.max.z-B.min.z:1,Pt=B.min.x,It=B.min.y,At=B.isBox3?B.min.z:0;else{const nn=Math.pow(2,-N);ct=Math.floor(ue.width*nn),mt=Math.floor(ue.height*nn),E.isDataArrayTexture?dt=ue.depth:E.isData3DTexture?dt=Math.floor(ue.depth*nn):dt=1,Pt=0,It=0,At=0}z!==null?(Xt=z.x,ne=z.y,xe=z.z):(Xt=0,ne=0,xe=0);const se=Et.convert(U.format),Rt=Et.convert(U.type);let ge;U.isData3DTexture?(kt.setTexture3D(U,0),ge=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(kt.setTexture2DArray(U,0),ge=C.TEXTURE_2D_ARRAY):(kt.setTexture2D(U,0),ge=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const jt=C.getParameter(C.UNPACK_ROW_LENGTH),je=C.getParameter(C.UNPACK_IMAGE_HEIGHT),wi=C.getParameter(C.UNPACK_SKIP_PIXELS),Ke=C.getParameter(C.UNPACK_SKIP_ROWS),ps=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ue.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pt),C.pixelStorei(C.UNPACK_SKIP_ROWS,It),C.pixelStorei(C.UNPACK_SKIP_IMAGES,At);const _e=E.isDataArrayTexture||E.isData3DTexture,en=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const nn=xt.get(E),Be=xt.get(U),qe=xt.get(nn.__renderTarget),$r=xt.get(Be.__renderTarget);vt.bindFramebuffer(C.READ_FRAMEBUFFER,qe.__webglFramebuffer),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let si=0;si<dt;si++)_e&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.get(E).__webglTexture,N,At+si),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.get(U).__webglTexture,tt,xe+si)),C.blitFramebuffer(Pt,It,ct,mt,Xt,ne,ct,mt,C.DEPTH_BUFFER_BIT,C.NEAREST);vt.bindFramebuffer(C.READ_FRAMEBUFFER,null),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||xt.has(E)){const nn=xt.get(E),Be=xt.get(U);vt.bindFramebuffer(C.READ_FRAMEBUFFER,kh),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Vh);for(let qe=0;qe<dt;qe++)_e?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nn.__webglTexture,N,At+qe):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,nn.__webglTexture,N),en?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Be.__webglTexture,tt,xe+qe):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Be.__webglTexture,tt),N!==0?C.blitFramebuffer(Pt,It,ct,mt,Xt,ne,ct,mt,C.COLOR_BUFFER_BIT,C.NEAREST):en?C.copyTexSubImage3D(ge,tt,Xt,ne,xe+qe,Pt,It,ct,mt):C.copyTexSubImage2D(ge,tt,Xt,ne,Pt,It,ct,mt);vt.bindFramebuffer(C.READ_FRAMEBUFFER,null),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else en?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(ge,tt,Xt,ne,xe,ct,mt,dt,se,Rt,ue.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(ge,tt,Xt,ne,xe,ct,mt,dt,se,ue.data):C.texSubImage3D(ge,tt,Xt,ne,xe,ct,mt,dt,se,Rt,ue):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,tt,Xt,ne,ct,mt,se,Rt,ue.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,tt,Xt,ne,ue.width,ue.height,se,ue.data):C.texSubImage2D(C.TEXTURE_2D,tt,Xt,ne,ct,mt,se,Rt,ue);C.pixelStorei(C.UNPACK_ROW_LENGTH,jt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,je),C.pixelStorei(C.UNPACK_SKIP_PIXELS,wi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ke),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ps),tt===0&&U.generateMipmaps&&C.generateMipmap(ge),vt.unbindTexture()},this.initRenderTarget=function(E){xt.get(E).__webglFramebuffer===void 0&&kt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?kt.setTextureCube(E,0):E.isData3DTexture?kt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?kt.setTexture2DArray(E,0):kt.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){T=0,R=0,L=null,vt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Vr extends Nt{constructor(){const t=Vr.SkyShader,e=new Oe({name:t.name,uniforms:as.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:We,depthWrite:!1});super(new dn(1,1,1),e),this.isSky=!0}}Vr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const La=new Zt;class Gr{constructor(t){t=t||{},this.zNear=t.webGL===!0?-1:0,this.vertices={near:[new D,new D,new D,new D],far:[new D,new D,new D,new D]},t.projectionMatrix!==void 0&&this.setFromProjectionMatrix(t.projectionMatrix,t.maxFar||1e4)}setFromProjectionMatrix(t,e){const n=this.zNear,s=t.elements[11]===0;return La.copy(t).invert(),this.vertices.near[0].set(1,1,n),this.vertices.near[1].set(1,-1,n),this.vertices.near[2].set(-1,-1,n),this.vertices.near[3].set(-1,1,n),this.vertices.near.forEach(function(r){r.applyMatrix4(La)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(r){r.applyMatrix4(La);const a=Math.abs(r.z);s?r.z*=Math.min(e/a,1):r.multiplyScalar(Math.min(e/a,1))}),this.vertices}split(t,e){for(;t.length>e.length;)e.push(new Gr);e.length=t.length;for(let n=0;n<t.length;n++){const s=e[n];if(n===0)for(let r=0;r<4;r++)s.vertices.near[r].copy(this.vertices.near[r]);else for(let r=0;r<4;r++)s.vertices.near[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],t[n-1]);if(n===t.length-1)for(let r=0;r<4;r++)s.vertices.far[r].copy(this.vertices.far[r]);else for(let r=0;r<4;r++)s.vertices.far[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],t[n])}}toSpace(t,e){for(let n=0;n<4;n++)e.vertices.near[n].copy(this.vertices.near[n]).applyMatrix4(t),e.vertices.far[n].copy(this.vertices.far[n]).applyMatrix4(t)}}const bc={lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;

		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
 	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

  		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	float linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#if defined( USE_SHADOWMAP ) && defined( CSM_FADE )
		vec2 cascade;
		float cascadeCenter;
		float closestEdge;
		float margin;
		float csmx;
		float csmy;

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
				// NOTE: Depth gets larger away from the camera.
				// cascade.x is closer, cascade.y is further
				cascade = CSM_cascades[ i ];
				cascadeCenter = ( cascade.x + cascade.y ) / 2.0;
				closestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;
				margin = 0.25 * pow( closestEdge, 2.0 );
				csmx = cascade.x - margin / 2.0;
				csmy = cascade.y + margin / 2.0;
				if( linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {

					float dist = min( linearDepth - csmx, csmy - linearDepth );
					float ratio = clamp( dist / margin, 0.0, 1.0 );

					vec3 prevColor = directLight.color;
					directionalLightShadow = directionalLightShadows[ i ];
					directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

					bool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;
					directLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );

					ReflectedLight prevLight = reflectedLight;
					RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

					bool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;
					float blendRatio = shouldBlend ? ratio : 1.0;

					reflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );
					reflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );
					reflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );
					reflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );

				}
			#endif

		}
		#pragma unroll_loop_end
	#elif defined (USE_SHADOWMAP)

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )

				directionalLightShadow = directionalLightShadows[ i ];
				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

			#endif

		}
		#pragma unroll_loop_end

	#elif ( NUM_DIR_LIGHT_SHADOWS > 0 )
		// note: no loop here - all CSM lights are in fact one light only
		getDirectionalLightInfo( directionalLights[0], directLight );
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	#endif

	#if ( NUM_DIR_LIGHTS > NUM_DIR_LIGHT_SHADOWS)
		// compute the lights not casting shadows (if any)

		#pragma unroll_loop_start
		for ( int i = NUM_DIR_LIGHT_SHADOWS; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];

			getDirectionalLightInfo( directionalLight, directLight );

			RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

		}
		#pragma unroll_loop_end

	#endif

#endif


#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,lights_pars_begin:`
#if defined( USE_CSM ) && defined( CSM_CASCADES )
uniform vec2 CSM_cascades[CSM_CASCADES];
uniform float cameraNear;
uniform float shadowFar;
#endif
	`+Ft.lights_pars_begin},Tc=new Zt,Da=new Gr({webGL:!0}),On=new D,Ts=new ti,Ia=[],Ua=[],Na=new Zt,wc=new Zt,I0=new D(0,1,0);class U0{constructor(t){this.camera=t.camera,this.parent=t.parent,this.cascades=t.cascades||3,this.maxFar=t.maxFar||1e5,this.mode=t.mode||"practical",this.shadowMapSize=t.shadowMapSize||2048,this.shadowBias=t.shadowBias||1e-6,this.lightDirection=t.lightDirection||new D(1,-1,1).normalize(),this.lightIntensity=t.lightIntensity||3,this.lightNear=t.lightNear||1,this.lightFar=t.lightFar||2e3,this.lightMargin=t.lightMargin||200,this.customSplitsCallback=t.customSplitsCallback,this.fade=!1,this.mainFrustum=new Gr({webGL:!0}),this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this._createLights(),this.updateFrustums(),this._injectInclude()}_createLights(){for(let t=0;t<this.cascades;t++){const e=new mh(16777215,this.lightIntensity);e.castShadow=!0,e.shadow.mapSize.width=this.shadowMapSize,e.shadow.mapSize.height=this.shadowMapSize,e.shadow.camera.near=this.lightNear,e.shadow.camera.far=this.lightFar,e.shadow.bias=this.shadowBias,this.parent.add(e),this.parent.add(e.target),this.lights.push(e)}}_initCascades(){const t=this.camera;t.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(t.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}_updateShadowBounds(){const t=this.frustums;for(let e=0;e<t.length;e++){const s=this.lights[e].shadow.camera,r=this.frustums[e],a=r.vertices.near,o=r.vertices.far,l=o[0];let c;l.distanceTo(o[2])>l.distanceTo(a[2])?c=o[2]:c=a[2];let h=l.distanceTo(c);if(this.fade){const u=this.camera,d=Math.max(u.far,this.maxFar),f=r.vertices.far[0].z/(d-u.near),m=.25*Math.pow(f,2)*(d-u.near);h+=m}s.left=-h/2,s.right=h/2,s.top=h/2,s.bottom=-h/2,s.updateProjectionMatrix()}}_getBreaks(){const t=this.camera,e=Math.min(t.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":n(this.cascades,t.near,e,this.breaks);break;case"logarithmic":s(this.cascades,t.near,e,this.breaks);break;case"practical":r(this.cascades,t.near,e,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,t.near,e,this.breaks);break}function n(a,o,l,c){for(let h=1;h<a;h++)c.push((o+(l-o)*h/a)/l);c.push(1)}function s(a,o,l,c){for(let h=1;h<a;h++)c.push(o*(l/o)**(h/a)/l);c.push(1)}function r(a,o,l,c,h){Ia.length=0,Ua.length=0,s(a,o,l,Ua),n(a,o,l,Ia);for(let u=1;u<a;u++)h.push(Te.lerp(Ia[u-1],Ua[u-1],c));h.push(1)}}update(){const t=this.camera,e=this.frustums;Na.lookAt(new D,this.lightDirection,I0),wc.copy(Na).invert();for(let n=0;n<e.length;n++){const s=this.lights[n],r=s.shadow.camera,a=(r.right-r.left)/this.shadowMapSize,o=(r.top-r.bottom)/this.shadowMapSize;Tc.multiplyMatrices(wc,t.matrixWorld),e[n].toSpace(Tc,Da);const l=Da.vertices.near,c=Da.vertices.far;Ts.makeEmpty();for(let h=0;h<4;h++)Ts.expandByPoint(l[h]),Ts.expandByPoint(c[h]);Ts.getCenter(On),On.z=Ts.max.z+this.lightMargin,On.x=Math.floor(On.x/a)*a,On.y=Math.floor(On.y/o)*o,On.applyMatrix4(Na),s.position.copy(On),s.target.position.copy(On),s.target.position.x+=this.lightDirection.x,s.target.position.y+=this.lightDirection.y,s.target.position.z+=this.lightDirection.z}}_injectInclude(){Ft.lights_fragment_begin=bc.lights_fragment_begin,Ft.lights_pars_begin=bc.lights_pars_begin}setupMaterial(t){t.defines=t.defines||{},t.defines.USE_CSM=1,t.defines.CSM_CASCADES=this.cascades,this.fade&&(t.defines.CSM_FADE="");const e=[],n=this,s=this.shaders;t.onBeforeCompile=function(r){const a=Math.min(n.camera.far,n.maxFar);n._getExtendedBreaks(e),r.uniforms.CSM_cascades={value:e},r.uniforms.cameraNear={value:n.camera.near},r.uniforms.shadowFar={value:a},s.set(t,r)},s.set(t,null)}_updateUniforms(){const t=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(n,s){if(n!==null){const r=n.uniforms;this._getExtendedBreaks(r.CSM_cascades.value),r.cameraNear.value=this.camera.near,r.shadowFar.value=t}!this.fade&&"CSM_FADE"in s.defines?(delete s.defines.CSM_FADE,s.needsUpdate=!0):this.fade&&!("CSM_FADE"in s.defines)&&(s.defines.CSM_FADE="",s.needsUpdate=!0)},this)}_getExtendedBreaks(t){for(;t.length<this.breaks.length;)t.push(new _t);t.length=this.breaks.length;for(let e=0;e<this.cascades;e++){const n=this.breaks[e],s=this.breaks[e-1]||0;t[e].x=s,t[e].y=n}}updateFrustums(){this._getBreaks(),this._initCascades(),this._updateShadowBounds(),this._updateUniforms()}remove(){for(let t=0;t<this.lights.length;t++)this.parent.remove(this.lights[t].target),this.parent.remove(this.lights[t])}dispose(){const t=this.shaders;t.forEach(function(e,n){delete n.onBeforeCompile,delete n.defines.USE_CSM,delete n.defines.CSM_CASCADES,delete n.defines.CSM_FADE,e!==null&&(delete e.uniforms.CSM_cascades,delete e.uniforms.cameraNear,delete e.uniforms.shadowFar),n.needsUpdate=!0}),t.clear()}}const Ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const N0=new sl(-1,1,1,-1,0,1);class F0 extends ve{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const O0=new F0;class al{constructor(t){this._mesh=new Nt(O0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,N0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class B0 extends fs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=as.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new al(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ac extends fs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class z0 extends fs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class H0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new _t);this._width=n.width,this._height=n.height,e=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new B0(Ar),this.copyPass.material.blending=kn,this.clock=new gh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ac!==void 0&&(a instanceof Ac?n=!0:a instanceof z0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new _t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class k0 extends fs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const V0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class os extends fs{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new _t(t.x,t.y):new _t(256,256),this.clearColor=new Ct(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,a,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new hn(r,a,{type:Cn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new hn(r,a,{type:Cn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=V0;this.highPassUniforms=as.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new _t(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=as.clone(Ar.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:Ar.vertexShader,fragmentShader:Ar.fragmentShader,blending:za,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ct,this._oldClearAlpha=1,this._basic=new us,this._fsQuad=new al(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new _t(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Oe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new _t(.5,.5)},direction:{value:new _t(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}os.BlurDirectionX=new _t(1,0);os.BlurDirectionY=new _t(0,1);const xr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class G0 extends fs{constructor(){super(),this.uniforms=as.clone(xr.uniforms),this.material=new zd({name:xr.name,uniforms:this.uniforms,vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader}),this._fsQuad=new al(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===zc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const W0=`
float superLightPCSS(sampler2D map, vec2 uv, float receiver, vec2 mapSize, float sunRadius) {
  float texel = 1.0 / mapSize.x;
  float searchRadius = max(texel * 2.0, sunRadius * 0.075);
  float blockers = 0.0;
  float depthSum = 0.0;
  // Shadow-texel anchored rotation avoids screen-space swimming while walking.
  float angle = fract(sin(dot(floor(uv * mapSize), vec2(12.9898,78.233))) * 43758.5453) * 6.283185;
  for (int i = 0; i < 24; i++) {
    float r = sqrt((float(i) + 0.5) / 24.0);
    float a = float(i) * 2.399963 + angle;
    vec2 sampleUV = clamp(uv + vec2(cos(a),sin(a)) * r * searchRadius, vec2(texel), vec2(1.0-texel));
    float d = unpackRGBAToDepth(texture2D(map, sampleUV));
    if (d < receiver) { depthSum += d; blockers += 1.0; }
  }
  if (blockers == 0.0) return 1.0;
  float penumbra = max(texel * 0.8, (receiver - depthSum / blockers) * sunRadius);
  float visibility = 0.0;
  for (int i = 0; i < 48; i++) {
    float r = sqrt((float(i) + 0.5) / 48.0);
    float a = float(i) * 2.399963 + angle;
    vec2 sampleUV = clamp(uv + vec2(cos(a),sin(a)) * r * penumbra, vec2(texel), vec2(1.0-texel));
    visibility += texture2DCompare(map, sampleUV, receiver);
  }
  return visibility / 48.0;
}
`,X0=Ft.shadowmap_pars_fragment.replace("float getShadow(",`${W0}
float getShadow(`).replace("#if defined( SHADOWMAP_TYPE_PCF )",`#if defined( HDR_SUPER_LIGHT )
    shadow = superLightPCSS(shadowMap, shadowCoord.xy, shadowCoord.z, shadowMapSize, shadowRadius);
  #elif defined( SHADOWMAP_TYPE_PCF )`);class q0{constructor(t){if(this.world=t,this.supported=t.renderer.extensions.has("EXT_color_buffer_float"),this.materials=new Set,this.lastShadowTime=-1/0,this.shadowPosition=new D(1/0,1/0,1/0),this.shadowRotation=new bi,this.csm=new U0({camera:t.camera,parent:t.scene,cascades:4,maxFar:320,mode:"custom",customSplitsCallback:(e,n,s,r)=>{e===2?r.push(32/s,1):r.push(16/s,48/s,128/s,1)},shadowMapSize:Math.min(4096,t.renderer.capabilities.maxTextureSize),lightDirection:t.sunDirection.clone().negate(),lightIntensity:t.sun.intensity,lightNear:1,lightFar:650,lightMargin:240,shadowBias:-15e-6}),this.csm.fade=!0,this.cascadeLights=[...this.csm.lights],t.sun.removeFromParent(),t.sun.target.removeFromParent(),t.scene.traverse(e=>{for(const n of[e.material].flat().filter(Boolean)){if(this.materials.has(n)||!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial))continue;this.materials.add(n);const s=n.onBeforeCompile,r=n.customProgramCacheKey();this.csm.setupMaterial(n);const a=n.onBeforeCompile;n.onBeforeCompile=(o,l)=>{s.call(n,o,l),a(o,l),o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",X0)},n.customProgramCacheKey=()=>`super-light-v2-${n.type}-${r}`,n.needsUpdate=!0}}),this.supported){const e=new hn(1,1,{type:Cn,samples:Math.min(4,t.renderer.capabilities.maxSamples)});this.composer=new H0(t.renderer,e),this.composer.addPass(new k0(t.scene,t.camera)),this.bloom=new os(new _t(1,1),.075,.35,1.6),this.composer.addPass(this.bloom),this.composer.addPass(new G0)}this.setQuality("hdr")}setQuality(t){var s,r;this.low=t==="low",this.enabled=["ultra","hdr"].includes(t)&&this.supported,this.useComposer=(this.enabled||this.low)&&this.supported;const e=this.low?2:4;this.csm.cascades=e,this.csm.lights=this.cascadeLights.slice(0,e);for(const[a,o]of this.cascadeLights.entries())a<e?this.world.scene.add(o,o.target):(o.removeFromParent(),o.target.removeFromParent(),(s=o.shadow.map)==null||s.dispose(),o.shadow.map=null);const n=Math.min(this.enabled?4096:2048,this.world.renderer.capabilities.maxTextureSize);this.csm.shadowMapSize=n;for(const a of this.csm.lights){const o=n;a.shadow.mapSize.x!==o&&(a.shadow.mapSize.set(o,o),(r=a.shadow.map)==null||r.dispose(),a.shadow.map=null),a.shadow.normalBias=.018}for(const a of this.materials)a.defines.CSM_CASCADES=e,this.enabled?a.defines.HDR_SUPER_LIGHT="":delete a.defines.HDR_SUPER_LIGHT,a.needsUpdate=!0;if(this.world.renderer.shadowMap.enabled=t!=="balanced",this.composer){this.bloom.enabled=this.enabled;for(const a of[this.composer.renderTarget1,this.composer.renderTarget2]){const o=this.enabled?Math.min(t==="ultra"?2:4,this.world.renderer.capabilities.maxSamples):0;a.samples!==o&&(a.dispose(),a.samples=o)}}this.world.renderer.toneMapping=this.enabled||this.low?Bo:zr,this.world.renderer.transmissionResolutionScale=this.low?.5:1,this.lastShadowTime=-1/0,this.updateFrustums(),this.syncSun()}syncSun(){const t=this.world;this.csm.lightDirection.copy(t.sunDirection).negate();for(const e of this.csm.lights)e.color.copy(t.sun.color),e.intensity=t.sun.intensity;t.renderer.shadowMap.needsUpdate=!0}updateFrustums(){this.csm.updateFrustums(),this.world.renderer.shadowMap.needsUpdate=!0;for(const t of this.csm.lights){const e=t.shadow.camera;t.shadow.radius=this.enabled?Math.tan(Te.degToRad(.266))*(e.far-e.near)/(e.right-e.left):1.5}}resize(t,e){this.updateFrustums(),this.composer&&(this.composer.setPixelRatio(this.useComposer?this.world.renderer.getPixelRatio():1),this.composer.setSize(this.useComposer?t:32,this.useComposer?e:32))}render(){const t=this.world;t.camera.updateMatrixWorld();const e=performance.now(),n=!this.shadowPosition.equals(t.camera.position)||!this.shadowRotation.equals(t.camera.quaternion);(!this.low||n||t.renderer.shadowMap.needsUpdate||e-this.lastShadowTime>=1e3/30)&&t.renderer.shadowMap.enabled&&(this.csm.update(),t.renderer.shadowMap.needsUpdate=!0,this.lastShadowTime=e,this.shadowPosition.copy(t.camera.position),this.shadowRotation.copy(t.camera.quaternion)),this.useComposer?this.composer.render():t.renderer.render(t.scene,t.camera)}}function Vs(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ve;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Rc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const m=Rc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Rc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new $e(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);o.setComponent(d+u,m,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const Co=Te.clamp,an=i=>(i=Co(i,0,1),i*i*(3-2*i));function Mr(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Ge(i,t){const e=Math.floor(i),n=Math.floor(t),s=an(i-e),r=an(t-n);return Te.lerp(Te.lerp(Mr(e,n),Mr(e+1,n),s),Te.lerp(Mr(e,n+1),Mr(e+1,n+1),s),r)}function Po(i,t){return Ge(i,t)*.56+Ge(i*2.03,t*2.03)*.27+Ge(i*4.07,t*4.07)*.12+Ge(i*8.11,t*8.11)*.05}const Hn=i=>10+4.5*Math.sin(i*.019)+2*Math.sin(i*.055),Rr=i=>-29+1.3*Math.sin(i*.04),ke=i=>-39+72e-5*i*i,mi=i=>4.5+.002*i,Lo=(i,t)=>1.8-.025*t+1e-4*i*i+.8*Ge(i*.026+6,t*.021),Si=[];for(const[i,[t,e]]of[[-24,-3],[3,29],[35,66],[72,113]].entries())for(const[n,[s,r]]of[[-106,-68],[-63,-27],[-22,6],[23,59],[64,107]].entries()){const a=(s+r)/2,o=(t+e)/2;Si.push({x1:s,x2:r,z1:t,z2:e,y:Math.round(Lo(a,o)/.45)*.45-.25,young:i===0&&n===3,row:i,column:n})}function ol(i,t,e=0){return Si.find(n=>i>n.x1-e&&i<n.x2+e&&t>n.z1-e&&t<n.z2+e)}function cn(i,t){const e=ol(i,t,2.2);let n=Lo(i,t);if(e){const o=Math.max(e.x1-i,i-e.x2,e.z1-t,t-e.z2,0);n=Te.lerp(e.y,n+.18,an(o/2.2))}const s=Math.max(an((-t-84)/160),an((Math.abs(i)-118)/135),an((t-133)/175)),r=30+118*Po(i*.008+12,t*.007+7)+25*Math.sin(i*.014+t*.006)**2;n+=s*r;const a=Math.abs(t-ke(i));Math.abs(i)<235&&a<7&&(n=Te.lerp(mi(i)-.48,n,an((a-2.6)/4.4)));for(const[o,l,c]of[[-26,-64,10],[10,-81,9],[49,-65,10],[-63,-76,9],[82,-83,9],[-88,-51,8]]){const h=Math.hypot(i-o,t-l);h<c+3&&(n=Te.lerp(Lo(o,l)+1.1,n,an((h-c)/3)))}return n}function zs(i,t){const e=cn(i,t);let n=0;const s=Math.abs(i-Hn(t)),r=Math.abs(t-Rr(i));t>=-106&&t<=126&&(s<2.35&&(n=Math.max(n,.14)),s<1.375&&(n=Math.max(n,.24))),i>=-111&&i<=111&&(r<2.3&&(n=Math.max(n,.13)),r<1.65&&(n=Math.max(n,.24)));for(const o of Si)i>=o.x1&&i<=o.x2&&Math.abs(t-(o.z2+1))<.525&&(n=Math.max(n,.12));let a=e+n;return s<1.5&&t>3.3&&t<6.5&&(a=Math.max(a,e+.355)),Math.abs(i-Hn(-39))<2.5&&Math.abs(t-ke(Hn(-39)))<1.8&&(a=Math.max(a,mi(i)+.06)),a}function yh(i,t,e,n=0){if(i.halfWidth){const s=t-i.x,r=e-i.z,a=Math.cos(i.rotation),o=Math.sin(i.rotation);return Math.abs(a*s-o*r)<i.halfWidth+n&&Math.abs(o*s+a*r)<i.halfDepth+n}return Math.hypot(t-i.x,e-i.z)<i.r+n}function Y0(i){const t=new Ct,e=(h,u,d,f,m)=>{const _=new we(h,h,u,u);_.rotateX(-Math.PI/2);const g=_.attributes.position,p=[];for(let v=0;v<g.count;v++){const A=g.getX(v)+d,T=g.getZ(v)+f;g.setXYZ(v,A,cn(A,T)-(m?0:.12),T);const R=Po(A*.14,T*.14),L=ol(A,T);t.setHSL(L?.105:.245+R*.025,L?.26:.38,L?.18:.25+R*.18),p.push(t.r,t.g,t.b)}_.setAttribute("color",new qt(p,3)),_.computeVertexNormals();const M=i.materials.grass.clone();M.color.set(16777215),M.vertexColors=!0;const b=new Nt(_,M);return b.castShadow=b.receiveShadow=!0,i.scene.add(b),b};i.terrain=e(290,290,0,0,!0);const n=e(1500,150,0,0,!1),s=n.geometry.index.array,r=n.geometry.attributes.position,a=[];for(let h=0;h<s.length;h+=3){const u=(r.getX(s[h])+r.getX(s[h+1])+r.getX(s[h+2]))/3,d=(r.getZ(s[h])+r.getZ(s[h+1])+r.getZ(s[h+2]))/3;(Math.abs(u)>140||Math.abs(d)>140)&&a.push(s[h],s[h+1],s[h+2])}n.geometry.setIndex(a);const o=[],l=new Zt;for(const h of Si)for(let u=h.x1;u<h.x2;u+=.95){const d=cn(u,h.z2+1.1),f=Math.min(h.y,d-.35),m=new dn(.84,.42,.62);l.makeTranslation(u,(d+f)/2,h.z2+1.05),m.applyMatrix4(l),o.push(m)}const c=new Nt(Vs(o),i.materials.stone);c.castShadow=c.receiveShadow=!0,i.scene.add(c),o.forEach(h=>h.dispose());for(let h=0;h<3;h++){const u=new we(1900,200,160,1),d=u.attributes.position;for(let m=0;m<d.count;m++)d.setY(m,d.getY(m)>0?55+h*20+Po(d.getX(m)*.006+h*7,h)*145:-30);const f=new Nt(u,new us({color:[6127735,7837840,9547174][h],side:ce}));f.position.z=-530-h*170,i.scene.add(f)}}function $0(){const i=Si.map(e=>{const n=new we(e.x2-e.x1,e.z2-e.z1);return n.translate((e.x1+e.x2)/2,-(e.z1+e.z2)/2,e.y+.11),n}),t=Vs(i);return i.forEach(e=>e.dispose()),t}let Fa=87423;const yi=()=>(Fa=Fa*1664525+1013904223>>>0,Fa/4294967296),Mt=(i,t)=>i+yi()*(t-i),ll=i=>{const t=new Jo(i);return t.colorSpace=De,t};function Ps(i=!1,t=!1){const e=document.createElement("canvas");e.width=e.height=512;const n=e.getContext("2d"),s=(r,a,o,l,c)=>{n.save(),n.translate(r,a),n.rotate(l);const h=n.createLinearGradient(-o,0,o,0);h.addColorStop(0,`hsl(88 39% ${c*.72}%)`),h.addColorStop(.5,`hsl(84 45% ${c}%)`),h.addColorStop(1,`hsl(94 42% ${c*.78}%)`),n.fillStyle=h,n.beginPath(),n.moveTo(-o,0),n.quadraticCurveTo(0,-o*.72,o,0),n.quadraticCurveTo(0,o*.7,-o,0),n.fill(),o>5&&(n.strokeStyle="#c1cd7629",n.lineWidth=.6,n.beginPath(),n.moveTo(-o,0),n.lineTo(o,0),n.stroke()),n.restore()};if(t){n.strokeStyle="#68624a",n.lineWidth=9,n.beginPath(),n.moveTo(256,508),n.lineTo(258,22),n.stroke();for(let r=0;r<65;r++){const a=35+r*6.3,o=12+r*2.45;for(const l of[-1,1]){const c=256+l*o,h=a+Mt(12,27);n.strokeStyle="#3e5036",n.lineWidth=2,n.beginPath(),n.moveTo(256,a),n.lineTo(c,h),n.stroke();for(let u=0;u<34;u++){const d=u/34;s(256+(c-256)*d+Mt(-6,6),a+(h-a)*d+Mt(-7,7),Mt(3,9),Mt(-3,3),Mt(24,43))}}}}else if(i){n.strokeStyle="#675c44",n.lineWidth=11,n.beginPath(),n.moveTo(256,510),n.lineTo(248,234),n.stroke();for(let r=0;r<20;r++){const a=r*2.4,o=Mt(35,150),l=256+Math.cos(a)*o,c=206+Math.sin(a)*o*.8;n.lineWidth=Mt(2,6),n.beginPath(),n.moveTo(253,390),n.quadraticCurveTo(253,270,l,c),n.stroke();for(let h=0;h<160;h++){const u=Mt(0,Math.PI*2),d=Math.sqrt(yi())*Mt(35,75);s(l+Math.cos(u)*d,c+Math.sin(u)*d*.85,Mt(2,6),Mt(-3,3),Mt(29,55)-c/512*10)}}}else for(let r=0;r<12;r++){const a=r*2.4,o=256+Math.cos(a)*Mt(100,210),l=256+Math.sin(a)*Mt(90,210);n.strokeStyle="#6b6742",n.lineWidth=2.4,n.beginPath(),n.moveTo(250,300),n.quadraticCurveTo(256,240,o,l),n.stroke();for(let c=0;c<58;c++){const h=Mt(.1,1),u=Mt(0,Math.PI*2),d=Math.sqrt(yi())*55,f=250+(o-250)*h+Math.cos(u)*d,m=300+(l-300)*h+Math.sin(u)*d;s(f,m,Mt(5,12),Mt(-3,3),Mt(30,57))}}return ll(e)}function j0(i){const t=new we(1,1);t.translate(0,.5,0);const e=new Qi({map:Ps(!0),alphaTest:.42,side:ce,color:11912348}),n=new Qi({map:Ps(!0,!0),alphaTest:.42,side:ce,color:11124133}),s=[],r=[];for(let v=-480;v<210;v+=8.5)for(let A=-440;A<440;A+=8.5){const T=A+Mt(-4,4),R=v+Mt(-4,4);if(R>-93&&R<140&&Math.abs(T)<119||Math.abs(R-ke(T))<9&&Math.abs(T)<230)continue;const L={x:T,z:R,h:Mt(8,15),s:Mt(.7,1.2)};(Ge(T*.03,R*.04)>.66?r:s).push(L)}for(let v=0;v<58;v++)r.push({x:Mt(23,83),z:Mt(-119,-96),h:Mt(16,25),s:.8});const a=new he,o=new Ct,l=(v,A,T)=>{const R=new Map;for(const L of v){const S=`${Math.floor(L.x/70)},${Math.floor(L.z/70)}`;R.has(S)||R.set(S,[]),R.get(S).push(L)}for(const L of R.values()){const S=new ln(t,A,L.length*2);let y=0;for(const P of L)for(let F=0;F<2;F++)a.position.set(P.x,cn(P.x,P.z)-.15,P.z),a.scale.set(P.h*T*P.s,P.h,1),a.rotation.set(0,F*Math.PI/2+Ge(P.x,P.z)*.8,0),a.updateMatrix(),S.setMatrixAt(y,a.matrix),o.setHSL(Mt(.21,.27),Mt(.03,.12),Mt(.72,1)),S.setColorAt(y++,o);S.castShadow=S.receiveShadow=!0,S.computeBoundingSphere(),i.scene.add(S)}};l(s,e,.91),l(r,n,.52);const c=new Qi({map:Ps(),alphaTest:.4,side:ce,color:13095847}),h=[[-16,19,15],[-37,-56,12],[-46,-69,15],[31,-69,11],[66,-62,12],[-83,-38,13],[45,27,14],[101,13,13],[-108,55,16],[72,-89,15],[-10,-84,12],[-86,-86,15]],u=new ln(new we(1,1),c,h.length*64);let d=0;const f=[];function m(v,A,T,R){const L=new D().subVectors(A,v),S=new Rn(R,T,L.length(),7,1),y=new bi().setFromUnitVectors(new D(0,1,0),L.normalize());S.applyQuaternion(y),S.translate((v.x+A.x)/2,(v.y+A.y)/2,(v.z+A.z)/2),f.push(S)}h.forEach(([v,A,T])=>{const R=cn(v,A);i.colliders.push({x:v,z:A,r:T*.025+.35}),m(new D(v,R,A),new D(v+.2,R+T*.6,A),T*.027,T*.008);for(let L=0;L<9;L++){const S=L*2.4,y=T*Mt(.18,.31),P=new D(v+Math.cos(S)*y,R+T*Mt(.59,.86),A+Math.sin(S)*y);m(new D(v+.1,R+T*.38,A),P,T*.011,T*.0015)}for(let L=0;L<64;L++){const S=L*2.39996,y=Math.sqrt(yi())*T*.37;a.position.set(v+Math.cos(S)*y,R+T*(.64+.26*yi())-y/T*1.5,A+Math.sin(S)*y),a.rotation.set(Mt(-.8,.8),Mt(0,Math.PI*2),Mt(-.5,.5)),a.scale.setScalar(T*Mt(.27,.43)),a.updateMatrix(),u.setMatrixAt(d,a.matrix),o.setHSL(Mt(.22,.27),.12,Mt(.65,.96)),u.setColorAt(d++,o)}}),u.castShadow=!0,u.receiveShadow=!0,i.scene.add(u),i.forest=u;const _=[],g=[],p=[];for(let v of f)v.index&&(v=v.toNonIndexed()),_.push(...v.attributes.position.array),g.push(...v.attributes.normal.array),p.push(...v.attributes.uv.array),v.dispose();const M=new ve;M.setAttribute("position",new qt(_,3)),M.setAttribute("normal",new qt(g,3)),M.setAttribute("uv",new qt(p,2));const b=new Nt(M,i.materials.wood);b.castShadow=b.receiveShadow=!0,i.scene.add(b),K0(i)}function K0(i){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");for(let h=0;h<145;h++){const u=Mt(8,248),d=Mt(40,225),f=Mt(-65,65),m=e.createLinearGradient(0,256,0,0);m.addColorStop(0,"#314a1d"),m.addColorStop(.6,`hsl(${Mt(77,105)} 52% ${Mt(30,49)}%)`),m.addColorStop(1,"#a5b850"),e.fillStyle=m,e.beginPath(),e.moveTo(u,256),e.quadraticCurveTo(u+f*.25,256-d*.5,u+f,256-d),e.quadraticCurveTo(u+f*.25+2,256-d*.4,u+Mt(1,3),256),e.fill()}const n=ll(t),s=new Qi({map:n,alphaTest:.35,side:ce}),r=new we(1,1);r.translate(0,.5,0);const a=[];for(let h=0;h<9e3;h++){let u=Mt(-115,115),d=Mt(-86,121);h<3300&&(d=Mt(-85,121),u=Hn(d)+(yi()>.5?1:-1)*Mt(1.48,2.8)),!(ol(u,d,-.5)||Math.abs(u-Hn(d))<1.4||Math.abs(d-ke(u))<2.5||Math.abs(d+29-1.3*Math.sin(u*.04))<1.5)&&(i.colliders.some(f=>Math.hypot(u-f.x,d-f.z)<f.r)||a.push({x:u,z:d}))}const o=new ln(r,s,a.length*2),l=new he;let c=0;for(const h of a)for(let u=0;u<2;u++)l.position.set(h.x,cn(h.x,h.z)+.02,h.z),l.scale.set(Mt(.6,1.15),Mt(.38,.84),1),l.rotation.set(0,u*Math.PI/2+yi(),0),l.updateMatrix(),o.setMatrixAt(c++,l.matrix);o.castShadow=o.receiveShadow=!0,i.scene.add(o)}function Eh(i){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d"),n=Array.from({length:22},()=>({x:Mt(65,440),y:Mt(82,174),r:Mt(24,69)})),s=e.createImageData(512,256);for(let a=0;a<256;a++)for(let o=0;o<512;o++){let l=-1;for(const d of n)l=Math.max(l,1-Math.hypot(o-d.x,(a-d.y)*1.1)/d.r);l+=Ge(o*.075,a*.075)*.17;const c=Te.smoothstep(l,.045,.21),h=230+21*(1-a/256)+Ge(o*.055,a*.055)*6,u=(a*512+o)*4;s.data[u]=h,s.data[u+1]=h+1,s.data[u+2]=Math.min(255,h+4),s.data[u+3]=c*245}e.putImageData(s,0,0);const r=ll(t);i.clouds=[];for(let a=0;a<14;a++){const o=new oh({map:r,transparent:!0,depthWrite:!1,fog:!1,opacity:Mt(.75,.96)}),l=new Ld(o);l.position.set(Mt(-680,680),Mt(180,260),Mt(-950,-460)),l.scale.set(Mt(125,210),Mt(60,95),1),i.scene.add(l),i.clouds.push(l)}}const ws=new D;function rn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ws.copy(t),ws[n]=0,ws.normalize();const c=.5*a/(a+o),h=1-ws.angleTo(i)/l;return Math.sign(ws[e])===1?h*c:o/(a+o)+c+c*(1-h)}class cl extends dn{constructor(t=1,e=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new D,c=new D,h=new D(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,_=new D,g=.5/a;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/m)){case 0:_.set(1,0,0),f[M+0]=rn(_,c,"z","y",r,n),f[M+1]=1-rn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[M+0]=1-rn(_,c,"z","y",r,n),f[M+1]=1-rn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[M+0]=1-rn(_,c,"x","z",r,t),f[M+1]=rn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[M+0]=1-rn(_,c,"x","z",r,t),f[M+1]=1-rn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[M+0]=1-rn(_,c,"x","y",r,t),f[M+1]=1-rn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[M+0]=rn(_,c,"x","y",r,t),f[M+1]=1-rn(_,c,"y","x",r,e);break}}static fromJSON(t){return new cl(t.width,t.height,t.depth,t.segments,t.radius)}}const ye=(i,t=.8,e=0)=>new le({color:i,roughness:t,metalness:e});function Kt(i,t,e,n,s,r,a,o,l=0){const c=new Nt(l?new cl(t,e,n,2,l):new dn(t,e,n),o);return c.position.set(s,r,a),c.castShadow=c.receiveShadow=!0,i.add(c),c}function yn(i,t,e,n,s,r,a){const o=new Nt(new Rn(t,t,e,12),a);return o.position.set(n,s,r),o.castShadow=!0,i.add(o),o}function Cc(i){i.updateMatrixWorld(!0);const t=new Map;i.traverse(e=>{if(!e.isMesh)return;t.has(e.material)||t.set(e.material,[]);let n=e.geometry.clone().applyMatrix4(e.matrixWorld);n.index&&(n=n.toNonIndexed()),t.get(e.material).push(n)}),i.clear();for(const[e,n]of t){const s=new Nt(Vs(n),e);s.castShadow=s.receiveShadow=!0,i.add(s),n.forEach(r=>r.dispose())}}class Z0{constructor(t){this.world=t,this.scene=t.scene,this.time=0,this.trainX=-62,this.speed=7.2,this.cx=Hn(-39),this.cz=ke(this.cx),this.warning=!1,this.gateAngle=Math.PI/2,this.cars=[],this.gates=[],this.lights=[],this.npcs=[],this.railway(),this.train(),this.villagers(),this.update(0)}railway(){const t=new Le;this.scene.add(t);const e=ye(7634554,.3,.7),n=ye(6705213),s=ye(5261107),r=ye(10198415),a=ye(15054645),o=ye(2567721),l=new fh().load("/inaka/docs/textures/gravel.jpg");l.wrapS=l.wrapT=xi,l.colorSpace=De;const c=new le({map:l,color:9342083,bumpMap:l,bumpScale:.12,roughness:1}),h=[];for(let m=-230;m<=230;m+=2)h.push([m,ke(m)]);this.world.ribbon(h,4.5,c,.26);for(let m=-230;m<230;m+=2)for(const _ of[-1,1])Kt(t,2.03,.1,.07,m,mi(m)+.08,ke(m)+_*.6,e).rotation.y=-Math.atan(.00144*m),Kt(t,2.03,.06,.15,m,mi(m),ke(m)+_*.6,n).rotation.y=-Math.atan(.00144*m);const u=new ln(new dn(.18,.12,2.1),s,656),d=new he;for(let m=0;m<656;m++){const _=-229+m*.7;d.position.set(_,mi(_)-.065,ke(_)),d.rotation.y=-Math.atan(.00144*_),d.updateMatrix(),u.setMatrixAt(m,d.matrix)}u.receiveShadow=!0,this.scene.add(u);const f=new Zo({color:3687485});for(let m=-180;m<180;m+=32){const _=ke(m)-4,g=cn(m,_);yn(t,.11,8.4,m,g+4.2,_,r),Kt(t,2,.12,.12,m,g+7.8,_,r);for(const p of[-.8,0,.8])if(yn(t,.07,.22,m+p,g+7.96,_,r),m<148){const M=[];for(let b=0;b<=14;b++){const v=b/14,A=m+32*v;M.push(new D(A+p,Te.lerp(g,cn(m+32,ke(m+32)-4),v)+8-.7*Math.sin(Math.PI*v),ke(A)-4))}this.scene.add(new ch(new ve().setFromPoints(M),f))}}Kt(t,5,.08,3.6,this.cx,mi(this.cx)+.02,this.cz,ye(5593425));for(const m of[-1,1]){const _=this.cx+m*2.7,g=this.cz+m*3.6,p=cn(_,g);yn(t,.11,3.9,_,p+1.95,g,o);for(let b=0;b<10;b++)yn(t,.116,.18,_,p+.2+b*.36,g,a);Kt(t,.65,.8,.56,_,p+.5,g,a,.05);for(const b of[-Math.PI/4,Math.PI/4]){Kt(t,1.45,.2,.12,_,p+3.7,g,a).rotation.z=b;for(const v of[-1,1])Kt(t,.25,.21,.13,_+v*.36*Math.cos(b),p+3.7+v*.36*Math.sin(b),g,o).rotation.z=b}for(const b of[-.33,.33]){const v=yn(t,.22,.15,_+b,p+2.9,g+.1,o);v.rotation.x=Math.PI/2;const A=new le({color:3870987,emissive:16721168,emissiveIntensity:0}),T=new Nt(new Kn(.15,12,8),A);T.scale.z=.35,T.position.set(_+b,p+2.9,g+.2),this.scene.add(T),this.lights.push({lamp:T,phase:b>0?0:1})}const M=new Le;M.position.set(_,p+1,g),M.userData.side=m;for(let b=0;b<12;b++)Kt(M,.42,.075,.075,-m*(.21+b*.42),0,0,b%2?o:a);this.scene.add(M),this.gates.push(M),Kt(t,.6,1.1,.5,_+m*.75,p+.55,g-1,r,.04)}for(let m=0;m<7;m++){const _=this.cz+7+m*1.6,g=Hn(_)-2.8,p=cn(g,_);yn(t,.055,.8,g,p+.4,_,r),Kt(t,.07,.22,1.7,g,p+.68,_,r)}Cc(t)}train(){const t=ye(15130566,.43,.25),e=ye(4091992,.45,.3),n=ye(12150850),s=ye(9147533,.5,.4),r=ye(2700591,.6,.6),a=ye(2835789,.12,.7),o=ye(13028027,.35,.6);for(let l=0;l<2;l++){const c=new Le,h=new Le;this.scene.add(c),c.add(h),Kt(h,15.3,2.65,2.72,0,2.28,0,t,.18),Kt(h,15.36,.65,2.76,0,1.32,0,e,.05),Kt(h,15.4,.13,2.78,0,1.72,0,n),Kt(h,15.25,.34,2.78,0,3.65,0,s,.16),Kt(h,13.8,.4,2.18,0,.78,0,r,.05);for(const d of[-3.4,3.4])Kt(h,1.9,.3,1.65,d,3.94,0,s,.07),Kt(h,1.55,.04,1.4,d,4.1,0,r);for(const d of[-1,1]){for(let f=0;f<8;f++){const m=-5.6+f*1.6;Kt(h,1.34,1.06,.045,m,2.7,d*1.38,o,.035),Kt(h,1.21,.94,.05,m,2.7,d*1.41,a,.025),Kt(h,.035,.93,.05,m,2.7,d*1.445,o)}for(const f of[-6.7,6.7])Kt(h,.76,2.05,.055,f,2.08,d*1.425,o,.02),Kt(h,.6,1.93,.06,f,2.08,d*1.46,t,.02),Kt(h,.44,.86,.068,f,2.68,d*1.5,a,.02),Kt(h,.85,.1,.28,f,.91,d*1.43,r)}for(const d of[-1,1]){Kt(h,.075,.95,2.15,d*7.72,2.7,0,a,.03),Kt(h,.08,1.04,.055,d*7.78,2.7,0,o),Kt(h,.3,.22,1.25,d*7.77,1.01,0,r),Kt(h,.65,.2,.25,d*7.9,.85,0,r);for(const f of[-1,1]){const m=new Nt(new Kn(.11,10,8),new le({color:16775631,emissive:16770475,emissiveIntensity:d===1&&l===0?1.4:0}));m.position.set(d*7.73,1.88,f*.92),h.add(m)}}const u=[];for(const d of[-5.2,-3.8,3.8,5.2])for(const f of[-1,1]){const m=yn(c,.38,.18,d,.39,f*.6,r);m.rotation.x=Math.PI/2,u.push(m)}for(const d of[-4.5,4.5])Kt(h,2.25,.25,2.15,d,.58,0,r,.03);Cc(h),this.cars.push({group:c,wheels:u,offset:l*16.25})}}villagers(){const t=(n,s,r)=>{const a=Math.ceil(Math.abs(s-n)/2);return Array.from({length:a+1},(o,l)=>r(Te.lerp(n,s,l/a)))};[t(40,-68,n=>[Hn(n)-.65,n]),t(-75,60,n=>[n,Rr(n)-.55]),t(8,105,n=>[Hn(n)+.65,n]),t(-97,-31,n=>[n,Rr(n)+.55]),t(42,85,n=>[n,Rr(n)+.55])].forEach((n,s)=>{const r=new Le,a=ye([13289139,7706764,11581635,7701093,11901825][s]),o=ye(4279632),l=ye(13015928),c=ye(13219724),h=ye(3619890),u=(M,b,v,A,T)=>{const R=new Nt(new Qo(b,v,3,8),T);return R.position.y=A,M.add(R),R};u(r,.175,.3,1.15,a).scale.z=.68,yn(r,.067,.14,0,1.49,0,l);const d=new Nt(new Kn(.13,12,10),l);d.scale.set(.86,1.18,.9),d.position.set(0,1.65,.01),r.add(d),yn(r,.23,.045,0,1.79,0,c),yn(r,.14,.11,0,1.85,0,c),Kt(r,.28,.17,.2,0,.94,0,o,.04);const f=ye(3156516);for(const M of[-1,1]){const b=new Nt(new Kn(.012,8,6),f);b.position.set(M*.043,1.67,.117),r.add(b)}const m=new Nt(new Kn(.023,8,6),l);m.position.set(0,1.63,.125),r.add(m);const _=[];for(const M of[-1,1]){const b=new Le;b.position.set(M*.1,.94,0),r.add(b),u(b,.077,.28,-.19,o);const v=new Le;v.position.y=-.4,b.add(v),u(v,.059,.29,-.18,o);const A=Kt(v,.14,.09,.25,0,-.4,.055,h,.03),T=new Le;T.position.set(M*.235,1.38,0),r.add(T),u(T,.06,.22,-.15,a),u(T,.044,.2,-.41,l),u(T,.045,.04,-.56,l),_.push({leg:b,knee:v,arm:T,foot:A,s:M})}Kt(r,.24,.28,.11,-.23,1,0,ye(8943194),.03),r.traverse(M=>{M.isMesh&&(M.castShadow=M.receiveShadow=!0)}),this.scene.add(r);const g=new Bd(n.map(([M,b])=>new D(M,0,b)),!1,"centripetal"),p=g.getLength();this.npcs.push({root:r,limbs:_,curve:g,length:p,distance:[.2,.58,.2,.22,.58][s]*p,direction:s%2?-1:1,speed:.65+s*.06,phase:s*1.7,gait:0})})}canEnter(t,e,n){const s=(r,a)=>Math.abs(r-this.cx)<3.2&&Math.abs(a-this.cz)<3.4;if(this.warning&&s(t,e)){const r=(a,o)=>Math.max(Math.abs(a-this.cx)/3.2,Math.abs(o-this.cz)/3.4);if(!n||!s(n.x,n.z)||r(t,e)<=r(n.x,n.z))return!1}return Math.abs(e-ke(t))<1.9&&this.cars.some(r=>Math.abs(t-r.group.position.x)<8.6)?!1:!this.npcs.some(r=>Math.hypot(t-r.root.position.x,e-r.root.position.z)<.48)}update(t){this.time+=t,this.trainX+=t*this.speed,this.trainX>249&&(this.trainX=-230);for(const e of this.cars){const n=this.trainX-e.offset;e.group.position.set(n,mi(n)+.12,ke(n)),e.group.rotation.y=-Math.atan(.00144*n),e.wheels.forEach(s=>s.rotation.y-=t*this.speed/.38)}this.warning=this.trainX+8>this.cx-55&&this.trainX-24<this.cx+17,this.gateAngle=Te.lerp(this.gateAngle,this.warning?0:Math.PI/2,Math.min(1,t*.95)),this.gates.forEach(e=>e.rotation.z=-e.userData.side*this.gateAngle),this.lights.forEach(e=>e.lamp.material.emissiveIntensity=this.warning&&Math.floor(this.time*2.6)%2===e.phase?2.7:0);for(const e of this.npcs){let n=e.distance+t*e.speed*e.direction;(n>e.length||n<0)&&(e.direction*=-1,n=Co(n,0,e.length));const s=e.curve.getPointAt(Co(n/e.length,0,1)),r=Math.abs(e.root.position.z-this.cz)<3.5,a=this.cars.some(d=>Math.abs(s.x-d.group.position.x)<8.8)&&Math.abs(s.z-ke(s.x))<2;e.waiting=this.warning&&!r&&Math.abs(s.x-this.cx)<3.4&&Math.abs(s.z-this.cz)<5.4||a||Math.hypot(s.x-this.world.camera.position.x,s.z-this.world.camera.position.z)<1.1||this.world.colliders.some(d=>yh(d,s.x,s.z,.28)),e.waiting||(e.distance=n,e.phase+=t*e.speed*7),e.gait=Te.damp(e.gait,e.waiting?0:1,12,t);const o=e.curve.getPointAt(e.distance/e.length),l=e.curve.getTangentAt(e.distance/e.length).multiplyScalar(e.direction);e.root.position.set(o.x,zs(o.x,o.z),o.z),e.root.rotation.y=Math.atan2(l.x,l.z);const c=Math.sin(e.phase)*.32*e.gait;for(const d of e.limbs)d.leg.rotation.x=c*d.s,d.knee.rotation.x=Math.max(0,-c*d.s)*.7,d.arm.rotation.x=-c*d.s*.7;e.root.updateMatrixWorld(!0);let h=-1/0;const u=new D;for(const d of e.limbs)for(const f of[-.07,.07])for(const m of[-.125,.125])u.set(f,-.045,m).applyMatrix4(d.foot.matrixWorld),h=Math.max(h,zs(u.x,u.z)-u.y);e.root.position.y+=h+.008}}}const Do={minX:-348,maxX:348,minZ:-348,maxZ:348},bh=(i,t)=>2+Ge(i*.007+4,t*.009)*3+t*.002,J0=new Set(["1,2","2,2","7,5","8,5","5,0","5,1"]),Pc=["wheat","green","soil","green","water","flowers","green","wheat","soil"],Hs=[],Th=new Map;for(let i=0;i<9;i++)for(let t=0;t<10;t++){if(J0.has(`${t},${i}`))continue;const e=-326+t*66,n=-316+i*60,s={x1:e,x2:e+58,z1:n,z2:n+52,row:i,col:t,kind:Pc[(t*3+i*5+Math.floor(t/3))%Pc.length]};t===0&&i===5&&(s.kind="wheat"),t===3&&i===3&&(s.kind="water"),t===8&&i===7&&(s.kind="flowers"),s.y=bh(e+29,n+26),Hs.push(s),Th.set(`${t},${i}`,s)}function Ye(i,t){let e=bh(i,t);const n=Th.get(`${Math.floor((i+330)/66)},${Math.floor((t+320)/60)}`);if(n){const r=Math.max(n.x1-i,i-n.x2,n.z1-t,t-n.z2,0);e=Te.lerp(n.y,e,an(r/4))}e+=an((t-216)/124)*(34+18*Ge(i*.009,t*.007));const s=Math.max(an((Math.abs(i)-365)/240),an((-t-355)/260));return e+s*(35+90*Ge(i*.005+8,t*.004))}const wh=(i,t)=>Ye(i,t)+.17,Yi=(i,t,e,n,s)=>({name:i,subtitle:t,position:[e,wh(e,n)+1.7,n],look:s}),vi=[Yi("大地を見渡す丘","どこまでも続く、パッチワークの田園。",12,310,[-30,3,-170]),Yi("黄金の麦畑","穂先を揺らす風と、まっすぐな農道。",-264,38,[-295,4,7]),Yi("農家の小さな集落","畑の向こうに、いつもの暮らし。",-230,-200,[-214,5,-179]),Yi("空を映す水田","水面にも、もうひとつの青空。",-132,-80,[-100,3,-112]),Yi("花畑の散歩道","夏色の花と、丘を渡る風。",198,100,[225,4,126]),Yi("ポプラの並木道","木陰から木陰へ、のんびり歩く。",330,8,[330,5,-140])],Ah={wheat:"#baa444",green:"#467827",soil:"#816348",water:"#658a91",flowers:"#c1ad43"};let Cr=518293;function Ls(){return Cr=Math.imul(Cr,1664525)+1013904223>>>0,Cr/4294967296}const me=(i,t)=>i+Ls()*(t-i);function hl(i,t){const e=new Jo(i);return e.colorSpace=De,e.anisotropy=Math.min(16,t.renderer.capabilities.getMaxAnisotropy()),e}function Q0(i,t){const e=document.createElement("canvas");e.width=e.height=2048;const n=e.getContext("2d");n.fillStyle=Ah[i],n.fillRect(0,0,2048,2048);for(let r=0;r<2048;r+=64){const a=n.createLinearGradient(r,0,r+64,0);a.addColorStop(0,"#18241655"),a.addColorStop(.4,"#ffffc51c"),a.addColorStop(1,"#151a153a"),n.fillStyle=a,n.fillRect(r,0,64,2048)}for(let r=0;r<52e3;r++)n.fillStyle=Ls()>.5?"#f7edaa28":"#19290f32",n.fillRect(Ls()*2048,Ls()*2048,me(1,5),me(2,10));const s=hl(e,t);return s.wrapS=s.wrapT=xi,s.repeat.set(2,3),s}function t_(i,t){const e=document.createElement("canvas");e.width=e.height=1024;const n=e.getContext("2d");for(let s=0;s<32;s++){const r=me(40,980),a=me(100,490),o=me(-90,90);n.strokeStyle=i==="wheat"?"#a48c33":"#4c772c",n.lineWidth=me(3,6),n.beginPath(),n.moveTo(r,1024),n.quadraticCurveTo(r,550,r+o,a),n.stroke();for(let l=0;l<4;l++){const c=930-l*125,h=l%2?-1:1;n.fillStyle=i==="wheat"?"#b8a443":["#719a36","#92ad45","#356828"][l%3],n.beginPath(),n.moveTo(r,c),n.quadraticCurveTo(r+h*100,c-140,r+h*140,c-100),n.quadraticCurveTo(r+h*35,c-50,r,c+12),n.fill()}if(i==="wheat")for(let l=0;l<11;l++)n.fillStyle=l%2?"#e9cf72":"#c3a54b",n.beginPath(),n.ellipse(r+o+(l%2?9:-9),a+l*9,8,15,l%2?.5:-.5,0,Math.PI*2),n.fill();else if(i==="flowers"){for(let l=0;l<8;l++){const c=l*Math.PI/4;n.fillStyle="#f5d34c",n.beginPath(),n.ellipse(r+o+Math.cos(c)*26,a+Math.sin(c)*26,13,24,c-Math.PI/2,0,Math.PI*2),n.fill()}n.fillStyle="#644a2a",n.beginPath(),n.arc(r+o,a,17,0,Math.PI*2),n.fill()}}return hl(e,t)}function Sr(i,t,e,n,s,r=0){const a=new Le;a.position.set(t,Ye(t,e),e),a.rotation.y=r,i.scene.add(a);const o=document.createElement("canvas");o.width=1024,o.height=384;const l=o.getContext("2d");l.fillStyle="#eff0dc",l.fillRect(0,0,o.width,o.height),l.strokeStyle="#59714d",l.lineWidth=14,l.strokeRect(18,18,988,348),l.fillStyle="#344e3c",l.textAlign="center",l.font="500 78px sans-serif",l.fillText(n,512,162),l.font="34px sans-serif",l.fillText(s,512,260);const c=new Nt(new dn(3.7,1.38,.14),i.materials.wood);c.position.y=2.1,a.add(c);const h=new Nt(new we(3.6,1.3),new le({map:hl(o,i),roughness:.9}));h.position.set(0,2.1,.08),a.add(h);for(const u of[-1.25,1.25])i.addBox(.12,2.2,.12,u,1.1,0,i.materials.wood,a);i.colliders.push({x:t,z:e,halfWidth:1.9,halfDepth:.16,rotation:r})}function e_(i,t,e,n=0){const s=new Le;s.position.set(t,Ye(t,e),e),s.rotation.y=n,i.scene.add(s),i.addBox(2.7,.15,.75,0,.62,0,i.materials.wood,s),i.addBox(2.7,.5,.1,0,1.1,-.34,i.materials.wood,s);for(const r of[-1,1])i.addBox(.14,.62,.65,r*1.05,.31,0,i.materials.darkWood,s);i.colliders.push({x:t,z:e,halfWidth:1.4,halfDepth:.4,rotation:n})}function n_(i){const t=i.materials.grass.map.clone();t.repeat.set(28,28);const e=new le({map:t,color:8557657,roughness:1,vertexColors:!0}),n=new Ct,s=(a,o,l,c,h=!1)=>{const u=new we(a,a,o,o);u.rotateX(-Math.PI/2);const d=u.attributes.position,f=[];for(let _=0;_<d.count;_++){const g=d.getX(_)+l,p=d.getZ(_)+c;d.setXYZ(_,g,Ye(g,p),p),n.setHSL(.22+Ge(g*.014,p*.014)*.025,.32,.58+Ge(g*.08,p*.08)*.2),f.push(n.r,n.g,n.b)}if(h){const _=u.index.array,g=[];for(let p=0;p<_.length;p+=3){const M=(d.getX(_[p])+d.getX(_[p+1])+d.getX(_[p+2]))/3,b=(d.getZ(_[p])+d.getZ(_[p+1])+d.getZ(_[p+2]))/3;(Math.abs(M)>=360||Math.abs(b)>=360)&&g.push(_[p],_[p+1],_[p+2])}u.setIndex(g)}u.setAttribute("color",new qt(f,3)),u.computeVertexNormals();const m=new Nt(u,e);m.receiveShadow=!0,i.scene.add(m)};for(let a=-240;a<=240;a+=240)for(let o=-240;o<=240;o+=240)s(240,240,o,a);s(2400,240,0,0,!0);const r=Object.fromEntries(Object.keys(Ah).map(a=>{const o=Q0(a,i);return[a,new le({map:o,roughness:.94,bumpMap:o,bumpScale:a==="soil"?.22:.07})]}));for(const a of Hs){const o=new we(58,52);o.rotateX(-Math.PI/2);const l=new Nt(o,r[a.kind]);l.position.set(a.x1+29,a.y+.025,a.z1+26),l.receiveShadow=!0,i.scene.add(l)}for(let a=0;a<3;a++){const o=new we(2600,160,200,1),l=o.attributes.position;for(let h=0;h<l.count;h++)l.setY(h,l.getY(h)>0?60+a*16+Ge(l.getX(h)*.007,a+2)*85:-25);const c=new Nt(o,new us({color:[5799555,7575455,9877956][a],side:ce}));c.position.z=-750-a*190,i.scene.add(c)}}function i_(i){const t=i.materials.path.clone();t.color.set(12629911);const e=new le({color:8559435,roughness:1}),n=(r,a=3.7)=>{i.ribbon(r,a+1.5,e,.06),i.ribbon(r,a,t,.14)};for(let r=0;r<=10;r++){const a=-330+r*66,o=[];for(let l=-338;l<=222;l+=2)o.push([a,l]);n(o,r===5||r===10?4.6:3.3)}for(let r=0;r<=9;r++){const a=-320+r*60,o=[];for(let l=-338;l<=338;l+=2)o.push([l,a]);n(o,r===4||r===9?4.6:3.3)}for(const r of[-1,1]){const a=[];for(let o=0;o<=130;o++){const l=o/130;a.push([r*330*l,310-90*l+15*Math.sin(l*Math.PI*2)])}n(a,3)}const s=[];for(let r=220;r<=344;r++)s.push([0,r]);n(s,3.5)}function s_(i){i.windUniform={value:0},i.windStrength={value:1},i.cropTiles=[];const t=new we(1.3,1,1,3);t.translate(0,.5,0);const e=new Map;for(const o of["wheat","green","flowers"]){const l=new le({map:t_(o,i),alphaTest:.42,side:ce,roughness:.95});l.onBeforeCompile=c=>{c.uniforms.uWind=i.windUniform,c.uniforms.uStrength=i.windStrength,c.vertexShader=`uniform float uWind; uniform float uStrength;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 root = instanceMatrix * vec4(0.,0.,0.,1.);
        transformed.x += sin(uWind * 1.3 + root.x * .17 + root.z * .12) * position.y * position.y * .13 * uStrength;`)},e.set(o,l)}const n=new he,s=new Ct;for(const o of Hs){if(o.kind==="soil")continue;const l=o.kind==="water"?"green":o.kind,c=o.kind==="water"?2.1:1.45,h=[];for(let f=o.z1+.8;f<o.z2-.7;f+=c)for(let m=o.x1+.8;m<o.x2-.7;m+=c)h.push([m,f]);const u=new ln(t,e.get(l),h.length*2);let d=0;for(const[f,m]of h)for(let _=0;_<2;_++)n.position.set(f+me(-.12,.12),o.y+.04,m+me(-.12,.12)),n.rotation.set(0,_*Math.PI/2+.12,0),n.scale.set(1,(o.kind==="water"?.3:l==="flowers"?1.15:.85)*me(.8,1.15),1),n.updateMatrix(),u.setMatrixAt(d,n.matrix),s.setRGB(me(.86,1),me(.91,1),me(.8,.97)),u.setColorAt(d++,s);u.receiveShadow=!0,u.computeBoundingSphere(),u.boundingSphere.radius+=.3,u.userData.center=new _t(o.x1+29,o.z1+26),i.scene.add(u),i.cropTiles.push(u)}const r=Hs.filter(o=>o.kind==="water").map(o=>{const l=new we(58,52);return l.rotateX(-Math.PI/2),l.translate(o.x1+29,o.y+.08,o.z1+26),l}),a=i.texture("normal",512);a.repeat.set(28,28),i.water=new Nt(Vs(r),new le({color:7510170,metalness:.55,roughness:.23,normalMap:a,normalScale:new _t(.045,.045),envMapIntensity:1.3})),i.water.receiveShadow=!0,i.scene.add(i.water),r.forEach(o=>o.dispose())}function r_(i){const t=Ps(!0),e=Ps(),n=new Qi({map:t,alphaTest:.42,side:ce,color:11190414}),s=new Qi({map:e,alphaTest:.4,side:ce,color:11979928}),r=new we(1,1);r.translate(0,.5,0);const a=new Map,o=[],l=(f,m,_,g=!1,p=!1)=>{const M=`${Math.floor(f/100)},${Math.floor(m/100)}`;a.has(M)||a.set(M,[]),a.get(M).push({x:f,z:m,h:_,narrow:g}),p&&(o.push({x:f,z:m,h:_,narrow:g}),i.colliders.push({x:f,z:m,r:.32}))};for(let f=-650;f<640;f+=13)for(let m=-700;m<700;m+=13)Math.abs(m)<365&&f>-355&&f<352||Ls()<.15||l(m+me(-4,4),f+me(-4,4),me(8,19));for(let f=-302;f<=215;f+=19)l(338,f,me(14,19),!0,!0);for(let f=-315;f<=315;f+=26)Math.abs(f)<28||l(f,335+Math.sin(f*.02)*5,me(9,14),!1,!0);for(const[f,m]of[[-228,-183],[170,9],[37,-282]])for(let _=0;_<7;_++)l(f-21+_*6,m+23,me(8,12),!1,!0);const c=new he;for(const f of a.values()){const m=new ln(r,n,f.length*3);let _=0;for(const g of f)for(let p=0;p<3;p++)c.position.set(g.x,Ye(g.x,g.z),g.z),c.rotation.set(0,p*Math.PI/3,0),c.scale.set(g.h*(g.narrow?.36:.83),g.h,1),c.updateMatrix(),m.setMatrixAt(_++,c.matrix);m.castShadow=m.receiveShadow=!0,m.computeBoundingSphere(),i.scene.add(m)}const h=new ln(new Rn(.15,.28,1,8),i.materials.wood,o.length),u=new ln(new we(1,1),s,o.length*16);let d=0;o.forEach((f,m)=>{const _=Ye(f.x,f.z);c.position.set(f.x,_+f.h*.27,f.z),c.rotation.set(0,0,0),c.scale.set(1,f.h*.54,1),c.updateMatrix(),h.setMatrixAt(m,c.matrix);for(let g=0;g<16;g++){const p=g*2.4,M=f.h*(f.narrow?.08:.18);c.position.set(f.x+Math.cos(p)*M,_+f.h*me(.5,.88),f.z+Math.sin(p)*M),c.rotation.set(me(-.7,.7),p,me(-.5,.5)),c.scale.setScalar(f.h*(f.narrow?.23:.35)),c.updateMatrix(),u.setMatrixAt(d++,c.matrix)}}),h.castShadow=h.receiveShadow=u.castShadow=u.receiveShadow=!0,i.scene.add(h,u)}function a_(i){for(const[d,f,m,_,g]of[[-225,-178,12,8,.06],[-190,-177,10,7,-.09],[169,8,12,8,0],[214,6,10,8,.1],[39,-285,12,9,0]])i.house(d,f,m,_,g);const t=new le({color:8801084,roughness:.85}),e=new le({color:12765112,roughness:.55,metalness:.3});for(const[d,f]of[[-245,-170],[237,13],[44,-232]]){const m=Ye(d,f);i.addBox(11,4,7,d,m+2,f,t),i.addBox(12,.25,8.2,d,m+4.2,f,e).rotation.z=.08,i.addBox(3,3.2,.08,d,m+1.6,f+3.55,i.materials.darkWood),i.colliders.push({x:d,z:f,halfWidth:5.6,halfDepth:3.6,rotation:0});const _=new Nt(new Rn(2,2,7,20),e);_.position.set(d+9,m+3.5,f),_.castShadow=!0,i.scene.add(_);const g=new Nt(new tl(2.1,1.6,20),e);g.position.set(d+9,m+7.8,f),g.castShadow=!0,i.scene.add(g),i.colliders.push({x:d+9,z:f,r:2.1})}const n=new le({color:14806245,roughness:.38,metalness:.08,transparent:!0,opacity:.64,side:ce,depthWrite:!1});for(const d of[-198,-187,-176]){const m=Ye(d,-155),_=new Rn(3.5,3.5,16,24,1,!0,-Math.PI/2,Math.PI);_.rotateX(-Math.PI/2);const g=new Nt(_,n);g.position.set(d,m+.1,-155),i.scene.add(g);for(let p=-8;p<=8;p+=2){const M=[];for(let b=0;b<=24;b++){const v=b/24*Math.PI;M.push(new D(d+Math.cos(v)*3.52,m+.12+Math.sin(v)*3.52,-155+p))}i.scene.add(new ch(new ve().setFromPoints(M),new Zo({color:10004897})))}i.colliders.push({x:d,z:-155,halfWidth:3.55,halfDepth:8.1,rotation:0})}const s=new le({color:13151073,map:i.materials.roof.map,roughness:1});for(let d=0;d<12;d++){const f=-308+d%4*6,m=-247+Math.floor(d/4)*5,_=new Nt(new Rn(.95,.95,1.5,16),s);_.rotation.z=Math.PI/2,_.position.set(f,Ye(f,m)+.95,m),_.castShadow=!0,i.scene.add(_),i.colliders.push({x:f,z:m,r:1})}const r=new Le,a=Ye(195,18);r.position.set(195,a,18),i.scene.add(r);const o=new le({color:4485963,roughness:.55});i.addBox(1.45,.75,2.7,0,1.2,0,o,r),i.addBox(1.7,.12,1.7,0,2.6,-.65,o,r);for(const d of[-1,1]){i.addBox(.08,1.4,.08,d*.68,1.9,-.9,e,r);for(const f of[-.85,1]){const m=f<0?.72:.45,_=new Nt(new Rn(m,m,.38,16),i.materials.darkWood);_.rotation.z=Math.PI/2,_.position.set(d*.88,m,f),_.castShadow=!0,r.add(_)}}i.colliders.push({x:195,z:18,halfWidth:1.2,halfDepth:1.7,rotation:0});const l=-215,c=-204,h=Ye(l,c);i.addBox(3.2,.2,1.4,l,h+.95,c,i.materials.wood);for(const d of[-1.4,1.4])i.addBox(.12,2.4,.12,l+d,h+1.2,c,i.materials.wood);i.addBox(3.7,.16,2,l,h+2.5,c,o).rotation.x=.1,i.colliders.push({x:l,z:c,halfWidth:1.9,halfDepth:1,rotation:0});const u=new le({color:13281342,roughness:.8});for(let d=0;d<12;d++){const f=new Nt(new Kn(.13,10,8),u);f.position.set(l-1.1+d%6*.4,h+1.16,c-.25+Math.floor(d/6)*.5),i.scene.add(f)}}function o_(i){Sr(i,6,314,"はるか野の丘","PATCHWORK COUNTRYSIDE  /  696 × 696 m"),Sr(i,-257,34,"黄金の麦畑","風の音を聴きながら、ひと休み。"),Sr(i,-220,-207,"畑の直売所","丘の展望台  ↑  /  並木道  →"),Sr(i,204,98,"夏の花畑","花畑の先に、ポプラの並木。");for(const[t,e,n]of[[-7,310,Math.PI],[22,308,Math.PI],[-258,44,0],[324,95,-Math.PI/2],[194,104,0]])e_(i,t,e,n);for(let t=-45;t<=45;t+=3){if(Math.abs(t)<4)continue;const e=Ye(t,321);if(i.addBox(.12,1.05,.12,t,e+.525,321,i.materials.wood),t<45&&Math.abs(t+1.5)>4)for(const n of[.45,.88])i.addBox(3,.08,.09,t+1.5,Ye(t+1.5,321)+n,321,i.materials.wood);i.colliders.push({x:t+1.5,z:321,halfWidth:1.5,halfDepth:.1,rotation:0})}}function l_(i){Cr=518293,n_(i),i_(i),s_(i),r_(i),a_(i),o_(i),Eh(i);for(let t=0;t<18;t++){const e=i.clouds[t%14],n=e.clone();n.material=e.material.clone();const s=t/18*Math.PI*2;n.position.set(Math.cos(s)*1050,me(190,340),Math.sin(s)*1050),n.scale.set(me(140,250),me(65,100),1),i.scene.add(n),i.clouds.push(n)}i.life={update(){},canEnter:()=>!0},i.updateLandscape=()=>{if((i.navigationElapsed??0)-(i.lastCropUpdate??-1)<.25)return;i.lastCropUpdate=i.navigationElapsed??0;const t=i.quality==="ultra"?230:i.quality==="low"?115:175,{x:e,z:n}=i.camera.position;for(const s of i.cropTiles)s.visible=Math.hypot(e-s.userData.center.x,n-s.userData.center.y)<t+40}}let Oa=1938;const gn=()=>(Oa=Oa*1664525+1013904223>>>0,Oa/4294967296),Vt=(i,t)=>i+gn()*(t-i),Pr=Te.clamp,c_=i=>(i=Pr(i,0,1),i*i*(3-2*i)),Rh=[{name:"水田を望む小径",subtitle:"水面に映る空と、稲を渡る風。",position:[13.45,cn(13.45,18)+1.97,18],look:[-12,7,-65],map:[82,94]},{name:"茅葺きの集落",subtitle:"懐かしい屋根の下に流れる、穏やかな時間。",position:[-4,zs(-4,-29)+1.7,-29],look:[-21,4.3,-58],map:[76,49]},{name:"杉林の木陰",subtitle:"木漏れ日の中で、深呼吸をひとつ。",position:[57,zs(57,-34)+1.7,-34],look:[40,9,-76],map:[141,47]}];class h_{constructor(t,e={},n="satoyama"){this.mapId=n==="plains"?"plains":"satoyama",this.isPlains=this.mapId==="plains",this.groundHeight=this.isPlains?Ye:cn,this.surfaceHeight=this.isPlains?wh:zs,this.spots=this.isPlains?vi:Rh,this.bounds=this.isPlains?Do:{minX:-116,maxX:116,minZ:-106,maxZ:126},this.container=t,this.callbacks=e,this.mobile=matchMedia("(max-width: 760px)").matches,this.motionPreference=matchMedia("(prefers-reduced-motion: reduce)"),this.scene=new Cd,this.scene.fog=new jo(12178378,.0018),this.camera=new Qe(this.mobile?64:59,1,.15,1800),this.camera.rotation.order="YXZ",this.camera.position.fromArray(this.spots[0].position),this.camera.lookAt(...this.spots[0].look),this.yaw=this.camera.rotation.y,this.pitch=this.camera.rotation.x,this.renderer=new D0({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Nc,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.toneMapping=zr,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=De,this.renderer.domElement.setAttribute("aria-label",this.isPlains?"広大な田園、麦畑と水田、農家と並木道。ドラッグで見渡し、WASDまたはスティックで移動。":"3Dの田んぼ、茅葺きの家、山々。ドラッグで視点を動かせます。"),this.renderer.domElement.tabIndex=0,t.append(this.renderer.domElement),this.walking=!1,this.paused=!1,this.keys=new Set,this.joy={x:0,y:0},this.speed=this.isPlains?6:4,this.travelMode="walk",this.wind=1,this.elapsed=0,this.timeOfDay="day",this.quality="hdr",this.staticMeshes=[],this.colliders=[],this.birds=[],this.materials={},this.buildLights(),this.buildTextures(),this.isPlains?l_(this):(this.buildTerrain(),this.buildWater(),this.buildPaths(),this.buildVillage(),this.buildForest(),this.buildRice(),this.buildDetails(),this.buildClouds(),this.life=new Z0(this)),this.mergeStaticMeshes(),this.lighting=new q0(this),this.setTime("day"),this.bindControls(),this.resize(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.clock=new gh,this.renderer.setAnimationLoop(()=>this.tick())}texture(t,e=512){const n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d"),r={grass:"#626d2c",path:"#a9a58b",roof:"#7c7256",wood:"#504c37",plaster:"#d5cfb4",leaf:"#72864a",normal:"#8080ff"}[t];if(s.fillStyle=r,s.fillRect(0,0,e,e),t==="normal"){const o=s.getImageData(0,0,e,e);for(let l=0;l<e;l++)for(let c=0;c<e;c++){const h=(l*e+c)*4;o.data[h]=128+22*Math.sin(c*.16+Math.sin(l*.05)*3),o.data[h+1]=128+22*Math.cos(l*.19+Math.cos(c*.04)*3),o.data[h+2]=248}s.putImageData(o,0,0)}else{const o=t==="roof"?24e3:33e3;for(let l=0;l<o;l++){const c=gn()*e,h=gn()*e,u=Vt(-35,38);if(t==="roof")s.strokeStyle=`rgba(${135+u},${123+u},${91+u},${Vt(.3,.8)})`,s.lineWidth=Vt(.3,1.5),s.beginPath(),s.moveTo(c,h),s.lineTo(c+Vt(-2,2),h+Vt(5,33)),s.stroke();else if(t==="wood")s.fillStyle=`rgba(${90+u},${85+u},${65+u},.3)`,s.fillRect(c,h,Vt(.5,2),Vt(10,100));else{const d=t==="grass"?[103,115,51]:t==="path"?[175,170,143]:t==="leaf"?[113,139,68]:[216,211,187];s.fillStyle=`rgba(${d[0]+u},${d[1]+u},${d[2]+u},${Vt(.15,.7)})`,s.beginPath(),s.ellipse(c,h,Vt(.5,t==="leaf"?5:2.5),Vt(.5,3.5),gn()*6,0,7),s.fill()}}}const a=new Jo(n);return a.wrapS=a.wrapT=xi,a.colorSpace=t==="normal"?zn:De,a.anisotropy=Math.min(16,this.renderer.capabilities.getMaxAnisotropy()),a}buildTextures(){for(const e of["grass","path","roof","wood","plaster","leaf"]){const n=this.texture(e);this.materials[e]=new le({map:n,roughness:e==="leaf"?.88:1,bumpMap:n,bumpScale:e==="roof"?.3:.1})}const t=new fh;for(const[e,n]of[["grass","grass.jpg"],["path","gravel.jpg"]]){const s=t.load(`/inaka/docs/textures/${n}`,()=>{this.renderer.shadowMap.needsUpdate=!0});s.wrapS=s.wrapT=xi,s.colorSpace=De,s.anisotropy=Math.min(16,this.renderer.capabilities.getMaxAnisotropy()),this.materials[e].map=s,this.materials[e].bumpMap=s,this.materials[e].bumpScale=e==="path"?.16:.1}this.materials.grass.map.repeat.set(75,75),this.materials.darkWood=new le({color:3684137,roughness:.97,map:this.materials.wood.map}),this.materials.stone=new le({color:8750197,roughness:1}),this.materials.glass=new le({color:5594184,metalness:.35,roughness:.24})}buildLights(){this.hemi=new Xd(14019071,4545324,.65),this.scene.add(this.hemi),this.sun=new mh(16773841,3.5),this.sun.position.set(-70,110,35),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-78,right:78,top:78,bottom:-78,near:1,far:350}),this.sun.shadow.normalBias=.05,this.sun.shadow.bias=-25e-5,this.sun.shadow.radius=3,this.sun.target.position.set(0,0,-30),this.scene.add(this.sun,this.sun.target),this.sky=new Vr,this.sky.scale.setScalar(1500),this.scene.add(this.sky);const t=this.sky.material.uniforms;t.turbidity.value=2.6,t.rayleigh.value=1.15,t.mieCoefficient.value=.004,t.mieDirectionalG.value=.78,this.sunDirection=this.sun.position.clone().sub(this.sun.target.position).normalize(),t.sunPosition.value.copy(this.sunDirection);const e=new Or(this.renderer);this.environment=e.fromScene(this.sky,.08,.1,1600),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.4,e.dispose()}addBox(t,e,n,s,r,a,o,l=this.scene){const c=new Nt(new dn(t,e,n),o);return c.position.set(s,r,a),c.castShadow=!0,c.receiveShadow=!0,l.add(c),this.staticMeshes.push(c),c}buildTerrain(){Y0(this)}buildWater(){const t=this.texture("normal",256);t.repeat.set(35,35);const e=new Hd({color:6847316,roughness:.17,metalness:0,ior:1.333,transmission:.58,thickness:.11,attenuationColor:8750420,attenuationDistance:.8,normalMap:t,normalScale:new _t(.055,.055),clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1.1});this.water=new Nt($0(),e),this.water.rotation.x=-Math.PI/2,this.water.receiveShadow=!0,this.scene.add(this.water)}pathX(t){return 10+4.5*Math.sin(t*.019)+2*Math.sin(t*.055)}ribbon(t,e,n,s=.22){const r=[],a=[],o=[];let l=0;for(let u=0;u<t.length;u++){const d=t[Math.max(0,u-1)],f=t[Math.min(t.length-1,u+1)],m=t[u],_=f[0]-d[0],g=f[1]-d[1],p=Math.hypot(_,g);u&&(l+=Math.hypot(m[0]-t[u-1][0],m[1]-t[u-1][1]));for(const M of[-1,1]){const b=m[0]-g/p*e/2*M,v=m[1]+_/p*e/2*M;r.push(b,s+this.groundHeight(b,v),v),a.push((M+1)/2,l/4)}if(u<t.length-1){const M=u*2;o.push(M,M+1,M+2,M+1,M+3,M+2)}}const c=new ve;c.setAttribute("position",new qt(r,3)),c.setAttribute("uv",new qt(a,2)),c.setIndex(o),c.computeVertexNormals();const h=new Nt(c,n);return h.receiveShadow=!0,this.scene.add(h),h}buildPaths(){const t=[],e=[];for(let r=126;r>=-106;r-=1)t.push([this.pathX(r),r]);const n=new le({color:7308611,roughness:1,map:this.materials.grass.map});this.ribbon(t,4.7,n,.14),this.ribbon(t,2.75,this.materials.path,.24);const s=this.materials.path.clone();s.color.set(9869195);for(let r=-111;r<=111;r+=1)e.push([r,-29+1.3*Math.sin(r*.04)]);this.ribbon(e,4.6,n,.13),this.ribbon(e,3.3,s,.24);for(const r of Si){const a=[];for(let o=r.x1;o<=r.x2;o+=1)a.push([o,r.z2+1]);this.ribbon(a,1.05,n,.12)}for(let r=0;r<13;r++){const a=3.5+r*.23;this.addBox(3,.11,.21,this.pathX(a),this.groundHeight(this.pathX(a),a)+.3,a,this.materials.wood)}}roof(t,e,n,s,r){const a=[-t,n,e],o=[t,n,e],l=[t,n,-e],c=[-t,n,-e],h=[0,s,e*.44],u=[0,s,-e*.44],d=[[a,o,h],[o,l,u,h],[l,c,u],[c,a,h,u]],f=[],m=[],_=[];for(const b of d){const v=f.length/3;b.forEach((A,T)=>{f.push(...A),m.push(T===0||T===3?0:1,T<2?0:1)}),_.push(v,v+1,v+2),b.length===4&&_.push(v,v+2,v+3)}const g=new ve;g.setAttribute("position",new qt(f,3)),g.setAttribute("uv",new qt(m,2)),g.setIndex(_),g.computeVertexNormals();const p=this.materials.roof;p.side=ce,p.shadowSide=ce;const M=new Nt(g,p);M.castShadow=!0,M.receiveShadow=!0,r.add(M),this.staticMeshes.push(M),this.addBox(t*2,.48,.35,0,n-.12,e,this.materials.roof,r),this.addBox(t*2,.48,.35,0,n-.12,-e,this.materials.roof,r),this.addBox(.35,.48,e*2,-t,n-.12,0,this.materials.roof,r),this.addBox(.35,.48,e*2,t,n-.12,0,this.materials.roof,r),this.addBox(.64,.43,e*.94,0,s,0,this.materials.darkWood,r);for(let b=-e*.42;b<=e*.42;b+=.8)this.addBox(.92,.16,.18,0,s+.25,b,this.materials.wood,r)}house(t,e,n=11,s=8,r=0){const a=new Le;a.position.set(t,Math.max(this.groundHeight(t,e),0),e),a.rotation.y=r,this.scene.add(a),a.name="民家",this.colliders.push({x:t,z:e,r:Math.hypot(n/2,s/2+1.65),halfWidth:n/2+.35,halfDepth:s/2+1.65,rotation:r}),this.addBox(n+.7,.55,s+.65,0,.2,0,this.materials.stone,a),this.addBox(n,3.1,s,0,1.9,0,this.materials.plaster,a),this.addBox(n,1.35,s+.07,0,1,0,this.materials.wood,a),this.roof(n*.64,s*.69,3.7,8.9,a);for(let h=-n/2;h<=n/2;h+=n/6)this.addBox(.18,3.4,.18,h,1.85,s/2+.09,this.materials.darkWood,a),this.addBox(.18,3.4,.18,h,1.85,-s/2-.09,this.materials.darkWood,a);for(const h of[.5,1.65,3.2])this.addBox(n+.15,.15,s+.18,0,h,0,this.materials.darkWood,a);for(const h of[-n*.31,n*.29]){this.addBox(n*.23,1.38,.04,h,2.36,s/2+.07,this.materials.glass,a);for(let u=-2;u<=2;u++)this.addBox(.055,1.44,.075,h+u*n*.043,2.36,s/2+.11,this.materials.wood,a);this.addBox(n*.24,.06,.1,h,2.35,s/2+.13,this.materials.wood,a)}this.addBox(1.5,2.45,.13,0,1.7,s/2+.1,this.materials.darkWood,a);for(let h=-3;h<=3;h++)this.addBox(.055,2.2,.16,h*.19,1.7,s/2+.18,this.materials.wood,a);this.addBox(n*.75,.16,1.15,0,.53,s/2+.6,this.materials.wood,a),this.addBox(1.8,.25,.65,0,.24,s/2+1.3,this.materials.stone,a);const o=h=>s*.69*(1-.56*(h-3.7)/(8.9-3.7))+.035,l=new ve;l.setAttribute("position",new qt([-1.05,6.3,o(6.3),1.05,6.3,o(6.3),0,7.9,o(7.9)],3)),l.computeVertexNormals();const c=new Nt(l,this.materials.darkWood);c.castShadow=c.receiveShadow=!0,a.add(c),this.staticMeshes.push(c);for(let h=-2;h<=2;h++){const d=this.addBox(.065,.57,.065,h*.25,6.62,o(6.62)+.045,this.materials.wood,a);d.rotation.x=-Math.atan(s*.69*.56/5.2)}}buildVillage(){for(const[s,r,a,o,l]of[[-26,-64,13,9,-.08],[10,-81,10,8,.03],[49,-65,12,8,-.2],[-63,-76,11,9,.12],[82,-83,9,7,-.13],[-88,-51,8,6,.17]])this.house(s,r,a,o,l);const t=this.groundHeight(-46,-57);this.addBox(5,2.1,4,-46,t+1.05,-57,this.materials.wood),this.colliders.push({x:-46,z:-57,halfWidth:2.5,halfDepth:2,rotation:0,r:Math.hypot(2.5,2)});const e=this.addBox(5.8,.22,5,-46,t+2.5,-57,this.materials.darkWood);e.rotation.z=.11;const n=new le({color:6902844,roughness:1});for(let s=0;s<5;s++){const r=-50+s*1.4;this.addBox(13,.12,.65,-59,this.groundHeight(-59,r)+.12,r,n)}for(let s=-67;s<-49;s+=1.5)this.addBox(.12,.9,.12,s,this.groundHeight(s,-28)+.5,-28,this.materials.wood)}buildForest(){j0(this)}buildRice(){const t=new ve;t.setAttribute("position",new qt([-.045,0,0,.045,0,0,-.029,.44,.025,.029,.44,.025,-.012,.83,.12,.012,.83,.12,.01,1.04,.27],3)),t.setAttribute("uv",new qt([0,0,1,0,0,.44,1,.44,0,.83,1,.83,.5,1],2)),t.setIndex([0,1,2,1,3,2,2,3,4,3,5,4,4,5,6]),t.computeVertexNormals();const e=new le({color:15265714,side:ce,roughness:.86});this.windUniform={value:0},this.windStrength={value:1};const n=u=>{u.uniforms.uWind=this.windUniform,u.uniforms.uStrength=this.windStrength,u.vertexShader=`uniform float uWind; uniform float uStrength; varying float vHeight;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vHeight = position.y;
        vec4 root = instanceMatrix * vec4(0.,0.,0.,1.);
        transformed.x += sin(uWind * 1.4 + root.x*.4 + root.z*.18) * position.y * position.y * .15 * uStrength;
        transformed.z += cos(uWind + root.x*.22 + root.z*.24) * position.y * position.y * .08 * uStrength;`)};e.onBeforeCompile=u=>{n(u),u.fragmentShader=`varying float vHeight;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= mix(vec3(.38,.55,.2), vec3(1.15,1.13,.73), smoothstep(0.,.95,vHeight));`)};const s=new dh({depthPacking:jc,side:ce});s.onBeforeCompile=n,s.customProgramCacheKey=()=>"rice-wind-depth-v1",e.shadowSide=ce;const r=[],a=.64;for(const u of Si)for(let d=u.z1+.35;d<u.z2-.35;d+=a)for(let f=u.x1+.35;f<u.x2-.35;f+=a){if(Math.abs(f-this.pathX(d))<2.3)continue;const m=u.young;m&&(Math.round(f/a)%2||Math.round(d/a)%2)||r.push({x:f+Vt(-.07,.07),z:d+Vt(-.07,.07),y:u.y+.005,height:m?Vt(.28,.42):Vt(.72,1.02)})}const o=5,l=new Map;for(const u of r){const d=`${Math.floor(u.x/22)},${Math.floor(u.z/22)}`;l.has(d)||l.set(d,[]),l.get(d).push(u)}this.rice=new Le,this.rice.userData.bladeCount=r.length*o;const c=new he,h=new Ct;for(const u of l.values()){const d=new ln(t,e,u.length*o);let f=0;for(const m of u)for(let _=0;_<o;_++)c.position.set(m.x+Vt(-.085,.085),m.y,m.z+Vt(-.085,.085)),c.rotation.set(Vt(-.22,.22),gn()*Math.PI*2,Vt(-.26,.26)),c.scale.set(Vt(1,1.7),m.height*Vt(.8,1.1),1),c.updateMatrix(),d.setMatrixAt(f,c.matrix),h.setHSL(Vt(.195,.245),Vt(.46,.64),Vt(.36,.49)),d.setColorAt(f++,h);d.castShadow=d.receiveShadow=!0,d.customDepthMaterial=s,d.computeBoundingSphere(),d.boundingSphere.radius+=.5,this.rice.add(d)}this.scene.add(this.rice)}buildDetails(){const t=new he,e=new Ct,n=new ln(new Fr(1,0),this.materials.stone,620);for(let c=0;c<620;c++){const h=Vt(-64,127),u=this.pathX(h)+(gn()>.5?1:-1)*Vt(1.6,2.3);t.position.set(u,this.groundHeight(u,h)+Vt(.12,.23),h),t.scale.set(Vt(.04,.18),Vt(.04,.13),Vt(.05,.19)),t.rotation.set(gn()*3,gn()*3,gn()*3),t.updateMatrix(),n.setMatrixAt(c,t.matrix),e.setHSL(.13,.07,Vt(.34,.6)),n.setColorAt(c,e)}n.receiveShadow=!0,this.scene.add(n);const s=new we(.07,.55);s.translate(0,.275,0);const r=new ln(s,new le({color:7244593,side:ce,roughness:1}),8e3),a=new ln(new Fr(.045,0),new le({color:16051921,roughness:1}),700);for(let c=0;c<8e3;c++){const h=Vt(-64,130),u=this.pathX(h)+(gn()>.5?1:-1)*Vt(1.55,2.34);t.position.set(u,this.groundHeight(u,h)+.17,h),t.rotation.set(Vt(-.4,.4),Vt(0,6.2),Vt(-.45,.45)),t.scale.setScalar(Vt(.45,1.2)),t.updateMatrix(),r.setMatrixAt(c,t.matrix),c<700&&(t.position.y+=Vt(.2,.4),t.scale.setScalar(Vt(.6,1.3)),t.updateMatrix(),a.setMatrixAt(c,t.matrix))}this.scene.add(r,a);const o=this.groundHeight(30,-26);this.colliders.push({x:30,z:-26,halfWidth:1.3,halfDepth:.37,rotation:0,r:Math.hypot(1.3,.37)}),this.addBox(2.6,.13,.7,30,o+.65,-26,this.materials.wood),this.addBox(2.6,.35,.1,30,o+1.12,-26.32,this.materials.wood);for(const c of[29.1,30.9])this.addBox(.16,.64,.55,c,o+.32,-26,this.materials.darkWood);const l=new us({color:4018501,side:ce});for(let c=0;c<7;c++){const h=new Le;for(const u of[-1,1]){const d=new ve;d.setAttribute("position",new qt([0,0,0,u*.55,.1,.12,u*.25,0,-.17],3)),d.computeVertexNormals();const f=new Nt(d,l);h.add(f)}h.userData={offset:gn()*Math.PI*2,radius:Vt(22,40),height:Vt(17,27)},this.birds.push(h),this.scene.add(h)}}buildClouds(){Eh(this)}mergeStaticMeshes(){this.scene.updateMatrixWorld(!0);const t=new Map;for(const e of this.staticMeshes){const n=e.material.uuid;t.has(n)||t.set(n,{material:e.material,geometries:[]});let s=e.geometry.clone().applyMatrix4(e.matrixWorld);s.index&&(s=s.toNonIndexed()),s.deleteAttribute("normal"),s.computeVertexNormals(),s.attributes.uv||s.setAttribute("uv",new $e(new Float32Array(s.attributes.position.count*2),2)),t.get(n).geometries.push(s),e.removeFromParent(),e.geometry.dispose()}for(const{material:e,geometries:n}of t.values()){const s=Vs(n),r=new Nt(s,e);r.castShadow=r.receiveShadow=!0,this.scene.add(r),n.forEach(a=>a.dispose())}this.staticMeshes=[]}bindControls(){const t=this.renderer.domElement;let e=null;t.addEventListener("pointerdown",s=>{this.paused||e||s.button!==0||(t.focus({preventScroll:!0}),e={id:s.pointerId,x:s.clientX,y:s.clientY},t.setPointerCapture(s.pointerId),t.style.cursor="grabbing")}),t.addEventListener("pointermove",s=>{!e||e.id!==s.pointerId||this.paused||(this.transition=null,this.yaw-=(s.clientX-e.x)*.003*(this.sensitivity??.8),this.pitch=Pr(this.pitch-(s.clientY-e.y)*.0024*(this.sensitivity??.8),-1.18,1.1),e.x=s.clientX,e.y=s.clientY)});const n=s=>{if(s&&s.pointerId!==(e==null?void 0:e.id))return;const r=e==null?void 0:e.id;e=null,t.style.cursor="grab",r!=null&&t.hasPointerCapture(r)&&t.releasePointerCapture(r)};this.releaseDrag=n;for(const s of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(s,n);t.style.cursor="grab",window.addEventListener("keydown",s=>{var r,a;this.paused||s.ctrlKey||s.metaKey||s.altKey||s.isComposing||s.target.isContentEditable||(a=(r=s.target).closest)!=null&&a.call(r,"input,button,a,select,textarea")||["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(s.code)&&(s.preventDefault(),this.walking||this.setWalking(!0),this.transition=null,this.keys.add(s.code))}),window.addEventListener("keyup",s=>this.keys.delete(s.code)),document.addEventListener("focusin",s=>{var r,a;(s.target.isContentEditable||(a=(r=s.target).closest)!=null&&a.call(r,"input,button,a,select,textarea"))&&this.resetInput()}),window.addEventListener("blur",()=>this.resetInput()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.resetInput()}),t.addEventListener("webglcontextlost",s=>{var r,a;s.preventDefault(),(a=(r=this.callbacks).onError)==null||a.call(r,"グラフィックの接続が中断されました。ページを再読み込みしてください。")})}resetInput(){var t;this.keys.clear(),this.joy.x=this.joy.y=0,(t=this.releaseDrag)==null||t.call(this)}setWalking(t){var e,n;this.walking=t,this.resetInput(),(n=(e=this.callbacks).onWalking)==null||n.call(e,t),t?this.transition={start:this.camera.position.clone(),end:new D(this.camera.position.x,this.surfaceHeight(this.camera.position.x,this.camera.position.z)+1.7,this.camera.position.z),startYaw:this.yaw,endYaw:this.yaw,startPitch:this.pitch,endPitch:0,elapsed:0,duration:1.5}:this.goTo(0,!1)}goTo(t,e=this.walking){var o,l;const n=this.spots[t];if(!n)return;const s=new D().fromArray(n.position);e&&(s.y=this.surfaceHeight(s.x,s.z)+1.7);const r=new Qe;r.rotation.order="YXZ",r.position.copy(s),r.lookAt(...n.look);let a=r.rotation.y;for(;a-this.yaw>Math.PI;)a-=Math.PI*2;for(;a-this.yaw<-Math.PI;)a+=Math.PI*2;this.transition={start:this.camera.position.clone(),end:s,startYaw:this.yaw,endYaw:a,startPitch:this.pitch,endPitch:r.rotation.x,elapsed:0,duration:2},(l=(o=this.callbacks).onSpot)==null||l.call(o,t)}setTime(t){var r,a;this.timeOfDay=t;const e={morning:{sun:[-95,35,-10],color:16772304,intensity:2.8,hemi:.65,fog:13162958,density:.0038,exposure:1.03,sky:2.8},day:{sun:[-70,110,35],color:16773841,intensity:3.5,hemi:.65,fog:12833730,density:.0025,exposure:1.12,sky:2.6},evening:{sun:[-130,21,30],color:16757854,intensity:3.2,hemi:.4,fog:14268046,density:.0032,exposure:1.05,sky:7}}[t];this.sun.position.fromArray(e.sun),this.sun.color.set(e.color),this.sun.intensity=e.intensity,this.hemi.intensity=e.hemi,this.hemi.color.set(t==="evening"?14927009:14216703),this.scene.fog.color.set(e.fog),this.scene.fog.density=this.isPlains?e.density*.25:e.density,this.isPlains&&t==="day"&&this.scene.fog.color.set(11982823),this.renderer.toneMappingExposure=e.exposure,this.sunDirection.copy(this.sun.position).sub(this.sun.target.position).normalize(),this.sky.material.uniforms.sunPosition.value.copy(this.sunDirection),this.sky.material.uniforms.turbidity.value=this.isPlains&&t==="day"?1.5:e.sky,this.sky.material.uniforms.rayleigh.value=this.isPlains?1.65:1.15,(r=this.lighting)==null||r.syncSun();const n=new Or(this.renderer),s=n.fromScene(this.sky,.08,.1,1600);this.scene.environment=s.texture,(a=this.environment)==null||a.dispose(),this.environment=s,n.dispose(),this.clouds.forEach(o=>o.material.color.set(t==="evening"?16765089:16777215)),this.renderer.shadowMap.needsUpdate=!0}setQuality(t){var e,n;return this.quality=["ultra","hdr","high","low","balanced"].includes(t)?t:"hdr",["ultra","hdr"].includes(this.quality)&&!this.lighting.supported&&(this.quality="high",(n=(e=this.callbacks).onError)==null||n.call(e,"このブラウザは16bit HDRに非対応のため、高画質で表示します。")),this.lighting.setQuality(this.quality),this.resize(),this.quality}resize(){var o;const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.mobile=matchMedia("(max-width: 760px)").matches,this.camera.fov=this.mobile?64:59;const n=this.quality==="ultra"?Math.max(devicePixelRatio,3840/Math.max(t,e)):this.quality==="low"?Math.min(devicePixelRatio,1.5)*.9:this.quality==="balanced"?Math.min(devicePixelRatio,1):devicePixelRatio,s=this.renderer.getContext(),r=Math.min(this.renderer.capabilities.maxTextureSize,s.getParameter(s.MAX_RENDERBUFFER_SIZE)),a=Math.min(n,r/t,r/e,Math.sqrt(8294400/(t*e)));this.renderer.setPixelRatio(a),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderResolution=`${this.renderer.domElement.width} × ${this.renderer.domElement.height}`,(o=this.lighting)==null||o.resize(t,e)}render(){this.lighting.render()}screenshot(){return this.render(),this.renderer.domElement.toDataURL("image/png")}thumbnails(){const t=this.camera.position.clone(),e=this.camera.rotation.clone(),n=[],s=this.renderer.getPixelRatio();try{this.renderer.setPixelRatio(1),this.renderer.setSize(480,240,!1),this.camera.aspect=2,this.camera.updateProjectionMatrix(),this.lighting.resize(480,240);for(const r of this.spots)this.camera.position.fromArray(r.position),this.camera.lookAt(...r.look),this.render(),n.push(this.renderer.domElement.toDataURL("image/jpeg",.82))}finally{this.camera.position.copy(t),this.camera.rotation.copy(e),this.renderer.setPixelRatio(s),this.resize(),this.render()}return n}tick(){var n,s,r;const t=Math.min(this.clock.getDelta(),.06);if(document.hidden)return;const e=this.motionPreference.matches||this.paused?0:t;if(this.elapsed+=e,e>0&&this.life.update(e),this.navigationElapsed=(this.navigationElapsed??0)+t,(n=this.updateLandscape)==null||n.call(this),this.windUniform.value=this.elapsed,this.windStrength.value=this.wind,this.water.material.normalMap.offset.set(this.elapsed*.003*this.wind,this.elapsed*.002*this.wind),this.transition&&!this.paused){const a=this.transition;a.elapsed+=t;const o=this.motionPreference.matches?1:c_(a.elapsed/a.duration);this.camera.position.lerpVectors(a.start,a.end,o),this.yaw=Te.lerp(a.startYaw,a.endYaw,o),this.pitch=Te.lerp(a.startPitch,a.endPitch,o),this.isPlains&&(this.camera.position.y=Math.max(this.camera.position.y,this.surfaceHeight(this.camera.position.x,this.camera.position.z)+1.7)),o===1&&(this.transition=null)}else if(this.walking&&!this.paused){let a=(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0)-this.joy.y,o=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0)+this.joy.x;const l=Math.hypot(a,o);if(l>1&&(a/=l,o/=l),l>.01){const c=this.speed*(this.travelMode==="cycle"?3:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?1.8:1)*t,h=(-Math.sin(this.yaw)*a+Math.cos(this.yaw)*o)*c,u=(-Math.cos(this.yaw)*a-Math.sin(this.yaw)*o)*c,d=this.camera.position,f=(g,p)=>!this.colliders.some(M=>yh(M,g,p,.25))&&this.life.canEnter(g,p,d),m=Math.max(1,Math.ceil(Math.hypot(h,u)/.18));for(let g=0;g<m;g++){const p=Pr(d.x+h/m,this.bounds.minX,this.bounds.maxX),M=Pr(d.z+u/m,this.bounds.minZ,this.bounds.maxZ);f(p,d.z)&&(d.x=p),f(d.x,M)&&(d.z=M)}const _=this.motionPreference.matches?0:Math.sin(this.elapsed*7)*.023;d.y=Te.lerp(d.y,this.surfaceHeight(d.x,d.z)+1.7+_,Math.min(1,t*10))}}if(this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ"),e>0||!this.ready)for(const a of this.birds){const o=a.userData,l=this.elapsed*.07+o.offset;a.position.set(Math.sin(l)*o.radius,o.height+Math.sin(l*2)*2,-64+Math.cos(l)*o.radius*.5),a.rotation.y=-l,a.children.forEach((c,h)=>c.rotation.z=Math.sin(this.elapsed*5+o.offset)*(h===0?1:-1)*.35)}this.clouds.forEach((a,o)=>{a.position.x+=e*.13*(1+o%3);const l=this.isPlains?1350:900;a.position.x>l&&(a.position.x=(a.position.x+l)%(l*2)-l)}),this.callbacks.onPosition&&(this.lastYaw!==this.yaw||Math.floor(this.navigationElapsed*5)!==this.lastMapTick)&&(this.lastYaw=this.yaw,this.lastMapTick=Math.floor(this.navigationElapsed*5),this.callbacks.onPosition(this.camera.position)),this.render(),this.ready||(this.ready=!0,(r=(s=this.callbacks).onReady)==null||r.call(s))}}const J=i=>document.querySelector(i),Wr=()=>cu({icons:{VolumeX:ou,Volume2:au,SlidersHorizontal:iu,Maximize:Qh,Minimize:tu,Sun:ru,Sprout:su,MoveUp:eu,X:lu,MapPin:Zh,Scan:nu,Map:Jh,Camera:jh,Footprints:Kh,Bike:$h}});Wr();let it,Lc,En={};try{const i=JSON.parse(localStorage.getItem("satoyama-immersive")||"{}");i&&typeof i=="object"&&!Array.isArray(i)&&(En=i)}catch{}const Io=new URLSearchParams(location.search),Ei=Io.get("map")==="satoyama"?"satoyama":"plains",Mn=Ei==="plains",Ch=Mn?vi:Rh,Dc=["ultra","hdr","high","low","balanced"],ie={quality:Dc.includes(Io.get("quality"))?Io.get("quality"):En.lightingVersion===1&&Dc.includes(En.quality)?En.quality:Mn?"ultra":"hdr",plainsDiscovered:Array.isArray(En.plainsDiscovered)?En.plainsDiscovered.filter(i=>Number.isInteger(i)&&i>=0&&i<vi.length):[],travelMode:En.travelMode==="cycle"?"cycle":"walk",lightingVersion:1,sensitivity:Math.max(.3,Math.min(1.6,Number(En.sensitivity)||.8)),volume:Number.isFinite(En.volume)?Math.max(0,Math.min(1,En.volume)):.5},Ti=()=>{try{localStorage.setItem("satoyama-immersive",JSON.stringify(ie))}catch{}};function un(i){clearTimeout(Lc),J("#toast").textContent=i,J("#toast").classList.add("show"),Lc=setTimeout(()=>J("#toast").classList.remove("show"),3200)}class u_{constructor(){this.enabled=!1,this.ctx=null,this.timer=null}async toggle(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t){un("このブラウザは環境音に対応していません。");return}this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=0,this.master.connect(this.ctx.destination);const e=this.ctx.createBuffer(1,this.ctx.sampleRate*8,this.ctx.sampleRate),n=e.getChannelData(0);let s=0;for(let r=0;r<n.length;r++)s=(s+(Math.random()*2-1)*.023)/1.024,n[r]=s*4;for(const[r,a,o]of[[650,.3,1],[2100,.055,1.8]]){const l=this.ctx.createBufferSource(),c=this.ctx.createBiquadFilter(),h=this.ctx.createGain();l.buffer=e,l.loop=!0,l.playbackRate.value=o,c.type=r<1e3?"lowpass":"bandpass",c.frequency.value=r,h.gain.value=a,l.connect(c),c.connect(h),h.connect(this.master),l.start()}}await this.ctx.resume(),this.enabled=!this.enabled,this.master.gain.setTargetAtTime(this.enabled?ie.volume:0,this.ctx.currentTime,.4),this.enabled?this.scheduleBird():clearTimeout(this.timer),J("#sound").innerHTML=`<i data-lucide="${this.enabled?"volume-2":"volume-x"}"></i>`,J("#sound").setAttribute("aria-pressed",String(this.enabled)),J("#sound").setAttribute("aria-label",`環境音を${this.enabled?"オフ":"オン"}にする`),Wr(),un(this.enabled?"鳥の声と、風の音。":"環境音をオフにしました")}scheduleBird(){if(clearTimeout(this.timer),!this.enabled)return;const t=this.ctx.currentTime+.1,e=1900+Math.random()*900;for(let n=0;n<3;n++){const s=t+n*.18,r=this.ctx.createOscillator(),a=this.ctx.createGain(),o=this.ctx.createStereoPanner();r.frequency.setValueAtTime(e,s),r.frequency.exponentialRampToValueAtTime(e*1.6,s+.065),r.frequency.exponentialRampToValueAtTime(e*.88,s+.13),a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(.035,s+.018),a.gain.exponentialRampToValueAtTime(1e-4,s+.16),o.pan.value=Math.random()*1.6-.8,r.connect(a),a.connect(o),o.connect(this.master),r.start(s),r.stop(s+.18),r.onended=()=>{r.disconnect(),a.disconnect(),o.disconnect()}}this.timer=setTimeout(()=>this.scheduleBird(),4500+Math.random()*7e3)}volume(t){this.ctx&&this.enabled&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.1)}}const Ki=new u_;J("#sound").addEventListener("click",()=>Ki.toggle().catch(()=>un("音声を再生できませんでした。もう一度お試しください。")));document.addEventListener("visibilitychange",()=>{Xr(),Ki.ctx&&(document.hidden?Ki.ctx.suspend().catch(()=>{}):Ki.enabled&&Ki.ctx.resume().catch(()=>{}))});function ni(i){J("#settings").hidden=!i,document.body.classList.toggle("panel-open",i),J("#settings-button").setAttribute("aria-expanded",String(i)),it&&(it.paused=i,it.resetInput()),Xr(),i?J("#close-settings").focus():it==null||it.renderer.domElement.focus({preventScroll:!0})}J("#settings-button").addEventListener("click",()=>ni(J("#settings").hidden));J("#close-settings").addEventListener("click",()=>ni(!1));J("#world").addEventListener("pointerdown",()=>{J("#settings").hidden||ni(!1)});J("#quality").value=ie.quality;J("#sensitivity").value=ie.sensitivity;J("#volume").value=ie.volume;J("#quality").addEventListener("change",i=>{ie.quality=i.target.value;const t=it==null?void 0:it.setQuality(ie.quality);t&&(ie.quality=t),J("#quality").value=ie.quality,qr(),Ti()});J("#sensitivity").addEventListener("input",i=>{ie.sensitivity=Number(i.target.value),it&&(it.sensitivity=ie.sensitivity),Ti()});J("#volume").addEventListener("input",i=>{ie.volume=Number(i.target.value),Ki.volume(ie.volume),Ti()});J("#time-of-day").addEventListener("change",i=>{it==null||it.setTime(i.target.value),J("#time-label").textContent={morning:"07:00",day:"14:32",evening:"17:30"}[i.target.value]});J("#viewpoint").addEventListener("change",i=>{it==null||it.goTo(Number(i.target.value),!0),ni(!1)});J("#reset-position").addEventListener("click",()=>{ni(!1),it==null||it.goTo(0,!0),un(Mn?"見晴らしの丘へ。":"いつものあぜ道へ。")});J(".brand").addEventListener("click",i=>{i.preventDefault(),it==null||it.renderer.domElement.focus({preventScroll:!0})});const Uo=()=>document.fullscreenElement||document.webkitFullscreenElement;let Ba=!1;function ul(){const i=!!Uo()||document.body.classList.contains("fullscreen-fallback"),t=i?"全画面を終了":"全画面表示";J("#fullscreen").innerHTML=`<i data-lucide="${i?"minimize":"maximize"}"></i>`,J("#fullscreen").setAttribute("aria-label",t),J("#fullscreen").title=t,J("#fullscreen").setAttribute("aria-pressed",String(i)),J("#leave-fullscreen").hidden=!i,Wr(),Xr(),it==null||it.resetInput(),requestAnimationFrame(()=>{it==null||it.resize(),qr()})}async function dl(){if(!Ba){Ba=!0;try{if(Uo())await(document.exitFullscreen||document.webkitExitFullscreen).call(document);else if(document.body.classList.contains("fullscreen-fallback"))document.body.classList.remove("fullscreen-fallback");else{const i=document.documentElement,t=i.requestFullscreen||i.webkitRequestFullscreen;if(!t)throw new Error("Fullscreen API unavailable");await t.call(i)}}catch{Uo()?un("全画面を終了できませんでした。Escキーまたはブラウザの終了操作をお試しください。"):(document.body.classList.add("fullscreen-fallback"),un("画面内のワイド表示に切り替えました。ブラウザの全画面は非対応または制限されています。"))}finally{Ba=!1,ul(),it==null||it.renderer.domElement.focus({preventScroll:!0})}}}J("#fullscreen").addEventListener("click",dl);J("#leave-fullscreen").addEventListener("click",dl);for(const i of["fullscreenchange","webkitfullscreenchange"])document.addEventListener(i,ul);window.addEventListener("resize",qr);function fl(i){ni(!1),document.body.classList.toggle("zen",i),J("#show-ui").hidden=!i,J(".hud").inert=i,J(".bottom-hud").inert=i,J("#journey").inert=i,J("#map-badge").inert=i,it==null||it.renderer.domElement.focus({preventScroll:!0})}J("#hide-ui").addEventListener("click",()=>fl(!0));J("#show-ui").addEventListener("click",()=>fl(!1));window.addEventListener("keydown",i=>{var t,e;i.key==="Escape"&&(document.body.classList.contains("fullscreen-fallback")&&(document.body.classList.remove("fullscreen-fallback"),ul()),J("#settings").hidden||ni(!1),document.body.classList.contains("zen")&&fl(!1)),i.code==="KeyF"&&!i.repeat&&!i.ctrlKey&&!i.metaKey&&!i.altKey&&!i.isComposing&&!i.target.isContentEditable&&!((e=(t=i.target).closest)!=null&&e.call(t,"input,select,textarea,button,a"))&&(i.preventDefault(),dl())});const ls=J("#joystick"),Ph=J("#joystick-thumb");let ts=null;function Lh(i){if(!it||it.paused)return;const t=ls.getBoundingClientRect(),e=t.width*.3;let n=i.clientX-t.left-t.width/2,s=i.clientY-t.top-t.height/2;const r=Math.hypot(n,s);r>e&&(n=n/r*e,s=s/r*e),Ph.style.transform=`translate(${n}px,${s}px)`,it.transition=null,it.joy.x=n/e,it.joy.y=s/e}ls.addEventListener("pointerdown",i=>{ts!==null||!it||it.paused||i.button!==0||(i.preventDefault(),ts=i.pointerId,ls.setPointerCapture(i.pointerId),Lh(i))});ls.addEventListener("pointermove",i=>{i.pointerId===ts&&Lh(i)});function Dh(i,t){t!=null&&i.hasPointerCapture(t)&&i.releasePointerCapture(t)}function Ih(i){if(i&&i.pointerId!==ts)return;const t=ts;ts=null,Ph.style.transform="",it&&(it.joy.x=it.joy.y=0),Dh(ls,t)}for(const i of["pointerup","pointercancel","lostpointercapture"])ls.addEventListener(i,Ih);window.addEventListener("blur",()=>Xr());const ks=J("#look-pad");let Ve=null;ks.addEventListener("pointerdown",i=>{Ve||!it||it.paused||i.button!==0||(i.preventDefault(),Ve={id:i.pointerId,x:i.clientX,y:i.clientY},ks.setPointerCapture(i.pointerId))});ks.addEventListener("pointermove",i=>{!Ve||i.pointerId!==Ve.id||!it||it.paused||(it.transition=null,it.yaw-=(i.clientX-Ve.x)*.003*ie.sensitivity,it.pitch=Math.max(-1.18,Math.min(1.1,it.pitch-(i.clientY-Ve.y)*.0024*ie.sensitivity)),Ve.x=i.clientX,Ve.y=i.clientY)});function Uh(i){if(i&&i.pointerId!==(Ve==null?void 0:Ve.id))return;const t=Ve==null?void 0:Ve.id;Ve=null,Dh(ks,t)}function Xr(){Ih(),Uh()}for(const i of["pointerup","pointercancel","lostpointercapture"])ks.addEventListener(i,Uh);J("#map-select").value=Ei;function Nh(){const i=J("#map-select").value;J("#map-description").textContent=i==="plains"?"696 × 696 m・既存マップの9倍の面積。丘、麦畑、水田と並木道。":"232 × 232 m・茅葺きの集落、棚田と小さな鉄道。",J("#change-map").disabled=i===Ei,J("#change-map").textContent=i===Ei?"このマップを散策中":"このマップへ出かける"}Nh();J("#map-select").addEventListener("change",Nh);J("#change-map").addEventListener("click",()=>{const i=new URL(location.href);i.searchParams.set("map",J("#map-select").value),i.searchParams.delete("quality"),Ti(),location.assign(i.href)});J("#map-badge").addEventListener("click",()=>{ni(!0),J("#map-select").focus()});J("#map-label").textContent=Mn?"はるか野の田園":"夏の里山";J("#map-badge span").textContent=Mn?"はるか野":"里山日和";J("#map-badge b").textContent=Mn?"9×":"ORIGINAL";J("#reset-label").textContent=Mn?"はじめの丘へ":"はじめのあぜ道へ";J("#loading-caption").textContent=Mn?"はるか野に、風が吹く。":"里山に、風が吹く。";J("#journey").hidden=!Mn;document.body.dataset.map=Ei;Mn&&(document.title="はるか野 — どこまでも、田園。 | 里山日和",J(".brand p").textContent="どこまでも、田園。",J(".moment p").textContent="いつもより、遠くへ。",J(".moment-caption").textContent="A WIDER HORIZON. A SLOWER DAY.",J("#world").setAttribute("aria-label","696メートル四方の広大な田園を自由に散策"));J("#viewpoint").replaceChildren(...Ch.map((i,t)=>new Option(i.name,t)));function qr(){it&&requestAnimationFrame(()=>{J("#render-resolution").textContent=it.renderResolution})}function pl(i){ie.travelMode=i==="cycle"?"cycle":"walk",it&&(it.travelMode=ie.travelMode,it.resetInput()),J("#travel-mode").value=ie.travelMode;const t=ie.travelMode==="cycle";J("#travel-toggle").innerHTML=`<i data-lucide="${t?"bike":"footprints"}"></i><span>${t?"風を切って移動 · 3×":"のんびり歩く"}</span>`,J("#travel-toggle").setAttribute("aria-pressed",String(t)),Wr(),Ti()}J("#travel-mode").addEventListener("change",i=>pl(i.target.value));J("#travel-toggle").addEventListener("click",()=>{pl(ie.travelMode==="cycle"?"walk":"cycle"),it==null||it.renderer.domElement.focus({preventScroll:!0})});pl(ie.travelMode);J("#save-view").addEventListener("click",()=>{if(!(it!=null&&it.ready)){un("風景の準備ができるまでお待ちください。");return}try{const i=document.createElement("a");i.download=`${Ei}_${new Date().toISOString().replace(/[:.]/g,"-")}.png`,i.href=it.screenshot(),document.body.append(i),i.click(),i.remove(),un(`${it.renderResolution} の風景を保存しました。`)}catch{un("風景を保存できませんでした。ブラウザのダウンロード設定をご確認ください。")}});const $i=new Set(ie.plainsDiscovered),d_=J("#minimap"),oe=d_.getContext("2d"),Br=document.createElement("canvas");Br.width=Br.height=360;const Ee=Br.getContext("2d"),Qn=(i,t)=>[12+(i-Do.minX)/696*336,12+(t-Do.minZ)/696*336];Ee.fillStyle="#344c39";Ee.fillRect(0,0,360,360);Ee.fillStyle="#789352";Ee.fillRect(12,12,336,336);for(const i of Hs){const[t,e]=Qn(i.x1,i.z1);Ee.fillStyle={wheat:"#d0bc6d",green:"#53844b",soil:"#a08565",water:"#7aa4ac",flowers:"#d8c151"}[i.kind],Ee.fillRect(t,e,58/696*336,52/696*336)}Ee.strokeStyle="#e3d9b37f";Ee.lineWidth=1;for(let i=0;i<=10;i++){const[t,e]=Qn(-330+i*66,-320),[,n]=Qn(0,220);Ee.beginPath(),Ee.moveTo(t,e),Ee.lineTo(t,n),Ee.stroke()}for(let i=0;i<=9;i++){const[t,e]=Qn(-330,-320+i*60),[n]=Qn(330,0);Ee.beginPath(),Ee.moveTo(t,e),Ee.lineTo(n,e),Ee.stroke()}for(const[i,t]of[[-225,-178],[-190,-177],[169,8],[214,6],[39,-285]]){const[e,n]=Qn(i,t);Ee.fillStyle="#f5ece0",Ee.fillRect(e-3,n-2,6,4)}Ee.fillStyle="#f4efda";Ee.font="16px sans-serif";Ee.fillText("N",331,28);for(const[i,t]of vi.entries()){const e=document.createElement("button");e.textContent=i+1,e.title=t.name,e.setAttribute("aria-label",`${i+1}. ${t.name}へ移動`),e.dataset.spot=i,e.addEventListener("click",()=>{it&&(it.goTo(i,!0),it.renderer.domElement.focus({preventScroll:!0}))}),J("#map-spots").append(e)}function No(){if(!Mn||!it)return;const i=it.camera.position;let t=0,e=1/0;if(vi.forEach((r,a)=>{const o=Math.hypot(i.x-r.position[0],i.z-r.position[2]);o<e&&(t=a,e=o),o<22&&!it.transition&&!$i.has(a)&&($i.add(a),ie.plainsDiscovered=[...$i],Ti(),a!==0&&un(`散策スポットを発見：${r.name}`))}),J("#nearby-spot").textContent=`${vi[t].name} · ${Math.round(e)} m`,J("#discovery-count").textContent=`${$i.size} / 6`,J("#map-spots").querySelectorAll("button").forEach((r,a)=>{r.classList.toggle("discovered",$i.has(a)),a===t?r.setAttribute("aria-current","location"):r.removeAttribute("aria-current")}),J("#minimap-content").hidden)return;oe.drawImage(Br,0,0),vi.forEach((r,a)=>{const[o,l]=Qn(r.position[0],r.position[2]);oe.fillStyle=$i.has(a)?"#f0dc99":"#f1f0d9",oe.beginPath(),oe.arc(o,l,8,0,Math.PI*2),oe.fill(),oe.fillStyle="#304a3a",oe.font="bold 11px sans-serif",oe.textAlign="center",oe.fillText(a+1,o,l+4)});const[n,s]=Qn(i.x,i.z);oe.save(),oe.translate(n,s),oe.rotate(-it.yaw),oe.shadowColor="#172c20",oe.shadowBlur=4,oe.fillStyle="#ffffff",oe.strokeStyle="#274b36",oe.lineWidth=2,oe.beginPath(),oe.moveTo(0,-11),oe.lineTo(7,8),oe.lineTo(0,4),oe.lineTo(-7,8),oe.closePath(),oe.fill(),oe.stroke(),oe.restore()}function Fh(i){J("#minimap-content").hidden=!i,J("#minimap-toggle").setAttribute("aria-expanded",String(i)),No()}J("#minimap-toggle").addEventListener("click",()=>Fh(J("#minimap-content").hidden));Fh(!matchMedia("(max-width: 760px), (max-height: 550px)").matches);requestAnimationFrame(()=>setTimeout(()=>{try{it=new h_(J("#world"),{onReady:()=>{document.body.classList.add("ready"),J("#world").dataset.ready="true"},onError:t=>un(t),onSpot:t=>{J("#viewpoint").value=String(t),un(Ch[t].subtitle)},onPosition:()=>{if(!it)return;const t=(it.yaw*180/Math.PI%360+360)%360,e=["N","NW","W","SW","S","SE","E","NE"],n=Math.round(t/45)%8,s=J(".compass").querySelectorAll("span");s[0].textContent=e[(n+2)%8],s[2].textContent=e[n],s[4].textContent=e[(n+6)%8],No()}},Ei),it.walking=!0,it.sensitivity=ie.sensitivity,it.travelMode=ie.travelMode,it.paused=!J("#settings").hidden,it.timeOfDay!==J("#time-of-day").value&&it.setTime(J("#time-of-day").value);const i=it.setQuality(ie.quality);ie.quality=i,J("#quality").value=ie.quality,qr(),No(),Ti()}catch(i){console.error("Countryside initialization failed:",i),J("#loading").innerHTML='<span>3Dの風景を表示できませんでした。</span><span style="font-size:11px;max-width:280px;text-align:center;line-height:2">WebGL 2 対応の最新版 Chrome / Safari でお試しください。</span><button id="retry">もう一度読み込む</button>',J("#retry").addEventListener("click",()=>location.reload())}},80));

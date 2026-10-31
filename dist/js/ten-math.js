export const clamp10=(x,a,b)=>Math.min(b,Math.max(a,x));
export function mirrorImage(distance,f=-15){const u=-distance;if(Math.abs(u-f)<1e-9)return{u,f,v:null,m:null,infinity:true};const v=f*u/(u-f);return{u,f,v,m:-v/u,infinity:false}}
export function lensImage(distance,f=15){const u=-distance;if(Math.abs(u+f)<1e-9)return{u,f,v:null,m:null,infinity:true};const v=f*u/(u+f);return{u,f,v,m:v/u,infinity:false}}
export const refractedAngle=(i,n1=1,n2=1.5)=>Math.asin(n1*Math.sin(i*Math.PI/180)/n2)*180/Math.PI;
export const equivalentResistance=(a,b,parallel=false)=>parallel?a*b/(a+b):a+b;
export const energyLevels=energy=>[energy,energy*.1,energy*.01,energy*.001];
export const monohybrid=['TT','Tt','Tt','tt'];
export function dihybrid(index){let gs=['RY','Ry','rY','ry'],a=gs[Math.floor(index/4)],b=gs[index%4];let pair=(x,y)=>[x,y].sort((u,v)=>u===v?0:u===u.toUpperCase()?-1:1).join('');return pair(a[0],b[0])+pair(a[1],b[1])}
export const fmt10=(x,dp=2)=>Number.isFinite(x)?String(Number(x.toFixed(dp))):'—';

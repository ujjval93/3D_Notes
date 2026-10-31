import{C}from'./scene-utils.js';export{C};export const read=(en,hi,value,unit='')=>({label:{en,hi},value:typeof value==='object'?value:String(value),unit});export const B=(en,hi)=>({en,hi});
export const bond=(g,a,b,color=C.white,width=3)=>g.line(a,b,color,width);
export function chain(g,points,{color=C.green,r=.1,labels=[]}={}){points.forEach((p,i)=>{if(i)bond(g,points[i-1],p);g.sphere(...p,r,color,labels[i]);})}
export function pulse(g,points,t,color=C.gold){let count=points.length-1;if(count<1){if(points[0])g.sphere(...points[0],.065,color);return}let s=((t*.7)%count+count)%count,i=Math.floor(s),f=s-i,a=points[i],b=points[Math.min(i+1,points.length-1)];g.sphere(...a.map((x,j)=>x+(b[j]-x)*f),.065,color)}
export function path(g,pts,color=C.green,width=2){for(let i=1;i<pts.length;i++)g.line(pts[i-1],pts[i],color,width)}
export function circle(g,x,y,r,color=C.green,z=0){const pts=Array.from({length:49},(_,i)=>[x+r*Math.cos(i*Math.PI/24),y+r*Math.sin(i*Math.PI/24),z]);path(g,pts,color)}
export function beadMolecule(g,x,y,z,atoms,bonds=[]){for(let[a,b]of bonds)g.line([x+atoms[a][0],y+atoms[a][1],z+atoms[a][2]],[x+atoms[b][0],y+atoms[b][1],z+atoms[b][2]],C.white,2);for(let[a,b,c,type]of atoms)g.sphere(x+a,y+b,z+c,type==='H'?.065:.11,{H:C.white,O:C.pink,C:C.dark,Cl:C.green,Na:C.gold}[type]||C.blue,type)}
export function ray(g,a,b,color=C.gold){g.arrow(a,b,color)}
export function diagramStage(g,pts,index,t,labels){pts.forEach((p,i)=>{if(i)g.line(pts[i-1],p,i<=index?C.gold:C.dark,2);g.sphere(...p,i===index?.14:.09,i===index?C.gold:i<index?C.green:C.dark,labels?.[i])});if(index>0)pulse(g,pts.slice(index-1,index+1),t,C.gold)}
export const co2=(g,x,y,z)=>beadMolecule(g,x,y,z,[[-.2,0,0,'O'],[0,0,0,'C'],[.2,0,0,'O']],[[0,1],[1,2]]);

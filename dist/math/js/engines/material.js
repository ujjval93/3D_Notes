// Shared solid appearance for all mathematics surface models.
import{svgEl}from'./base.js';
export function surfaceColor(points,base=[104,215,183]){
 const a=points[0],u=points[1].map((n,i)=>n-a[i]),v=points[2].map((n,i)=>n-a[i]);
 let n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],length=Math.hypot(...n);
 if(length<1e-9)return `rgb(${base.join(',')})`;
 const center=points.reduce((s,p)=>s.map((v,i)=>v+p[i]/points.length),[0,0,0]);
 const sign=center.reduce((s,v,i)=>s+v*n[i],0)<0?-1:1;n=n.map(v=>sign*v/length);
 const diffuse=Math.max(0,n[0]*-.35+n[1]*.65+n[2]*.68),gloss=35*Math.pow(Math.max(0,n[0]*-.18+n[1]*.35+n[2]*.92),24);
 return `rgb(${base.map(v=>Math.round(Math.min(255,v*(.38+.62*diffuse)+gloss))).join(',')})`;
}
export function perspective(point,scale,cx=300,cy=195){const depth=32/(32-point[2]);return[cx+point[0]*scale*depth,cy-point[1]*scale*depth,point[2]]}
export function solidStage(svg){
 const defs=svgEl('defs'),gradient=svgEl('radialGradient',{id:'solid-ground'});
 gradient.append(svgEl('stop',{offset:'0%','stop-color':'#000','stop-opacity':'.35'}),svgEl('stop',{offset:'100%','stop-color':'#000','stop-opacity':'0'}));defs.append(gradient);svg.append(defs,svgEl('ellipse',{cx:300,cy:332,rx:150,ry:30,fill:'url(#solid-ground)'}));
}

export function smoothSphere(svg,radius){
 const defs=svgEl('defs'),g=svgEl('radialGradient',{id:'solid-sphere',cx:'32%',cy:'25%',r:'75%'});
 for(const [offset,color]of[['0%','#c6ffed'],['18%','#80dfc0'],['48%','#47a98a'],['80%','#23604e'],['100%','#15382e']])g.append(svgEl('stop',{offset,'stop-color':color}));
 defs.append(g);svg.append(defs,svgEl('circle',{cx:300,cy:195,r:radius,fill:'url(#solid-sphere)'}));
}

// Reusable world-space road: y grows downward, negative z faces the viewer.
// Position is signed relative to the origin; it is not total distance travelled.
export function drawRoad(g,{position=0,halfRange=24,halfLength=1.8,y=1.08}={}){
 const extent=Math.max(1,halfRange),toX=value=>value/extent*halfLength;
 g.box(0,y+.08,0,halfLength+.16,.08,.55,'#47565a',{solid:true,ground:true});
 for(const z of[-.48,.48])g.line([-halfLength,y-.006,z],[halfLength,y-.006,z],'#f1eee0',2);
 for(let i=0;i<11;i++){const x=-halfLength+i*halfLength/5.5;g.line([x,y-.012,0],[x+.19,y-.012,0],'#f3db91',2)}
 // Ruler along the near curb, in the same coordinate system as the vehicle.
 const front=-.66;
 g.line([-halfLength,y,front],[halfLength,y,front],'#a8c5bb',2);
 for(let i=-4;i<=4;i++){const x=halfLength*i/4;g.line([x,y,front],[x,y,front-.10],'#d6e8dd',1.5)}
 for(const fraction of[-1,0,1]){const value=fraction*extent;g.text(fraction*halfLength,y+.29,front-.12,`${Number(value.toFixed(1))} m`)}
 const px=toX(position);
 g.line([0,y-.02,front],[px,y-.02,front],'#f3c573',4);
 g.line([px,y-.04,0],[px,y-.04,front-.12],'#f3c573',1.5);
 g.sphere(px,y-.04,front-.12,.045,'#f3c573');
 return px;
}

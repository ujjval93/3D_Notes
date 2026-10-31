// A regular hexagon and its petals use a single fixed compass radius.
export const TAU=2*Math.PI;
export function hexVertices(r=110,cx=300,cy=200){return Array.from({length:6},(_,i)=>{let a=i*TAU/6-Math.PI/2;return[cx+r*Math.cos(a),cy+r*Math.sin(a)]})}
export function petalGeometry(r=110){return{start:[0,0],end:[r,0],centres:[[r/2,Math.sqrt(3)*r/2],[r/2,-Math.sqrt(3)*r/2]],radius:r}}
export class ConstructionState{
 constructor(count=8){this.count=count;this.step=0;this.completed=0;this.progress=0;this.drawing=false}
 start(){this.progress=0;this.drawing=true}
 advance(seconds,duration=.85){if(!this.drawing)return false;this.progress=Math.min(1,this.progress+Math.max(0,seconds)/duration);if(this.progress===1){this.completed=Math.max(this.completed,this.step+1);this.drawing=false;return true}return false}
 select(i){if(!Number.isInteger(i)||i<0||i>=this.count||i>this.completed)return false;this.step=i;this.drawing=false;this.progress=0;return true}
 next(){return !this.drawing&&this.step<this.completed&&this.select(this.step+1)}
 previous(){return this.select(this.step-1)}
 get shown(){return this.drawing?this.step:Math.min(this.completed,this.step+1)}
 get finished(){return this.completed===this.count}
}

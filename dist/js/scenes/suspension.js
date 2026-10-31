import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';
import {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';
export default ({g,t,p,low})=>{g.box(0,0,0,1,1,.6);let progress=Math.min(1,(t%8)/8*p[0]*p[0]);for(let i=0;i<(low?20:36);i++){let y=(Math.sin(i*5)*.75)*(1-progress)+.8*progress;g.sphere(Math.sin(i*7)*.8,y,Math.cos(i*3)*.5,.05+.02*p[0],C.gold)}return[read('Radius factor','त्रिज्या गुणक',fmt(p[0]),'×'),read('Ideal settling-speed factor','आदर्श अवसादन गति गुणक',fmt(p[0]**2),'×')];};

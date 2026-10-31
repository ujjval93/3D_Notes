import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';
import {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';
export default ({g,t,p,extra,low})=>{let mode=Number(extra.state??0);particles(g,t,low?24:48,mode,Math.sqrt(p[0]));return[read('Energy factor','ऊर्जा गुणक',fmt(p[0]),'×'),read('Relative particle speed','सापेक्ष कण गति',fmt(Math.sqrt(p[0])),'×')];};

import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';
import {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';
export default ({g,p})=>{molecule(g,'ammonia',p[0]);return[read('Nitrogen atoms','नाइट्रोजन परमाणु',p[0]),read('Hydrogen atoms','हाइड्रोजन परमाणु',3*p[0]),read('One molecule mass','एक अणु का द्रव्यमान',17,'u')];};

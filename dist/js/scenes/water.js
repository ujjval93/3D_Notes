import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';
import {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';
export default ({g,p})=>{molecule(g,'water',p[0]);return[read('Hydrogen atoms','हाइड्रोजन परमाणु',2*p[0]),read('Oxygen atoms','ऑक्सीजन परमाणु',p[0]),read('One molecule mass','एक अणु का द्रव्यमान',18,'u')];};

import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';
import {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';
export default ({g,t,p})=>{atom(g,6,6,t,p[0]);return[read('Atomic number Z','परमाणु क्रमांक Z',6),read('Mass number A','द्रव्यमान संख्या A',6+p[0]),read('Isotope','समस्थानिक','C-'+(6+p[0])),read('Electrons unchanged','अपरिवर्तित इलेक्ट्रॉन',6)];};

import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';
import {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';
export default ({g,t,p})=>{atom(g,17,17+p[0],t,18);return[read('Protons','प्रोटॉन',17),read('Electrons','इलेक्ट्रॉन',17+p[0]),read('Net charge','कुल आवेश',p[0]?'−'+p[0]:'0'),read('Shells','कक्षाएँ',shells(17+p[0]).join(', '))];};

import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';
import {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';
export default ({g,p,extra})=>{let mass=p[0],moon=Number(extra.location??0)===1,gval=moon?1.62:9.8;g.sphere(0,.8,0,.55,moon?C.dark:C.blue,moon?b('Moon','चन्द्रमा'):b('Earth','पृथ्वी'));g.sphere(0,-.5,0,.12,C.gold);g.arrow([.35,-.5,0],[.35,-.5+.75*gval/9.8,0],C.green);return[read('Mass','द्रव्यमान',mass,'kg'),read('Local g','स्थानीय g',gval,'m/s²'),read('Weight = mg','भार = mg',fmt(mass*gval),'N')];};

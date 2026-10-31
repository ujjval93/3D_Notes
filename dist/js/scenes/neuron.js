import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';
import {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';
export default ({g,t,p})=>{neuron(g,t,p[0]);return[read('Relative signal speed','सापेक्ष संकेत गति',fmt(p[0]),'×'),{label:b('Direction','दिशा'),value:b('Dendrites → cell body → axon','द्रुमिकाएँ → कोशिकाकाय → अक्षतन्तु')}];};

import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';
import {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';
export default ({g,p})=>{cell(g,p[0]===1);return[{label:b('Cell type','कोशिका प्रकार'),value:p[0]?b('Plant: wall and large vacuole','पादप: भित्ति और बड़ी रिक्तिका'):b('Animal: no cell wall','जंतु: कोशिका भित्ति नहीं')},{label:b('Shared organelle','समान कोशिकांग'),value:b('Mitochondria in both','दोनों में माइटोकॉन्ड्रिया')}];};

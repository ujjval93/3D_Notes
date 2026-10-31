import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';
import {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';
export default ({g,t,p})=>{let m=p[0],v=p[1]??3,x=-1.3+(t*v*.16%2.6);g.sphere(x,.1,0,.10+.035*m,C.gold);g.line([-1.4,.5,0],[1.4,.5,0]);g.arrow([x,-.3,0],[x+v*.1,-.3,0],C.green);return[read('Mass','द्रव्यमान',m,'kg'),read('Velocity','वेग',v,'m/s'),read('Momentum = mv','संवेग = mv',fmt(m*v),'kg·m/s')];};

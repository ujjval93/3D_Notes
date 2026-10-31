import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';
import {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';
export default ({g,t,p})=>{let r=2,a=t*p[0]/r;g.ring(1);let pos=[Math.cos(a),0,Math.sin(a)];g.sphere(...pos,.12,C.gold);g.arrow(pos,[pos[0]-Math.sin(a)*.6,0,pos[2]+Math.cos(a)*.6],C.green);g.arrow(pos,[pos[0]*.5,0,pos[2]*.5],C.blue);return[read('Radius','त्रिज्या',r,'m'),read('Speed','चाल',p[0],'m/s'),read('Centripetal acceleration','केन्द्राभिमुख त्वरण',fmt(p[0]**2/r),'m/s²')];};

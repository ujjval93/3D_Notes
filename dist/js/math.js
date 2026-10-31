export const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
export function shells(e){const a=[];for(const max of [2,8,8]){if(e<=0)break;const n=Math.min(e,max);a.push(n);e-=n;}return a;}
export function heating(q){if(q<.42)return {temp:-20+q/.021,phase:0};if(q<3.76)return {temp:0,phase:1};if(q<7.94)return {temp:(q-3.76)/.0418,phase:2};return {temp:100,phase:3};}
export const work=(force,displacement,angle=0)=>{const w=force*displacement*Math.cos(angle*Math.PI/180);return Math.abs(w)<1e-9?0:w;};
export function buoyancy(rho,V=.001,g=9.8){const weight=rho*V*g,displaced=V*Math.min(1,rho/1000);return {weight,displaced,upthrust:1000*g*displaced,fraction:Math.min(1,rho/1000)};}
export function pendulum(theta0,t,m=1,L=1.5,g=9.8){const angle=theta0*Math.PI/180*Math.cos(Math.sqrt(g/L)*t),total=m*g*L*(1-Math.cos(theta0*Math.PI/180)),pe=m*g*L*(1-Math.cos(angle));return{angle,total,pe,ke:Math.max(0,total-pe)};}
export function falling(h,t,m=2,g=10){const duration=Math.sqrt(2*h/g),tau=Math.min(t,duration),height=Math.max(0,h-.5*g*tau*tau),pe=m*g*height,total=m*g*h;return{height,pe,ke:total-pe,total,duration,v:g*tau};}
export const fmt=(v,dp=2)=>Number(v.toFixed(dp)).toString();
export const b=(en,hi)=>({en,hi});

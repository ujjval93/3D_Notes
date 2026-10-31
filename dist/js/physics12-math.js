export const K=8.9875517923e9,EPS0=8.8541878128e-12,MU0=4*Math.PI*1e-7,ECHARGE=1.602176634e-19,ME=9.1093837139e-31,H=6.62607015e-34,C0=299792458,RYD=1.0973731568e7;
const trig=(f,r)=>{let v=f(r);return Math.abs(v)<1e-12?0:v};
export function physics12(m,x,t=0){const rad=x*Math.PI/180;switch(m){
case 0:return{value:K*1e-12/x**2};case 1:return{value:K*1e-6/x**2};case 2:return{value:.02*trig(Math.sin,rad)};case 3:return{value:K*1e-6/x};case 4:return{value:EPS0*x/.001*1e12};case 5:return{value:10/x,capacitance:100*x,energy:5/x};
case 6:return{value:x/6};case 7:return{value:1.7e-8*x/1e-6};case 8:{let current=6/(x+1);return{value:current*x,current}};
case 9:return{value:1e-6*1000*.2*trig(Math.sin,rad)};case 10:return{value:MU0*x/(2*Math.PI*.1)*1e6};case 11:return{value:ME*1e6/(ECHARGE*x*.001)*100};
case 12:return{value:MU0/(4*Math.PI)*2/x**3*1e6};case 13:return{value:x};case 14:return{value:.1*trig(Math.sin,rad)};
case 15:return{value:.01*trig(Math.cos,rad)};case 16:return{value:-x};case 17:return{value:.1*x};case 18:return{value:x/Math.sqrt(2),instant:x*Math.sin(2*Math.PI*t)};
case 19:{let omega=2*Math.PI*x,xl=omega*.1,xc=1/(omega*100e-6),impedance=Math.hypot(50,xl-xc);return{value:100/impedance,impedance,xl,xc,resonance:1/(2*Math.PI*Math.sqrt(.1*100e-6))}};
case 20:return{value:12*x/100};case 21:return{value:C0/(x*1e6)};case 22:return{value:x/C0*1e6};case 23:{let frequencies=[1e6,1e9,1e12,5e14,1e16,1e18,1e21];return{value:frequencies[x],wavelength:C0/frequencies[x]}};
case 24:{let image=20*x/(x-20);return{value:image,magnification:-image/x,u:-x}};case 25:return{value:Math.asin(trig(Math.sin,rad)/1.5)*180/Math.PI};case 26:{let argument=1.5*trig(Math.sin,rad);return{value:x,refracted:argument<=1?Math.asin(argument)*180/Math.PI:0,tir:argument>1,critical:Math.asin(1/1.5)*180/Math.PI}};
case 27:return{value:600e-9/(x*.001)*1000};case 28:return{value:2*600e-9/(x*.001)*1000};case 29:return{value:100*trig(Math.cos,rad)**2};
case 30:{let energy=H*x*1e14/ECHARGE;return{value:Math.max(0,energy-2),emission:energy>=2,photon:energy,threshold:2*ECHARGE/H/1e14}};
case 31:return{value:H/Math.sqrt(2*ME*ECHARGE*x)*1e9};case 32:return{value:H*C0/(x*1e-9*ECHARGE)};
case 33:return{value:-13.6/x**2,radius:.05291772109*x*x};case 34:return{value:1/(RYD*(.25-1/x**2))*1e9};case 35:{return{value:K*158*ECHARGE**2/(x*1e6*ECHARGE)*1e15}};
case 36:return{value:931.5*x};case 37:{let A=[4,12,16,56,238],binding=[7.07,7.68,7.98,8.79,7.57];return{value:binding[x],A:A[x],total:binding[x]*A[x]}};case 38:return{value:x};case 39:return{value:[0,.7,1.1,5][x]};case 40:return{value:Math.max(0,x-.7)/100*1000};case 41:return{value:Math.max(0,10*trig(Math.sin,rad)),input:10*trig(Math.sin,rad)};default:throw Error('Unknown physics12 mode '+m)
}}

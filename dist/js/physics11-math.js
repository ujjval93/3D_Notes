// SI calculations shared by the Class 11 diagrams and scientific verification.
export const G0=9.8,EARTH_R=6.37e6,R=8.314;
export function roundHalfEven(x,places=0){const scale=10**places,z=x*scale,lower=Math.floor(z),fraction=z-lower;return(Math.abs(fraction-.5)<1e-9?(lower%2===0?lower:lower+1):Math.round(z))/scale}
export function physics(mode,x,t=0){
 const rad=x*Math.PI/180,phase=Math.max(0,t)%5,sine=Math.abs(Math.sin(rad))<1e-12?0:Math.sin(rad),cosine=Math.abs(Math.cos(rad))<1e-12?0:Math.cos(rad);
 switch(mode){
 case 0:return{rounded:roundHalfEven(x,2-Math.floor(Math.log10(Math.abs(x)))) ,decimal:roundHalfEven(x,1),metres:x/100};
 case 1:return{metres:x/100,centimetres:x};
 case 2:return{period:2*Math.PI*Math.sqrt(x/G0),length:x};
 case 3:return{position:x*phase,velocity:x,time:phase};
 case 4:return{position:2*phase+.5*x*phase**2,velocity:2+x*phase,acceleration:x,time:phase};
 case 5:return{displacement:5*x,velocity:x,duration:5};
 case 6:{let flight=20*sine/G0,u=t<0?0:t%flight;return{range:100*Math.sin(2*rad)/G0,height:100*sine**2/(2*G0),flight,px:10*cosine*u,py:10*sine*u-.5*G0*u*u}}
 case 7:return{resultant:Math.sqrt(25+24*cosine),rx:3+4*cosine,ry:4*sine};
 case 8:return{acceleration:4/x,period:Math.PI*x,speed:2};
 case 9:return{acceleration:x/2,force:x,mass:2};
 case 10:{let sliding=x>7.84,friction=sliding?5.88:x;return{friction,acceleration:(x-friction)/2,sliding,limit:7.84}}
 case 11:return{speed:Math.sqrt(20*G0*Math.tan(rad)),radius:20,angle:x};
 case 12:return{work:20*cosine,component:10*cosine};
 case 13:return{energy:50*x*x,force:100*x,extension:x};
 case 14:return{v1:3*(2-x)/(2+x),v2:12/(2+x),momentum:6,energy:9};
 case 15:return{centre:4*x/(2+x),totalMass:2+x};
 case 16:return{torque:20*sine,lever:2*sine};
 case 17:return{disk:x*x,ring:2*x*x,radius:x};
 case 18:return{gravity:G0/(1+x)**2,height:x*EARTH_R};
 case 19:return{speed:Math.sqrt(G0*EARTH_R/x),period:2*Math.PI*Math.sqrt((x*EARTH_R)**3/(G0*EARTH_R**2)),radius:x*EARTH_R};
 case 20:return{escape:Math.sqrt(2*G0*EARTH_R/x),circular:Math.sqrt(G0*EARTH_R/x)};
 case 21:return{stress:x/1e-6,strain:x/(1e-6*2e11),extension:x*2/(1e-6*2e11)};
 case 22:return{extension:500*2/(x*1e-6*2e11),stress:500/(x*1e-6),strain:500/(x*1e-6*2e11)};
 case 23:return{fraction:x*1e6/2e9,pressure:x*1e6,volume:1-x*1e6/2e9};
 case 24:return{gauge:1000*G0*x,absolute:101325+1000*G0*x};
 case 25:return{speed:8/x,flow:8e-4,area:x*1e-4};
 case 26:return{pressure:200000+.5*1000*(4-x*x),dynamic:.5*1000*x*x,total:202000};
 case 27:return{extension:12e-6*x,length:1+12e-6*x};
 case 28:return{temperature:(80*x+20*.5)/(x+.5),heatLost:x*4180*(80-(80*x+10)/(x+.5))};
 case 29:return{rate:x*.01*50/.1,conductivity:x};
 case 30:{let work=100*(x-1);return{work,internal:1.5*work,heat:2.5*work,volume:x}}
 case 31:return{work:R*300*Math.log(x),heat:R*300*Math.log(x),internal:0,pressure:1/x};
 case 32:return{efficiency:1-x/600,rejected:1000*x/600,work:1000*(1-x/600)};
 case 33:return{pressure:R*x/.024,temperature:x,internal:1.5*R*x};
 case 34:return{rms:Math.sqrt(3*R*x/.028),meanEnergy:1.5*1.380649e-23*x};
 case 35:return{cv:x*R/2,cp:(x+2)*R/2,gamma:(x+2)/x};
 case 36:{let omega=Math.sqrt(20/x);return{period:2*Math.PI/omega,omega,displacement:.3*Math.cos(omega*t)}}
 case 37:{let omega=Math.sqrt(G0/x);return{period:2*Math.PI/omega,omega,angle:Math.PI/18*Math.cos(omega*t)}}
 case 38:{let omega=Math.sqrt(20);return{energy:10*x*x,kinetic:10*x*x*Math.sin(omega*t)**2,potential:10*x*x*Math.cos(omega*t)**2,displacement:x*Math.cos(omega*t)}}
 case 39:return{wavelength:4/x,frequency:x,speed:4};
 case 40:return{frequency:5*x,wavelength:4/x,nodes:x+1,antinodes:x};
 case 41:return{beats:Math.abs(x-10),second:x};
 default:throw Error('Unknown Physics scene '+mode)
 }
}

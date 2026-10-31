export const NA=6.02214076e23;
export function chemistry(mode,x){switch(mode){
case 0:return{moles:x/18,particles:x/18*NA};
case 1:{let extent=Math.min(x/2,2);return{water:2*extent,leftH2:x-2*extent,leftO2:2-extent}}
case 2:return{concentration:100/x,moles:.1};
case 3:return{energy:-13.6/(x*x),excitation:13.6*(1-1/(x*x))};
case 4:return{wavelength:6.62607015e-34/(9.1093837e-31*x*1e6),velocity:x*1e6};
case 5:return{orbitals:2*x+1,capacity:2*(2*x+1)};
case 6:return{radiusIndex:1/x,attractionIndex:x};
case 7:return{enthalpy:[520,900,801,1086,1402,1314,1681,2081][Math.round(x)-3],atomicNumber:Math.round(x)};
case 8:return{radiusIndex:10/x,ionCharge:x-10,electrons:10};
case 9:return{angle:[109.5,107,104.5,180][Math.round(x)],bonds:[4,3,2,2][Math.round(x)],lonePairs:[0,1,2,0][Math.round(x)]};
case 10:return{dipole:Math.abs(Math.cos(x*Math.PI/360))<1e-12?0:2*Math.cos(x*Math.PI/360)};
case 11:return{bondOrder:(8-x)/2,bonding:8,antibonding:x};
case 12:return{work:-100*x,heat:500,internal:500-100*x};
case 13:return{enthalpy:-100+x,first:-100,second:x};
case 14:return{gibbs:40-.1*x,enthalpy:40,entropy:.1};
case 15:return{quotient:x/.5,equilibrium:2,direction:x<1?'forward':x>1?'reverse':'equilibrium'};
case 16:{let k=1.8e-5,h=2*k*x/(Math.sqrt(k*k+4*k*x)+k);return{hydrogen:h,pH:-Math.log10(h),dissociation:h/x}}
case 17:{let k=1.8e-5,b=x+k,h=2*k*.1/(Math.sqrt(b*b+4*k*.1)+b);return{hydrogen:h,pH:-Math.log10(h),dissociation:h/.1}}
case 18:return{oxidation:2*x-1,oxygenTotal:-2*x,charge:-1};
case 19:return{electronMoles:2*x,copperMoles:x};
case 20:return{electronLoss:x,electronGain:5,imbalance:x-5};
case 21:return{angle:[109.5,120,180][Math.round(x)],sigma:[4,3,2][Math.round(x)],pi:[0,1,2][Math.round(x)]};
case 22:return{effectIndex:2**(1-x),distance:x};
case 23:return{rf:x/8,front:8,distance:x};
case 24:return{alkaneH:2*x+2,alkeneH:2*x,alkyneH:2*x-2,carbon:x};
case 25:return{energyIndex:(1+Math.cos(3*x*Math.PI/180))/2,angle:x};
case 26:return{index:Math.round(x),addition:x===0?1:0};
default:throw Error('Unknown Chemistry scene '+mode)}}

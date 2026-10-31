export const factorial=n=>{let p=1;for(let i=2;i<=n;i++)p*=i;return p};
export const choose=(n,r)=>r<0||r>n?0:factorial(n)/factorial(r)/factorial(n-r);
export const stats=a=>{const mean=a.reduce((s,x)=>s+x,0)/a.length,variance=a.reduce((s,x)=>s+(x-mean)**2,0)/a.length;return{mean,variance,sd:Math.sqrt(variance)}};
export function calculate(id,v,b=3,n=6,x=1){
let A=[1,2,3,4],B=[v,v+1,v+2],union=[...new Set([...A,...B])],intersection=A.filter(x=>B.includes(x));
switch(id){
case'sets-union':case'sets-intersection':return{A,B,union,intersection,value:id==='sets-union'?union.length:intersection.length};
case'sets-complement':return{A:Array.from({length:v},(_,i)=>i+1),complement:Array.from({length:10-v},(_,i)=>v+i+1),value:10-v};
case'function-map':return{points:[-2,-1,0,1,2].map(x=>[x,v*x]),value:v};
case'function-square':return{value:v};case'function-modulus':return{value:Math.abs(v),floor:Math.floor(v)};
case'trig-circle':case'trig-identity':return{cos:Math.cos(v*Math.PI/180),sin:Math.sin(v*Math.PI/180),value:1};case'trig-wave':return{value:2*Math.PI};
case'complex-plane':return{a:v,b,modulus:Math.hypot(v,b),value:Math.hypot(v,b)};
case'quadratic-roots':{let D=v*v-4*b;return{D,real:-v/2,delta:Math.sqrt(Math.abs(D))/2,value:D}};
case'complex-powers':return{point:[[1,0],[0,1],[-1,0],[0,-1]][v%4],value:v%4};
case'inequality-line':return{value:(v-1)/2};case'inequality-region':return{value:v};case'inequality-interval':return{empty:v< -2,value:v};
case'count-factorial':return{value:factorial(v)};case'count-permutation':return{value:factorial(v)/factorial(v-b)};case'count-combination':return{value:choose(v,b)};
case'binomial-pascal':return{coefficients:Array.from({length:v+1},(_,r)=>choose(v,r)),value:2**v};case'binomial-value':return{terms:Array.from({length:v+1},(_,r)=>choose(v,r)*x**r),value:(1+x)**v};case'binomial-term':return{coefficient:choose(5,v)*2**(5-v),value:choose(5,v)*2**(5-v)};
case'sequence-ap':return{terms:Array.from({length:n},(_,i)=>2+i*v),value:n*(4+(n-1)*v)/2,last:2+(n-1)*v};case'sequence-gp':return{terms:Array.from({length:n},(_,i)=>v**i),value:v===1?n:(v**n-1)/(v-1),last:v**(n-1)};case'sequence-means':return{am:(v+b)/2,gm:Math.sqrt(v*b),value:(v+b)/2-Math.sqrt(v*b)};
case'line-slope':return{value:(Math.atan(v)*180/Math.PI+180)%180};case'line-intersection':return{parallel:v===-1,point:v===-1?null:[1/(v+1),2-1/(v+1)],value:v};case'line-distance':return{value:Math.abs(3*v+3)/5,foot:[v-3*(3*v+3)/25,2-4*(3*v+3)/25]};
case'conic-circle':return{value:v*v};case'conic-parabola':return{value:4*v};case'conic-ellipse':return{c:Math.sqrt(v?20:12),value:Math.sqrt(v?20:12)/4};
case'space-point':return{point:[v,2,3],value:Math.sqrt(v*v+13)};case'space-distance':return{point:[v,3,4],value:Math.sqrt((v-1)**2+13)};case'space-section':return{point:[4,2,3].map(a=>a*v/(v+1)),value:v/(v+1)};
case'limit-secant':return{value:2+v,undefined:v===0};case'limit-sine':return{value:v===0?1:Math.sin(v)/v,undefined:v===0};case'derivative-power':return{value:v};
case'stats-mean':{let a=[2,4,4,6,v];return{data:a,...stats(a),value:stats(a).mean}};case'stats-variance':{let a=[5-2*v,5-v,5,5+v,5+2*v];return{data:a,...stats(a),value:2*v*v}};case'stats-shift':{let a=[1,3,5,7,9].map(x=>x+v);return{data:a,...stats(a),value:8}};
case'prob-events':return{favourable:v,total:6,value:v/6};case'prob-dice':{let pairs=[];for(let i=1;i<=6;i++)for(let j=1;j<=6;j++)if(i+j===v)pairs.push([i,j]);return{pairs,favourable:pairs.length,total:36,value:pairs.length/36}};case'prob-coins':return{favourable:choose(3,v),total:8,value:choose(3,v)/8};default:throw Error('Unknown scene '+id)
}}

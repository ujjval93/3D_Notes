export const rad=d=>d*Math.PI/180;
export const gcd=(a,b)=>{a=Math.abs(Math.round(a));b=Math.abs(Math.round(b));while(b)[a,b]=[b,a%b];return a};
export const lcm=(a,b)=>a&&b?Math.abs(a*b)/gcd(a,b):0;
export function factors(n){let out=[];for(let p=2;p*p<=n;p++)while(n%p===0){out.push(p);n/=p}if(n>1)out.push(n);return out}
export function quadratic(a,b,c){if(Math.abs(a)<1e-10)return{type:Math.abs(b)<1e-10?(Math.abs(c)<1e-10?'all':'none'):'linear',D:null,roots:Math.abs(b)<1e-10?[]:[-c/b]};let D=b*b-4*a*c;if(Math.abs(D)<1e-10)D=0;return{type:D<0?'nonreal':Math.abs(D)<1e-10?'repeated':'distinct',D,roots:D<0?[]:Math.abs(D)<1e-10?[-b/(2*a)]:[(-b-Math.sqrt(D))/(2*a),(-b+Math.sqrt(D))/(2*a)].sort((a,b)=>a-b)}}
export const ap=(a,d,n)=>({last:a+(n-1)*d,sum:n*(2*a+(n-1)*d)/2});
export const section=(a,b,m,n=1)=>[(n*a[0]+m*b[0])/(m+n),(n*a[1]+m*b[1])/(m+n)];
export function trig(degrees){const s=Math.sin(rad(degrees)),c=Math.cos(rad(degrees)),safe=(a,b)=>Math.abs(b)<1e-10?null:a/b;return{sin:s,cos:c,tan:safe(s,c),cot:safe(c,s),sec:safe(1,c),cosec:safe(1,s)}}
export const tangents=(d,r=2)=>({count:d<r-1e-9?0:Math.abs(d-r)<1e-9?1:2,length:d<r?null:Math.sqrt(Math.max(0,d*d-r*r))});
export function sector(r,theta){let area=theta/360*Math.PI*r*r,arc=theta/360*2*Math.PI*r,triangle=r*r*Math.sin(rad(theta))/2;return{area,arc,triangle,segment:area-triangle}}
export function combinedSolid(type,r,h,k=3){let R=3;if(!(r>0&&h>0&&k>0)||type==='cavity'&&(r>R||r>h))throw new RangeError('Invalid solid dimensions');if(type==='cone-cylinder'){let l=Math.hypot(r,k);return{volume:Math.PI*r*r*(h+k/3),area:2*Math.PI*r*h+Math.PI*r*l+Math.PI*r*r,slant:l}}if(type==='hemisphere-cylinder')return{volume:Math.PI*r*r*h+2*Math.PI*r**3/3,area:2*Math.PI*r*h+3*Math.PI*r*r};return{volume:Math.PI*R*R*h-2*Math.PI*r**3/3,area:2*Math.PI*R*h+2*Math.PI*R*R+Math.PI*r*r}}
export function grouped(freq,width=10){let n=freq.reduce((a,b)=>a+b,0);if(!n||freq.some(x=>!Number.isFinite(x)||x<0))return null;let sum=freq.reduce((s,f,i)=>s+f*(i+.5)*width,0),cf=0,medianIndex=freq.length-1;for(let i=0;i<freq.length;i++){if(cf+freq[i]>=n/2){medianIndex=i;break}cf+=freq[i]}let median=medianIndex*width+(n/2-cf)/freq[medianIndex]*width,max=Math.max(...freq),indices=freq.flatMap((v,i)=>v===max?[i]:[]),mi=indices[0],f0=freq[mi-1]||0,f2=freq[mi+1]||0,den=2*max-f0-f2,mode=indices.length===1&&den>0?mi*width+(max-f0)/den*width:null;return{n,mean:sum/n,sum,median,medianIndex,mode,modalIndices:indices,cf}}
export const dicePairs=sum=>Array.from({length:36},(_,i)=>[Math.floor(i/6)+1,i%6+1]).filter(([a,b])=>a+b===sum);

// Pure, unit-free mathematical models. Angles are radians unless the control says degrees.
export const clean=x=>Math.abs(x)<1e-12?0:x;
export const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
export const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
export const norm=a=>Math.hypot(...a);
export const det2=A=>A[0][0]*A[1][1]-A[0][1]*A[1][0];
export const mul=(A,B)=>A.map(row=>B[0].map((_,j)=>row.reduce((s,x,k)=>s+x*B[k][j],0)));
export function calculate(id,v,x=1){const rad=v*Math.PI/180;
 switch(id){
 case'relation-mod':return{classes:Array.from({length:v},(_,r)=>[0,1,2,3,4,5].filter(a=>a%v===r)),value:v};
 case'relation-map':{let input=[-2,-1,0,1,2],output=input.map(a=>v===0?a:v===1?a*a:0),codomain=v===1?[0,1,4]:[-2,-1,0,1,2],one=new Set(output).size===5,onto=codomain.every(a=>output.includes(a));return{input,output,codomain,one,onto,value:new Set(output).size}}
 case'relation-compose':return{fg:v*x*x+1,gf:(v*x+1)**2,inverse:v===0?null:(x-1)/v,value:v*x*x+1};
 case'inverse-sin':return{value:Math.asin(v),f:Math.asin};
 case'inverse-cos':return{value:Math.acos(v),f:Math.acos,sum:Math.asin(v)+Math.acos(v)};
 case'inverse-tan':return{value:Math.atan(v),f:Math.atan};
 case'matrix-add':{let A=[[1,2],[0,1]],B=[[2,0],[1,3]],result=A.map((r,i)=>r.map((a,j)=>a+v*B[i][j]));return{A,B,result,value:result[0][0]}}
 case'matrix-product':{let A=[[1,v],[0,1]],B=[[1,0],[1,1]];return{A,B,AB:mul(A,B),BA:mul(B,A),value:v}}
 case'matrix-transpose':return{A:[[1,v],[2,3]],result:[[1,2],[v,3]],symmetric:v===2,value:v-2};
 case'det-area':return{a:[2,1],b:[v,3],det:6-v,value:Math.abs(6-v)};
 case'det-inverse':return{A:[[1,2],[1,v]],det:v-2,inverse:v===2?null:[[v/(v-2),-2/(v-2)],[-1/(v-2),1/(v-2)]],value:v-2};
 case'det-system':return{point:v===1?null:[3-1/(v-1),1/(v-1)],value:v-1};
 case'continuity-piece':return{value:v,continuous:v===1,limit:1};
 case'derivative-corner':return{value:Math.abs(v),slope:v===0?null:Math.sign(v)};
 case'derivative-chain':return{value:Math.sin(v*x),slope:v*Math.cos(v*x),point:[x,Math.sin(v*x)]};
 case'aod-increasing':return{value:v**3/3-v,slope:v*v-1,point:[v,v**3/3-v]};
 case'aod-max':return{value:v*(10-v),slope:10-2*v,width:10-v};
 case'aod-rate':return{value:4*Math.PI*v*v*.2,volume:4/3*Math.PI*v**3};
 case'integral-family':return{value:v};
 case'integral-sum':{let n=Math.round(v),dx=2/n,sum=dx**3*n*(n+1)*(2*n+1)/6;return{value:sum,exact:8/3,error:sum-8/3,n,dx}}
 case'integral-signed':return{value:0,area:v*v};
 case'area-parabola':return{value:v**3/3};
 case'area-circle':return{value:Math.PI*v*v/2,full:Math.PI*v*v};
 case'area-between':return{value:v**3/6};
 case'de-exponential':return{value:Math.exp(v),f:x=>Math.exp(v*x)};
 case'de-initial':return{value:v,f:x=>x*x+v};
 case'de-linear':return{value:v*(1-Math.exp(-1)),f:x=>v*(1-Math.exp(-x))};
 case'vector-sum':return{a:[2,1],b:[v,2],result:[2+v,3],value:Math.hypot(2+v,3)};
 case'vector-dot':return{value:clean(6*Math.cos(rad)),projection:clean(3*Math.cos(rad)),b:[2*Math.cos(rad),2*Math.sin(rad)]};
 case'vector-cross':return{value:clean(6*Math.sin(rad)),magnitude:Math.abs(clean(6*Math.sin(rad))),b:[2*Math.cos(rad),2*Math.sin(rad)]};
 case'space-line':return{point:[1+v,1+2*v,1+v],direction:[1,2,1],cosines:[1,2,1].map(a=>a/Math.sqrt(6)),value:v};
 case'space-angle':return{value:Math.acos(Math.min(1,Math.abs(Math.cos(rad))))*180/Math.PI,b:[Math.cos(rad),Math.sin(rad),0]};
 case'space-skew':return{value:Math.abs(v),intersect:v===0};
 case'lp-corners':{let vertices=[[0,0],[4,0],[4,2],[2,4],[0,4]],z=vertices.map(([x,y])=>v*x+2*y),best=Math.max(...z);return{vertices,z,best,optimal:vertices.filter((_,i)=>Math.abs(z[i]-best)<1e-8),value:best}}
 case'lp-resource':return{vertices:[[0,0],[v,0],[0,v]],point:[v,0],value:3*v};
 case'lp-unbounded':return{value:v,unbounded:true};
 case'prob-conditional':return{favourable:Math.floor(v/2),value:Math.floor(v/2)/v,independent:Math.floor(v/2)/v===.5};
 case'prob-total':return{value:.8*v+.3*(1-v),first:.8*v,second:.3*(1-v)};
 case'prob-bayes':{let total=.8*v+.3*(1-v);return{value:.8*v/total,total,first:.8*v,second:.3*(1-v)}}
 default:throw Error('Unknown Class 12 Maths scene '+id)
 }
}

import{drawArt10}from'./art10.js';
// Local, deterministic Canvas illustrations; no network assets or runtime dependencies.
import{drawPot}from'./art.js';import{hexVertices,petalGeometry}from'./construction.js';
export function drawArtwork(canvas,ch,step=9,level='Good'){
 if(ch.artTopic)return drawArt10(canvas,ch,step,level);const kind=ch.drawingKind||'pot';if(kind==='pot')return drawPot(canvas,step,level,ch.palette);
 const g=canvas.getContext('2d'),S=Math.max(0,Math.min(9,step)),C=ch.palette?.map(p=>p.color)||['#fff9e8','#dfa761','#b95a37','#533b32','#3d7258'];g.setTransform(canvas.width/600,0,0,canvas.height/400,0,0);g.clearRect(0,0,600,400);g.fillStyle=C[0];g.fillRect(0,0,600,400);g.lineWidth=level==='Beginner'?2.8:1.4;g.strokeStyle='#756554';g.lineCap='round';g.lineJoin='round';
 const path=(d,fill)=>{let p=new Path2D(d);if(fill){g.fillStyle=fill;g.fill(p)}g.stroke(p);return p};
 const ellipse=(x,y,rx,ry,fill)=>{g.beginPath();g.ellipse(x,y,rx,ry,0,0,Math.PI*2);if(fill){g.fillStyle=fill;g.fill()}g.stroke()};
 const tone=(x0,y0,x1,y1,light,mid,dark)=>{let a=g.createLinearGradient(x0,y0,x1,y1);a.addColorStop(0,light);a.addColorStop(.45,S>=5?mid:light);a.addColorStop(1,S>=6?dark:light);return a};
 const shadow=(x,y,rx)=>{if(S<7)return;g.save();g.translate(x,y);g.scale(1,.18);let a=g.createRadialGradient(0,0,0,0,0,rx);a.addColorStop(0,'#4b3b3266');a.addColorStop(1,'#4b3b3200');g.fillStyle=a;g.beginPath();g.arc(0,0,rx,0,7);g.fill();g.restore()};
 const guide=()=>{if(S!==1)return;g.save();g.setLineDash([5,5]);g.strokeStyle='#a1a89b';g.strokeRect(120,65,350,270);g.beginPath();g.moveTo(295,50);g.lineTo(295,350);g.stroke();g.restore()};
 if(S>=8&&['fruit','jug','drapery'].includes(kind)){g.fillStyle='#f0eddf';g.fillRect(0,300,600,100);g.strokeStyle='#d6cdb9';g.beginPath();g.moveTo(35,300);g.lineTo(565,300);g.stroke()}
 if(kind==='fruit'){
 shadow(325,315,180);let apple='M230 150 C190 117 143 159 151 213 C157 274 191 303 229 294 C265 308 300 268 304 214 C310 165 270 124 230 150 Z';let pear='M390 110 C364 108 373 159 352 187 C315 229 329 293 377 303 C427 315 471 277 456 232 C451 202 417 172 410 132 C408 114 399 108 390 110 Z';path(pear,S>=4?tone(345,170,463,220,C[0],C[2],C[4]):null);path(apple,S>=4?tone(155,150,305,240,C[0],C[1],C[4]):null);if(S>=2){path('M229 151 Q218 125 232 110');path('M390 115 Q382 93 394 83');path('M229 130 Q245 103 273 118 Q257 139 229 130',S>=7?C[3]:null)}if(S>=3){g.fillStyle='#6d6a5a';g.font='13px sans-serif';g.fillText('Light / प्रकाश ↘',55,53)}if(S>=7){ellipse(186,192,10,19,'#fff5d9');ellipse(365,198,8,19,'#fff7d5')}guide();
 }else if(kind==='jug'){
 shadow(316,325,170);let d='M220 94 Q252 83 285 94 L312 113 Q296 137 300 170 C307 200 333 246 321 292 Q306 329 240 326 Q180 326 169 294 C160 254 186 202 195 170 L197 113 Z';let fill=S>=4?tone(168,190,320,220,C[2],C[1],C[3]):null;path(d,fill);if(S>=2){path('M301 145 C417 121 430 288 322 284 L316 254 C382 265 378 164 306 178 Z',S>=4?C[1]:null);ellipse(242,96,42,10,S>=5?C[4]:null);path('M200 110 Q260 122 309 111')}if(S>=7){g.strokeStyle='#fffef3';g.lineWidth=7;path('M207 181 Q191 227 195 273')}guide();
 }else if(kind==='drapery'){
 let d='M123 80 L465 82 L450 295 Q407 327 365 310 Q314 344 267 315 Q211 341 155 312 Z';path(d,S>=4?C[1]:null);let folds=[[190,210,185],[300,280,290],[415,400,425]];if(S>=2)for(let [x,b,end]of folds){let q=`M${x} 83 Q${b} 190 ${end} 317 Q${end+20} 285 ${x+17} 83 Z`;path(q,S>=5?tone(x,0,x+20,0,C[0],C[2],S>=6?C[3]:C[2]):null)}if(S>=7){g.strokeStyle='#fffdf2';g.lineWidth=3;for(let[x,b,e]of folds)path(`M${x+4} 96 Q${b+3} 195 ${e+4} 299`)}if(S>=9){g.strokeStyle='#8b887c';path('M124 80L465 82')}guide();
 }else if(kind==='border'){
 g.strokeStyle=C[4];if(S>=0)g.strokeRect(63,65,474,270);if(S>=1)g.strokeRect(80,82,440,236);if(S>=2){g.save();g.setLineDash([3,6]);for(let x=100;x<520;x+=40){g.beginPath();g.moveTo(x,65);g.lineTo(x,100);g.stroke()}g.restore()}if(S>=3){for(let x=100;x<=500;x+=40)for(let y of[83,317]){g.save();g.translate(x,y);path('M-15 0Q0 -25 15 0Q0 25 -15 0',S>=4?C[1]:null);if(S>=5)ellipse(0,0,4,4,C[2]);g.restore()}}if(S>=5)for(let y=123;y<300;y+=40)for(let x of[80,520]){path(`M${x-8} ${y}L${x} ${y-14}L${x+8} ${y}L${x} ${y+14}Z`,S>=6?C[1]:null)}if(S>=7)for(let[x,y]of[[80,83],[520,83],[80,317],[520,317]])ellipse(x,y,9,9,C[2]);if(S>=8){g.strokeStyle='#b09b6f';g.strokeRect(99,104,402,192)}if(S>=9){g.fillStyle='#6e795d';g.font='20px serif';g.textAlign='center';g.fillText('RHYTHM · लय',300,210);g.textAlign='start'}
 }else if(kind==='poster'){
 g.strokeRect(150,35,300,330);if(S===1){g.save();g.setLineDash([6,5]);g.strokeRect(170,55,260,55);g.strokeRect(185,128,230,145);g.strokeRect(170,298,260,45);g.restore()}if(S>=3){g.fillStyle=S>=6?C[4]:'#9f9e8d';g.font='bold 27px sans-serif';g.textAlign='center';g.fillText('SAVE WATER',300,89)}if(S>=2){let drop='M300 130 C278 164 247 197 247 224 C247 290 353 290 353 224 C353 197 321 164 300 130 Z';path(drop,S>=5?C[1]:null);if(S>=7){g.strokeStyle=C[2];g.lineWidth=5;path('M276 201Q259 235 280 247')}}if(S>=7){g.fillStyle=C[3];g.font='20px sans-serif';g.fillText('जल बचाएँ',300,317)}if(S>=8){g.fillStyle='#647261';g.font='13px sans-serif';g.fillText('Every drop matters',300,341)}if(S>=8){g.strokeStyle='#437e79';g.lineWidth=4;g.strokeRect(150,35,300,330)}if(S>=2){g.strokeStyle='#718580';g.lineWidth=3;path('M360 153L385 153L385 177L368 177M376 143V153M366 143H386')}g.textAlign='start';
 }else if(kind==='lettering'){
 const top=115,bottom=260;if(S<=3){g.save();g.setLineDash([4,5]);g.strokeStyle='#b2ad99';for(let y of[top,bottom]){g.beginPath();g.moveTo(70,y);g.lineTo(530,y);g.stroke()}g.restore()}g.font='bold 115px sans-serif';g.textAlign='center';g.lineWidth=1;if(S<2){g.strokeRect(132,112,336,148);if(S===1)for(let x of[138,248,358])g.strokeRect(x,115,103,145)}else g.strokeText('ART',300,240);if(S>=4){g.fillStyle=S>=5?C[1]:C[2];g.fillText('ART',300,240)}if(S>=8){g.save();g.shadowColor='#5f4d4060';g.shadowBlur=0;g.shadowOffsetX=4;g.shadowOffsetY=4;g.fillStyle=C[1];g.fillText('ART',300,240);g.restore()}if(S>=7){g.fillStyle='#fff4d4';g.font='bold 113px sans-serif';g.globalAlpha=.2;g.fillText('ART',298,237);g.globalAlpha=1}if(S>=8){g.fillStyle='#57725d';g.font='30px sans-serif';g.fillText('कला',300,320)}if(S>=9){g.strokeStyle=C[3];g.beginPath();g.moveTo(165,275);g.lineTo(435,275);g.stroke()}g.textAlign='start';
 }else if(kind==='pattern'||kind==='rangoli'){
 // Reference thumbnails use the same construction sequence as the live engine.
 drawPattern(g,kind,Math.min(8,S+1),C[2]);
 }
 if(S>=9){g.fillStyle='#706858';g.font='12px sans-serif';g.fillText('Guided study · निर्देशित अभ्यास',25,386)}
}
export function drawPattern(g,kind,n,color='#b95a37',options={}){
 const x=300,y=200,r=110,secondary=options.secondary||'#437c83';
 const pts=hexVertices(r,x,y),geometry=petalGeometry(r);
 g.save();g.strokeStyle='#657463';g.lineWidth=1.5;g.lineCap='round';
 const line=(a,b,p=1)=>{g.beginPath();g.moveTo(...a);g.lineTo(a[0]+(b[0]-a[0])*p,a[1]+(b[1]-a[1])*p);g.stroke()};
 const circle=(cx,cy,rad,p=1,fill)=>{g.beginPath();g.arc(cx,cy,rad,-Math.PI/2,-Math.PI/2+Math.PI*2*p);if(fill){g.fillStyle=fill;g.fill()}g.stroke()};
 const petal=(i,p,fill)=>{g.save();g.translate(x,y);g.rotate(i*Math.PI/3-Math.PI/2);g.beginPath();g.moveTo(0,0);const h=geometry.centres[0][1];if(p<=.5){g.arc(r/2,h,r,-2*Math.PI/3,-2*Math.PI/3+Math.PI/3*p*2)}else{g.arc(r/2,h,r,-2*Math.PI/3,-Math.PI/3);g.arc(r/2,-h,r,Math.PI/3,Math.PI/3+Math.PI/3*(p-.5)*2)}if(fill&&p===1){g.closePath();g.fillStyle=fill;g.fill()}g.stroke();g.restore()};
 const sequence=(amount,count,fn)=>{for(let i=0;i<count;i++){let p=Math.max(0,Math.min(1,amount*count-i));if(p>0)fn(i,p)}};
 function stage(k,p){
  if(k===1){circle(x,y,3,p,p===1?'#394d42':null)}
  if(k===2&&!(options.clean&&n===8)){g.save();g.setLineDash([4,5]);sequence(p,2,(i,q)=>line(i?[x,y-140]:[x-140,y],i?[x,y+140]:[x+140,y],q));g.restore()}
  if(k===3)circle(x,y,r,p);
  if(k===4&&!(options.clean&&n===8))sequence(p,6,(i,q)=>{let[a,b]=pts[i];circle(a,b,3,q,q===1?'#3a5b4b':null);if(options.tools&&q<1){g.save();g.strokeStyle='#b7844380';let prev=pts[(i+5)%6],a0=Math.atan2(b-prev[1],a-prev[0]);g.beginPath();g.arc(prev[0],prev[1],r,a0-.12,a0+.12);g.stroke();g.restore()}});
  if(k===5)sequence(p,kind==='pattern'?12:6,(i,q)=>line(i<6?pts[i]:[x,y],i<6?pts[(i+1)%6]:pts[i-6],q));
  if(k===6)sequence(p,6,(i,q)=>petal(i,q));
  if(k===7){circle(x,y,r+18,Math.min(1,p*2));if(kind==='pattern'&&p>.5)circle(x,y,r+25,(p-.5)*2);if(kind==='rangoli'&&p>.5)sequence((p-.5)*2,18,(i,q)=>circle(x+(r+28)*Math.cos(i*Math.PI/9),y+(r+28)*Math.sin(i*Math.PI/9),3,q))}
  if(k===8){sequence(p,6,(i,q)=>{g.save();g.globalAlpha=q;petal(i,1,i%2?color:secondary);g.restore()});if(kind==='rangoli')sequence(p,18,(i,q)=>{g.save();g.globalAlpha=q;circle(x+(r+28)*Math.cos(i*Math.PI/9),y+(r+28)*Math.sin(i*Math.PI/9),3,1,i%2?color:secondary);g.restore()})}
 }
 for(let k=1;k<=Math.min(8,n);k++)stage(k,1);
 if(options.activeStep>n)stage(options.activeStep,options.progress||0);
 if(options.labels){g.fillStyle='#28483b';g.font='13px Inter, sans-serif';g.fillText('O',x+7,y+17);if(n>=4)pts.forEach(([a,b],i)=>g.fillText(String.fromCharCode(65+i),a+(a<x?-16:7),b+(b<y?-8:17)));if(n>=3){g.save();g.setLineDash([2,5]);line([x,y],pts[1]);g.restore();g.fillText('r',x+45,y-32)}}
 if(options.tools&&options.activeStep&&options.progress<1){let k=options.activeStep,p=options.progress||0;if(k===2||k===5){g.save();g.strokeStyle='#a78b5f';g.fillStyle='#cda96b44';g.fillRect(x-150,y-12,300,24);g.strokeRect(x-150,y-12,300,24);for(let i=0;i<=15;i++)line([x-150+i*20,y-12],[x-150+i*20,y-(i%5?4:-1)]);g.restore()}else if(k>=3&&k<=7){let pivot=[x,y],a=-Math.PI/2+p*Math.PI*2;if(k===4){let i=Math.min(5,Math.floor(p*6));pivot=pts[(i+5)%6];a=Math.atan2(pts[i][1]-pivot[1],pts[i][0]-pivot[0])}if(k===6){let i=Math.min(5,Math.floor(p*6)),angle=i*Math.PI/3-Math.PI/2;pivot=[x+r*Math.cos(angle+Math.PI/3),y+r*Math.sin(angle+Math.PI/3)];a=Math.atan2(y-pivot[1],x-pivot[0])}let tip=[pivot[0]+r*Math.cos(a),pivot[1]+r*Math.sin(a)],hinge=[(pivot[0]+tip[0])/2,(pivot[1]+tip[1])/2-24];g.save();g.lineWidth=4;g.strokeStyle='#9c6b40';line(pivot,hinge);g.strokeStyle='#396d86';line(hinge,tip);g.fillStyle='#3f6156';circle(...pivot,3,1,'#3f6156');circle(...hinge,4,1,'#3f6156');g.restore()}}
 g.restore();
}

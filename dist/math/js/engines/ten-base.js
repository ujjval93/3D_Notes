import{Base,fmt,svgEl}from'./base.js';export{fmt,svgEl};
export class TenBase extends Base{
 constructor(host,ctx){super(host,ctx);this.id=ctx.chapter.id;this.mode=ctx.scene.id;this.playing=false;this.speed=1;for(let c of ctx.scene.controls)this.slider(c.key,c.label.en,c.label.hi,c.min,c.max,c.initial,c.step,c.unit);this.svg.dataset.sceneId=this.mode;this.svg.setAttribute('aria-describedby','mathLiveReadout');this.readout.id='mathLiveReadout'}
 text(p,t,extra={}){if(this.labels)super.text(p,t,extra)}
 say(en,hi){return this.ctx.dual(en,hi)}
 report(lines,reason){this.output(lines.join('\n')+(reason?'\n'+this.say(...reason):''))}
 mark(p,label){this.circle(p,.1,'gold');if(this.labels)this.text([p[0]+.16,p[1]+.25],label)}
 curve(f){let run=[];for(let x=-8.5;x<=8.5;x+=.04){let y=f(x);if(Number.isFinite(y)&&Math.abs(y)<=5.4)run.push([x,y]);else if(run.length){this.path(run);run=[]}}if(run.length)this.path(run)}
 equation(a,b,c,cls='shape'){if(Math.abs(a)+Math.abs(b)<1e-10)return;if(Math.abs(b)>1e-9)this.line([-10,(-c+10*a)/b],[10,(-c-10*a)/b],cls);else this.line([-c/a,-6],[-c/a,6],cls)}
 resetView(){this.scale=31;this.cx=300;this.cy=195;this.draw()}
 destroy(){if(this.frame)cancelAnimationFrame(this.frame);this.frame=null;this.playing=false;super.destroy()}
}

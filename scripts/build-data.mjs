import fs from 'node:fs';import {specs} from './scene-specs.mjs';
const b=(en,hi)=>({en,hi});const chapters=[...JSON.parse(fs.readFileSync('content-part1.json')),...JSON.parse(fs.readFileSync('content-part2.json'))];const copy=JSON.parse(fs.readFileSync('scene-copy.json'));
const titles=['Matter in Our Surroundings','Is Matter Around Us Pure?','Atoms and Molecules','Structure of the Atom','The Fundamental Unit of Life','Tissues','Motion','Force and Laws of Motion','Gravitation','Work and Energy','Sound','Improvement in Food Resources'];
const selector=(id,title,options)=>({id,label:b(...title),options:options.map((x,i)=>({value:i,label:b(...x)}))});
const extra={states:[selector('state',['State','अवस्था'],[['Solid','ठोस'],['Liquid','द्रव'],['Gas','गैस']])],separation:[selector('method',['Method','विधि'],[['Filtration','छानना'],['Evaporation','वाष्पीकरण'],['Magnetic separation','चुम्बकीय पृथक्करण'],['Distillation','आसवन']])],'earth-moon':[selector('location',['Location','स्थान'],[['Earth','पृथ्वी'],['Moon','चन्द्रमा']])],work:[{id:'angle',label:b('Force angle','बल का कोण'),options:[0,90,180].map(x=>({value:x,label:b(x+'°',x+'°')}))}]};
const secondary={trolley:['Mass','द्रव्यमान',1,6,.5,2,'kg'],momentum:['Velocity','वेग',1,5,.5,3,'m/s'],work:['Displacement','विस्थापन',0,10,1,3,'m'],'air-wave':['Relative amplitude','सापेक्ष आयाम',.2,1,.1,.5,'×']};
const legend=(items)=>items.map(([color,en,hi])=>({color,label:b(en,hi)}));
const colors={green:'#a5dfa5',blue:'#7ec9f4',gold:'#f0c775',pink:'#edb4c4',white:'#e3ece5',dark:'#8eacb6'};let legends={};
function group(ids,arr){for(let id of ids.split(' '))legends[id]=legend(arr.map(([c,en,hi])=>[colors[c],en,hi]));}
group('states heating',[['green','Condensed-state particle','ठोस/द्रव कण'],['gold','Gas particle','गैस कण']]);
group('evaporation',[['blue','Liquid particle','द्रव कण'],['gold','Escaping particle','निकलता कण']]);group('diffusion',[['green','Substance A','पदार्थ A'],['gold','Substance B','पदार्थ B']]);
group('solution tyndall suspension separation',[['blue','Solvent / fine particles','विलायक / सूक्ष्म कण'],['gold','Solute / larger particles','विलेय / बड़े कण']]);
group('water ammonia carbon-dioxide conservation',[['white','Hydrogen','हाइड्रोजन'],['green','Oxygen','ऑक्सीजन'],['blue','Nitrogen','नाइट्रोजन'],['dark','Carbon','कार्बन']]);group('salt',[['blue','Na+ ion','Na+ आयन'],['green','Cl− ion','Cl− आयन']]);
group('sodium oxygen magnesium chlorine isotopes',[['gold','Nucleus','नाभिक'],['blue','Electron','इलेक्ट्रॉन']]);group('cell-compare organelles osmosis',[['blue','Nucleus / water dots','केन्द्रक / जल बिन्दु'],['gold','Mitochondrion','माइटोकॉन्ड्रिया'],['green','Chloroplast / wall','हरितलवक / भित्ति'],['pink','Golgi apparatus','गॉल्जी तन्त्र']]);
group('plant-tissue animal-tissue muscle neuron',[['blue','Nucleus / cell body','केन्द्रक / कोशिकाकाय'],['pink','Muscle / impulse','पेशी / आवेग'],['green','Cell boundaries','कोशिका सीमाएँ'],['gold','Thick wall / axon','मोटी भित्ति / अक्षतन्तु']]);
group('distance-time velocity-time circular trolley momentum inertia work',[['gold','Object','वस्तु'],['green','Force / velocity / card','बल / वेग / कार्ड'],['blue','Displacement / radial direction','विस्थापन / त्रिज्यीय दिशा']]);
group('orbit free-fall earth-moon buoyancy',[['gold','Object / satellite','वस्तु / उपग्रह'],['blue','Earth / water','पृथ्वी / जल'],['green','Force / second object','बल / दूसरा पिण्ड']]);
group('pendulum fall-energy',[['gold','Bob / total energy','पिण्ड / कुल ऊर्जा'],['blue','Kinetic energy','गतिज ऊर्जा'],['green','Potential energy','स्थितिज ऊर्जा']]);group('string-wave air-wave echo',[['green','String / air / reflector','डोरी / वायु / परावर्तक'],['gold','Tracked point / source','चिन्हित बिन्दु / स्रोत'],['blue','Wave direction / pulse','तरंग दिशा / स्पन्द']]);group('crop-rotation manure food-chain',[['green','Plants / producers','पौधे / उत्पादक'],['gold','Organic matter / consumer','जैविक पदार्थ / उपभोक्ता'],['blue','Water / nutrients / consumer','जल / पोषक / उपभोक्ता']]);
const control=a=>({label:b(a[0],a[1]),min:a[2],max:a[3],step:a[4],initial:a[5],unit:a[6]});
chapters.forEach((ch,i)=>{ch.title.en=titles[i];ch.scenes=specs.filter(s=>s[0]===ch.id).map(s=>{if(!copy[s[1]])throw Error('Missing scene copy '+s[1]);return{id:s[1],title:b(s[2],s[3]),kind:s[4],controls:[control(s[5]),...(secondary[s[1]]?[control(secondary[s[1]])]:[])],selectors:extra[s[1]]||[],noteIndex:ch.id==='matter'?({states:2,heating:3,evaporation:7,diffusion:1}[s[1]]):Math.min(s[6],ch.notes.length-1),legend:legends[s[1]],...copy[s[1]]};});});
function ascii(x){if(typeof x==='string')return x.replace(/[\u0966-\u096f]/g,c=>String(c.charCodeAt(0)-0x966)).replace(/[₀-₉]/g,c=>String(c.charCodeAt(0)-0x2080));if(Array.isArray(x))return x.map(ascii);if(x&&typeof x==='object')return Object.fromEntries(Object.entries(x).map(([k,v])=>[k,ascii(v)]));return x;}
const graphDefs={
 'distance-time':[1,100,0,b('Distance–time graph','दूरी–समय ग्राफ'),b('Distance (m)','दूरी (m)')],
 'velocity-time':[1,52,0,b('Velocity–time graph','वेग–समय ग्राफ'),b('Velocity (m/s)','वेग (m/s)')],
 circular:[2,12.5,0,b('Acceleration over time','समय के साथ त्वरण'),b('Acceleration (m/s²)','त्वरण (m/s²)')],
 trolley:[2,12,0,b('Acceleration over time','समय के साथ त्वरण'),b('Acceleration (m/s²)','त्वरण (m/s²)')],
 momentum:[2,25,0,b('Momentum over time','समय के साथ संवेग'),b('Momentum (kg·m/s)','संवेग (kg·m/s)')],
 inertia:[1,3,0,b('Contact impulse: illustrative Δv','सम्पर्क का आवेग: सांकेतिक Δv'),b('Final Δv for this contact (m/s)','इस सम्पर्क का अंतिम Δv (m/s)')],
 orbit:[0,3,0,b('Circular orbit: constant radius','वृत्तीय कक्षा: स्थिर त्रिज्या'),b('Radius factor (×)','त्रिज्या गुणक (×)')],
 'free-fall':[1,2,0,b('Distance fallen over time','समय के साथ गिरने की दूरी'),b('Distance fallen (m)','गिरने की दूरी (m)')],
 'earth-moon':[2,490,0,b('Weight at the chosen location','चुने स्थान पर भार'),b('Weight (N)','भार (N)')],
 buoyancy:[2,10,0,b('Buoyant force in this model','इस मॉडल में उत्प्लावन बल'),b('Buoyant force (N)','उत्प्लावन बल (N)')],
 pendulum:[2,5,0,b('Mechanical energy','यान्त्रिक ऊर्जा'),b('Energy (J)','ऊर्जा (J)')],
 work:[2,200,-200,b('Work for the selected force and displacement','चुने बल व विस्थापन का कार्य'),b('Work (J)','कार्य (J)')],
 'fall-energy':[2,100,0,b('Energy conversion','ऊर्जा परिवर्तन'),b('Energy (J)','ऊर्जा (J)')]
};
for(const ch of chapters)for(const scene of ch.scenes){const g=graphDefs[scene.id];if(g)scene.graph={readout:g[0],yMax:g[1],yMin:g[2],title:g[3],yLabel:g[4],xLabel:b('Time (s)','समय (s)')};}
fs.mkdirSync('dist/data',{recursive:true});
const clean=ascii(chapters);
// Retire teacher-planning/homework content and standalone key-term boxes from public data.
for(const ch of clean){for(const key of ['plan','homework','homeActivity','activity','periods'])delete ch[key];for(const note of ch.notes)delete note.terms;}
const class9={id:'9',title:b('Class 9','कक्षा 9'),subjects:[b('Science','विज्ञान'),b('Mathematics','गणित'),b('Hindi','हिंदी'),b('English','अंग्रेज़ी'),b('Social Science','सामाजिक विज्ञान')],editionBasis:clean[0].editionBasis,chapters:clean};
fs.writeFileSync('dist/data/class-9.json',JSON.stringify(class9));
// Compatibility export for prior downloads and the requested legacy-path digit check.
// The app and offline cache read class-9.json only; both exports share one source.
fs.writeFileSync('dist/data/chapters.json',JSON.stringify(clean));
console.log('Class 9:',chapters.length,'chapters /',chapters.reduce((n,c)=>n+c.scenes.length,0),'scenes');

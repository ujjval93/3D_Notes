import {renderers} from './renderers.mjs';
import {specs} from './scene-specs.mjs';
import fs from 'node:fs';
fs.mkdirSync('dist/js/scenes',{recursive:true});
for(const row of specs){const kind=row[4];if(!renderers[kind])throw Error('Missing '+kind);fs.writeFileSync(`dist/js/scenes/${kind}.js`,`import {b,fmt,clamp,shells,heating,work,buoyancy,pendulum,falling} from '../math.js';\nimport {C,reflect,read,particles,molecule,atom,cell,neuron,plants,organelles} from '../scene-utils.js';\nexport default ${renderers[kind].toString()};\n`)}
console.log('Built '+specs.length+' isolated scene modules');

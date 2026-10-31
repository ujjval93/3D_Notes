// Keep existing chapter bookmarks working after introducing the subject landing page.
if(location.hash&&location.hash!=='#subjects')location.replace('science.html'+location.search+location.hash);
const key='vigyan-darshan-v3';let state={};try{state=JSON.parse(localStorage.getItem(key)||'{}')}catch{}
const language=document.getElementById('hubLanguage'),theme=document.getElementById('hubTheme');
function save(){try{localStorage.setItem(key,JSON.stringify(state))}catch{}}
function apply(){const lang=['bi','en','hi'].includes(state.language)?state.language:'bi';document.documentElement.dataset.language=lang;language.value=lang;const dark=state.theme==='dark'||state.theme!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.dataset.theme=dark?'dark':'light';theme.textContent=dark?'☀':'🌙';document.documentElement.style.fontSize=([15,17,19].includes(state.fontSize)?state.fontSize:17)+'px'}
language.onchange=()=>{state.language=language.value;save();apply()};theme.onclick=()=>{state.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';save();apply()};apply();
if('serviceWorker'in navigator&&isSecureContext)navigator.serviceWorker.register('./sw.js').catch(()=>{document.getElementById('hubOffline').textContent=state.language==='en'?'Offline download was interrupted. Reopen while connected.':'ऑफलाइन डाउनलोड रुक गया। इंटरनेट जोड़कर फिर खोलें।'});

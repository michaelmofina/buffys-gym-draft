(() => {
 const originals=['barlow','archivo','fraunces'];
 const local=['localhost','127.0.0.1','[::1]'].includes(location.hostname);
 const references={
  blok:{name:'Suisse Intl Medium',family:'Buffy Suisse Preview',weight:'500',url:'https://framerusercontent.com/assets/I60ut6HTqCBlIvR4XG6iFKT2oA.ttf'},
  dogpound:{name:'Chalet Comprimé Hong Kong Sixty',family:'Buffy Chalet Preview',weight:'400',url:'.review-fonts/chalet-preview.woff'}
 };
 const allowed=[...originals,...Object.keys(references),'mixed'];
 const params=new URLSearchParams(location.search);
 let saved='barlow';try{saved=sessionStorage.getItem('buffy-heading')||saved;}catch{}
 const selected=allowed.includes(params.get('type'))?params.get('type'):'mixed';
 const loaded=new Map();let selection=selected;
 {const sheet=document.createElement('link');sheet.rel='stylesheet';sheet.href='reference-type.css';document.head.append(sheet);}
 let panel;
 async function apply(value,explicit=false){
  selection=value;document.documentElement.dataset.type=value;
  if(originals.includes(value))try{sessionStorage.setItem('buffy-heading',value);}catch{}
  if(explicit){const url=new URL(location.href);url.searchParams.set('type',value);history.replaceState(null,'',url);}
  if(panel){panel.querySelectorAll('[data-type]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.type===value)));panel.querySelector('.reference-status').textContent='';}
  if(!references[value]&&value!=='mixed')return;
  const fonts=value==='mixed'?[references.dogpound,references.blok]:[references[value]];
  const status=panel?.querySelector('.reference-status');
  if(status)status.textContent='Loading reference fonts…';
  try{
   await Promise.all(fonts.map(f=>{
    if(!loaded.has(f.family)){const face=new FontFace(f.family,`url("${f.url}")`,{weight:f.weight});loaded.set(f.family,face.load().then(font=>{document.fonts.add(font);return font;}));}
    return loaded.get(f.family);
   }));
   if(status&&selection===value)status.textContent=(value==='mixed'?'Chalet headlines · Suisse subheadings · Archivo body':fonts[0].name)+' · Local preview';
   document.documentElement.dataset.referenceFonts='loaded';
  }catch{fonts.forEach(f=>loaded.delete(f.family));if(status&&selection===value)status.textContent='A reference font could not load. The fallback shown is not the intended font.';}

 }
 if(params.get('review')==='type'){
  panel=document.createElement('aside');panel.className='type-review';panel.setAttribute('aria-label','Typography review');
  panel.innerHTML=(local?'<span>Typography</span><button data-type="mixed">Chalet + Suisse</button><button data-type="blok">BLOK · Suisse</button><button data-type="dogpound">DOGPOUND · Chalet</button><button data-type="barlow">Previous version</button><a href="typography.html">Browse all 25</a>':'<span>Heading options</span><button data-type="barlow">Barlow · athletic</button><button data-type="archivo">Archivo · bold</button><button data-type="fraunces">Fraunces · editorial</button>')+'<button class="review-close">Hide options</button><span class="reference-status" role="status"></span>';
  document.querySelector('main').prepend(panel);
  panel.querySelectorAll('[data-type]').forEach(b=>b.addEventListener('click',()=>apply(b.dataset.type,true)));
  panel.querySelector('.review-close').addEventListener('click',()=>panel.hidden=true);
 }
 apply(selected);
})();

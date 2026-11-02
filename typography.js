(() => {
const $=s=>document.querySelector(s),key='buffys-type-studio-v1';let saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}')||{};}catch{}
const ids=new Set(FONT_OPTIONS.map(f=>f.id));let shortlist=new Set(Array.isArray(saved.shortlist)?saved.shortlist.filter(id=>ids.has(id)):[]),picked=ids.has(saved.picked)?saved.picked:null,filter='All',current=0;
function persist(){try{localStorage.setItem(key,JSON.stringify({shortlist:[...shortlist],picked}));}catch{$('#choice').textContent='Browser storage unavailable; keep a note of your choice.';}}
function sample(){return $('#sample').value.trim()||'You got that dog in ya.';}
function style(el,f){el.style.setProperty('--font',`"${f.name}"`);el.style.setProperty('--weight',f.weight);}
function button(text,fn,cls=''){const b=document.createElement('button');b.textContent=text;b.className=cls;b.onclick=fn;return b;}
function toggle(id){shortlist.has(id)?shortlist.delete(id):shortlist.add(id);persist();render();updateDialog();}
function choose(id){picked=picked===id?null:id;persist();render();updateDialog();}
function render(){
 const list=FONT_OPTIONS.filter(f=>filter==='All'||filter===f.group||(filter==='Shortlist'&&shortlist.has(f.id)));$('#grid').replaceChildren();
 list.forEach(f=>{const card=document.createElement('article');card.className='card'+(picked===f.id?' chosen':'');card.setAttribute('aria-label',f.name);style(card,f);
 card.innerHTML='<div class="card-top"><div><h2></h2><p class="category"></p></div></div><p class="specimen"></p><p class="section-sample">Meet Buffy.</p><p class="body-sample">A small-class strength gym on College St. Up to 10 people, a coach who knows your lifts, and the same faces at seven in the morning.</p><p class="note"></p><div class="card-actions"></div>';
 card.querySelector('h2').textContent=f.name;card.querySelector('.category').textContent=f.group;card.querySelector('.specimen').textContent=sample();card.querySelector('.note').textContent=f.note;
 const short=button(shortlist.has(f.id)?'Shortlisted ✓':'Shortlist',()=>toggle(f.id));short.setAttribute('aria-pressed',shortlist.has(f.id));short.setAttribute('aria-label','Shortlist '+f.name);card.querySelector('.card-top').append(short);
 const actions=card.querySelector('.card-actions');actions.append(button('View larger',()=>{current=FONT_OPTIONS.indexOf(f);updateDialog();$('#detail').showModal();}),button(picked===f.id?'Picked ✓':'Pick this font',()=>choose(f.id),'pick'));
 const a=document.createElement('a');a.textContent='Font source ↗';a.href='https://fonts.google.com/specimen/'+f.name.replaceAll(' ','+');a.target='_blank';a.rel='noopener';actions.append(a);$('#grid').append(card);
 });
 $('#short-count').textContent=shortlist.size;$('#result-count').textContent=list.length+' option'+(list.length===1?'':'s');$('#empty').hidden=list.length>0;$('#choice').textContent=picked?'Your pick: '+FONT_OPTIONS.find(f=>f.id===picked).name:'No font picked yet.';
}
function updateDialog(){const f=FONT_OPTIONS[current];style($('#detail'),f);$('#detail-title').textContent=f.name;$('#detail-note').textContent=f.note;$('.preview-headline').textContent=sample();$('#detail-short').textContent=shortlist.has(f.id)?'Shortlisted ✓':'Shortlist';$('#detail-short').setAttribute('aria-pressed',shortlist.has(f.id));$('#detail-pick').textContent=picked===f.id?'Picked ✓':'Pick this font';}
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',x===b));render();});
$('#sample').oninput=()=>{document.querySelectorAll('.specimen').forEach(e=>e.textContent=sample());updateDialog();};$('#case').onchange=e=>document.documentElement.style.setProperty('--case',e.target.value);$('#size').oninput=e=>{document.documentElement.style.setProperty('--size',e.target.value+'px');$('#size-value').textContent=e.target.value+'px';};
$('#close-detail').onclick=()=>$('#detail').close();$('#previous').onclick=()=>{current=(current-1+FONT_OPTIONS.length)%FONT_OPTIONS.length;updateDialog();};$('#next').onclick=()=>{current=(current+1)%FONT_OPTIONS.length;updateDialog();};$('#detail-short').onclick=()=>toggle(FONT_OPTIONS[current].id);$('#detail-pick').onclick=()=>choose(FONT_OPTIONS[current].id);render();
})();

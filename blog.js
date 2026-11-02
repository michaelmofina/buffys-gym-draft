(() => {
 const key='buffys-post-drafts-v1';
 const covers=['assets/raw/10-may06-photo.jpg','assets/books/p1.jpg','assets/Actual/Selected/scan-9-photo-01.jpg'];
 const initial=[
 {id:'your-first-class',title:'What actually happens in your first class',author:'',category:'Coaching',cover:0,excerpt:"Nobody is watching you. Here's the hour, minute by minute, so you can stop imagining the worst version of it.",body:'Article copy to come.'},
 {id:'reading-your-book',title:'How to read your own handwriting',author:'',category:'The books',cover:1,excerpt:"Sets, reps, the little arrows, and why we cross a number out instead of erasing it.",body:'Article copy to come.'},
 {id:'eight-poses',title:'Eight poses, one Saturday',author:'',category:'Workshops',cover:2,excerpt:'We brought in a coach to teach the classic bodybuilding poses. Everyone was terrible, then everyone was excellent.',body:'Article copy to come.'}
 ];
 let drafts=[];try {const saved=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(saved))drafts=saved.filter(p=>p&&typeof p.id==='string'&&typeof p.title==='string'&&typeof p.body==='string').map(p=>({...p,cover:Math.max(0,Math.min(2,Number(p.cover)||0))}));}catch{}
 const posts=[...initial];drafts.forEach(p=>{const i=posts.findIndex(x=>x.id===p.id);if(i<0)posts.unshift(p);else posts[i]=p;});
 const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n;};
 const image=p=>{const im=el('img');im.src=covers[p.cover]||covers[0];im.alt=p.title;return im;};
 const list=document.querySelector('#blog-posts');
 if(list){const secondary=el('div',null,'blog-list');posts.forEach((p,i)=>{const card=el('article',null,i===0?'blog-lead':'');const link=el('a');link.href='article.html?post='+encodeURIComponent(p.id);link.append(image(p));const text=el('div');text.append(el('p',p.category||'From the gym','mono'),el('h2',p.title),el('p',p.excerpt||''));if(i===0){const textLink=el('a');textLink.href=link.href;textLink.append(text);card.append(link,textLink);list.append(card);}else{link.append(text);card.append(link);secondary.append(card);}});list.append(secondary);}
 const article=document.querySelector('#article-content');
 if(article){const id=new URLSearchParams(location.search).get('post');const p=posts.find(p=>p.id===id);if(!p){article.append(el('h1','Post not found.'),el('p','This draft may only be available in the browser where it was saved.'));}else{document.title=p.title+" · Buffy's Gym";article.append(el('h1',p.title),el('p',[p.category,p.author].filter(Boolean).join(' · '),'mono'),image(p));article.querySelector('img').className='article-cover';const body=el('div',null,'article-body');p.body.split(/\n\s*\n/).forEach(t=>body.append(el('p',t)));article.append(body,el('p','Draft preview · not published','preview-note'));}}
 const form=document.querySelector('#post-form');if(!form)return;
 const choice=document.querySelector('#post-choice'),status=document.querySelector('#editor-status');
 const fields=['title','author','category','excerpt','cover','body'];let editing='';
 const options=()=>{choice.replaceChildren(new Option('New post',''));posts.forEach(p=>choice.add(new Option(p.title,p.id)));};options();
 choice.addEventListener('change',()=>{editing=choice.value;const p=posts.find(p=>p.id===editing)||{};fields.forEach(f=>document.getElementById('post-'+f).value=p[f]??(f==='cover'?0:''));status.textContent='';});
 function save(){if(!form.reportValidity())return null;const p={id:editing||'draft-'+crypto.randomUUID()};fields.forEach(f=>p[f]=document.getElementById('post-'+f).value.trim());p.cover=Number(p.cover);const next=drafts.filter(x=>x.id!==p.id).concat(p);try{localStorage.setItem(key,JSON.stringify(next));}catch{status.textContent='Could not save in this browser. Copy your text before leaving.';return null;}drafts=next;editing=p.id;const i=posts.findIndex(x=>x.id===p.id);if(i<0)posts.unshift(p);else posts[i]=p;options();choice.value=p.id;status.textContent='Draft saved on this device.';return p;}
 form.addEventListener('submit',e=>{e.preventDefault();save();});
 document.querySelector('#preview-post').addEventListener('click',()=>{const p=save();if(p)location.href='article.html?post='+encodeURIComponent(p.id);});
 document.querySelector('#export-posts').addEventListener('click',()=>{if(!drafts.length){status.textContent='Save a draft first.';return;}const url=URL.createObjectURL(new Blob([JSON.stringify(drafts,null,2)],{type:'application/json'}));const a=el('a');a.href=url;a.download='buffys-blog-drafts.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Drafts exported.';});
})();

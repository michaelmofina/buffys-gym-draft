(() => {
  if (!['localhost','127.0.0.1','[::1]'].includes(location.hostname)) return;
  const fields = [...document.querySelectorAll('[data-copy]')];
  if (!fields.length) return;
  const baseText = node => [...node.childNodes].map(child => child.nodeType === 3 ? child.textContent.replace(/\s+/g,' ') : child.nodeName === 'BR' ? '\n' : baseText(child)).join('');
  const baseline = new Map(fields.map(el => [el.dataset.copy,baseText(el).trim().replace(/ *\n */g,'\n')]));
  const tools = document.createElement('aside');
  tools.hidden = true;
  tools.className = 'copy-tools'; tools.setAttribute('aria-label','Copy editor');
  tools.innerHTML = '<div class="copy-state"><strong>Copy editor</strong><span role="status" aria-live="polite">Connecting…</span></div><button type="button" class="copy-toggle">Edit copy</button><button type="button" class="copy-download">Download backup</button>';
  document.body.append(tools);
  const status = tools.querySelector('[role="status"]');
  const toggle = tools.querySelector('.copy-toggle');
  let editing=false, ready=false, revision='', token='', values={}, saving=false, blocked=false, timer;
  const pending=new Map();
  const recoveryKey='buffys-copy-unsaved-v1';
  const report=(message,error=false)=>{status.textContent=message;status.dataset.error=String(error);if(error)tools.hidden=false;};
  const textOf=el=>el.innerText.replace(/\r/g,'').replace(/\u00a0/g,' ');
  const show=(el,value)=>{el.textContent=value;el.style.whiteSpace='pre-line';};
  const stash=()=>{try{if(pending.size)localStorage.setItem(recoveryKey,JSON.stringify(Object.fromEntries(pending)));else localStorage.removeItem(recoveryKey);}catch{}};
  const setEditing=on=>{
    editing=on; tools.hidden=!on; document.documentElement.classList.toggle('copy-editing',on);
    fields.forEach(el=>{if(on){el.setAttribute('contenteditable','plaintext-only');el.spellcheck=true;el.setAttribute('aria-label','Edit '+el.dataset.copy);}else{el.removeAttribute('contenteditable');el.removeAttribute('aria-label');}});
    toggle.textContent=on?'Preview':'Edit copy';
    const url=new URL(location.href);if(on)url.searchParams.set('edit','copy');else url.searchParams.delete('edit');history.replaceState(null,'',url);
    tools.querySelector('strong').textContent=on?'Click any outlined text to edit':'Copy preview';
  };
  const save=async()=>{
    if(saving||blocked||!ready||!pending.size)return;
    saving=true;
    while(pending.size&&!blocked){
      const [key,value]=pending.entries().next().value;report('Saving to this Mac…');
      try{
        const response=await fetch('/__copy',{method:'POST',headers:{'Content-Type':'application/json','X-Copy-Token':token},body:JSON.stringify({key,value,revision})});
        const data=await response.json();if(!response.ok){if(response.status===409)blocked=true;throw new Error(data.error||'Save failed.');}
        revision=data.revision;values[key]=value;
        if(pending.get(key)===value)pending.delete(key);stash();
      }catch(error){report(error.message+' Your text is kept in this browser.',true);saving=false;return;}
    }
    saving=false;if(!pending.size)report('Saved to this Mac · not published');
  };
  fields.forEach(el=>{
    el.addEventListener('input',()=>{if(!editing)return;pending.set(el.dataset.copy,textOf(el));stash();report('Unsaved changes…');clearTimeout(timer);timer=setTimeout(save,650);});
    el.addEventListener('blur',save);
    el.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();el.blur();}if((event.metaKey||event.ctrlKey)&&event.key==='s'){event.preventDefault();save();}});
  });
  // Links and buttons remain text-editable without navigating or submitting.
  document.addEventListener('click',event=>{if(editing&&event.target.closest('[data-copy]')){event.preventDefault();event.stopImmediatePropagation();}},true);
  document.addEventListener('submit',event=>{if(editing){event.preventDefault();event.stopImmediatePropagation();}},true);
  window.addEventListener('beforeunload',event=>{if(pending.size){event.preventDefault();event.returnValue='';}});
  toggle.addEventListener('click',()=>{if(ready){save();setEditing(!editing);}});
  tools.querySelector('.copy-download').addEventListener('click',()=>{
    const draft={...values,...Object.fromEntries(pending)};
    const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([JSON.stringify(draft,null,2)],{type:'application/json'}));link.download='buffys-site-copy.json';link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);
  });
  fetch('/__copy',{cache:'no-store'}).then(async response=>{if(!response.ok)throw new Error('Copy editing needs the local preview server.');return response.json();}).then(data=>{
    ({values,revision,token}=data);fields.forEach(el=>show(el,values[el.dataset.copy]??baseline.get(el.dataset.copy)));
    let recovery={};try{recovery=JSON.parse(localStorage.getItem(recoveryKey)||'{}');}catch{}
    for(const [key,value] of Object.entries(recovery)){const el=fields.find(el=>el.dataset.copy===key);if(el&&typeof value==='string'&&value!==values[key]){pending.set(key,value);show(el,value);}}
    ready=true;setEditing(new URLSearchParams(location.search).get('edit')==='copy');
    if(pending.size)tools.hidden=false;
    report(pending.size?'Recovered unsaved text. Edit or preview to save.':'Saved to this Mac · not published');
  }).catch(error=>{report(error.message,true);toggle.disabled=true;});
})();

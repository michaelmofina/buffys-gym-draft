(() => {
 const key='buffys-personal-goals-v1';let goals=[],filter='active',editing=null,removing=null;
 try{const data=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(data))goals=data.filter(g=>g&&typeof g.id==='string'&&typeof g.title==='string'&&Number.isFinite(g.current)&&g.current>=0&&Number.isFinite(g.target)&&g.target>0);}catch{}
 const list=document.querySelector('#goal-list'),dialog=document.querySelector('#goal-dialog'),form=document.querySelector('#goal-form'),status=document.querySelector('#goal-status'),formStatus=document.querySelector('#goal-form-status'),removeDialog=document.querySelector('#remove-dialog');
 const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
 const done=g=>g.current>=g.target;
 function persist(next){try{localStorage.setItem(key,JSON.stringify(next));goals=next;return true;}catch{formStatus.textContent='Could not save on this device. Your changes are still in this form.';status.textContent='Could not save on this device.';return false;}}
 function open(g){editing=g?.id||null;form.reset();formStatus.textContent='';document.querySelector('#goal-dialog-title').textContent=g?'Update your goal.':'Set a goal.';['title','current','target','unit','date'].forEach(k=>{document.querySelector('#goal-'+k).value=g?.[k]??(k==='current'?0:k==='unit'?'kg':'');});dialog.showModal();}
 function render(){
  list.replaceChildren();document.querySelector('#active-count').textContent=goals.filter(g=>!done(g)).length;document.querySelector('#done-count').textContent=goals.filter(done).length;
  const visible=goals.filter(g=>done(g)===(filter==='done'));
  if(!visible.length){const box=el('div',undefined,'goals-empty');box.append(el('h2',filter==='done'?'Your wins will live here.':'What’s your next goal?'),el('p',filter==='done'?'Reach a target and your goal moves here.':'A heavier lift, more reps, or showing up consistently. Choose something that matters to you.'));list.append(box);return;}
  visible.forEach(g=>{const card=el('article',undefined,'goal-card'),content=el('div'),actions=el('div',undefined,'goal-actions');content.append(el('h2',g.title));const amount=el('p',`${g.current} / ${g.target} ${g.unit}`);content.append(amount);const bar=el('progress',undefined,'goal-progress');bar.max=g.target;bar.value=Math.min(g.current,g.target);bar.setAttribute('aria-label',g.title+' progress');content.append(bar);
   if(g.date)content.append(el('p','Target: '+new Date(g.date+'T12:00:00').toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'}),'goal-meta'));
   if(done(g))content.append(el('p','Achieved','goal-meta'));
   const update=el('button','Update progress');update.type='button';update.addEventListener('click',()=>open(g));const remove=el('button','Remove');remove.type='button';remove.addEventListener('click',()=>{removing=g.id;removeDialog.showModal();});actions.append(update,remove);card.append(content,actions);list.append(card);
  });
 }
 document.querySelector('#new-goal').addEventListener('click',()=>open());document.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render();}));
 form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const title=document.querySelector('#goal-title').value.trim();if(!title){formStatus.textContent='Give your goal a name.';return;}const goal={id:editing||crypto.randomUUID(),title,current:Number(document.querySelector('#goal-current').value),target:Number(document.querySelector('#goal-target').value),unit:document.querySelector('#goal-unit').value,date:document.querySelector('#goal-date').value};if(!Number.isFinite(goal.current)||!Number.isFinite(goal.target)||goal.current<0||goal.target<=0)return;const next=goals.filter(g=>g.id!==goal.id).concat(goal);if(!persist(next))return;dialog.close();render();status.textContent=done(goal)?'Goal achieved! You’ll find it under Achieved.':'Goal saved on this device.';document.querySelector('#new-goal').focus();});
 document.querySelector('#cancel-remove').addEventListener('click',()=>removeDialog.close());document.querySelector('#confirm-remove').addEventListener('click',()=>{if(persist(goals.filter(g=>g.id!==removing))){removeDialog.close();render();status.textContent='Goal removed.';document.querySelector('#new-goal').focus();}});
 render();
})();

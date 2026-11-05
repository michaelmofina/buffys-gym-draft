(() => {
const siteNav=document.querySelector('.nav');
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
let menuCovered = [], menuOpen = false, menuMotion = [], menuRevision = 0;
const animateMenu = open => {
  const revision=++menuRevision;
  const items=[...menu.querySelectorAll('.menu-list a, .menu-footer')];
  const panelState={opacity:getComputedStyle(menu).opacity,clipPath:getComputedStyle(menu).clipPath};
  const itemStates=items.map(item=>({opacity:getComputedStyle(item).opacity,transform:getComputedStyle(item).transform}));
  menuMotion.forEach(a=>a.cancel());menuMotion=[];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finish=()=>{if(revision!==menuRevision)return;if(!open){menu.hidden=true;document.documentElement.classList.remove('menu-open');}};
  if(reduced){finish();return;}
  const panel=menu.animate(open ? [{opacity:1,clipPath:'inset(0 0 100% 0)'},{opacity:1,clipPath:'inset(0)'}] : [panelState,{opacity:0,clipPath:panelState.clipPath}],{duration:open?480:560,easing:open?'cubic-bezier(.22,1,.36,1)':'cubic-bezier(.4,0,.2,1)',fill:'both'});
  menuMotion.push(panel);
  items.forEach((item,i)=>{
    menuMotion.push(item.animate(open ? [{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}] : [itemStates[i],{opacity:0,transform:itemStates[i].transform}],{duration:open?460:380,delay:open?100+i*45:(items.length-i-1)*18,easing:open?'cubic-bezier(.22,1,.36,1)':'cubic-bezier(.4,0,.2,1)',fill:'both'}));
  });
  Promise.all(menuMotion.map(a=>a.finished)).then(finish).catch(()=>{});
};
const setMenu = (open) => {
  menuOpen = open;
  menu.hidden = false;
  menu.inert = !open;
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  if(open)document.documentElement.classList.add("menu-open");
  animateMenu(open);
  if (open) {
    menuCovered = [...document.body.children].filter(el =>
      !el.matches(".nav, .menu, script, style, link, .defs") && !el.inert);
    menuCovered.forEach(el => el.inert = true);
    menu.querySelector("a").focus({preventScroll:true});
  } else {
    menuCovered.forEach(el => el.inert = false);
    menuCovered = [];
    menuBtn.focus({preventScroll:true});
  }
};
menuBtn.addEventListener("click", () => setMenu(!menuOpen));
const closeOnNavigation = e => {
  const link = e.target.closest("a");
  if (!link || !menuOpen) return;
  setMenu(false);
  const href = link.getAttribute("href");
  if (href?.startsWith("#")) {
    const target = document.querySelector(href);
    if (target) {
      target.setAttribute("tabindex", "-1");
      target.focus({preventScroll:true});
      target.addEventListener("blur", () => target.removeAttribute("tabindex"), {once:true});
    }
  }
};
menu.addEventListener("click", closeOnNavigation);
siteNav.addEventListener("click", closeOnNavigation);
window.addEventListener("keydown", e => {
  if (!menuOpen) return;
  if (e.key === "Escape") { e.preventDefault(); setMenu(false); }
  if (e.key === "Tab") {
    const controls = [...document.querySelectorAll(".nav a, .nav button, .menu a")]
      .filter(el => el.getClientRects().length && getComputedStyle(el).visibility !== "hidden");
    const i = controls.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) { e.preventDefault(); controls.at(-1).focus(); }
    else if (!e.shiftKey && (i === controls.length - 1 || i === -1)) {
      e.preventDefault(); controls[0].focus();
    }
  }
});

})();

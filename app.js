/* Buffy's Gym — draft site interactions */

// ---------------------------------------------------------------------------
// Photo manifest for the hero fan (count adapts to viewport width).
// Add new scans here as they come in; everything else is automatic.
// ---------------------------------------------------------------------------
// Michael's original in-focus picks, followed by all September 12, 14, 18 and 21 scans.
// The earlier photos in Review/Bad remain excluded.
const HEAP_PHOTOS = [
  { src: "assets/Actual/Selected/scan-1-photo-05.jpg", alt: "Buffy on the couch with a blue and orange ball" },
  { src: "assets/Actual/Selected/scan-1-photo-06.jpg", alt: "Friends posing together at the gym" },
  { src: "assets/Actual/Selected/scan-2-photo-02.jpg", alt: "A smiling gym member sitting beside a bench" },
  { src: "assets/Actual/Selected/scan-photo-06.jpg", alt: "A gym member lifting a barbell at the rack" },
  { src: "assets/Actual/Selected/scan-2-photo-04.jpg", alt: "A gym member holding a dumbbell" },
  { src: "assets/Actual/Selected/scan-photo-01.jpg", alt: "Buffy relaxing in her round bed" },
  { src: "assets/Actual/Selected/scan-3-photo-01.jpg", alt: "A gym member practising a bodybuilding pose" },
  { src: "assets/Actual/Selected/scan-2-photo-06.jpg", alt: "Two gym members flexing together" },
  { src: "assets/Actual/Selected/scan-2-photo-01.jpg", alt: "A gym member exercising with a weight overhead" },
  {"src": "assets/Actual/Selected/scan-4-photo-01.jpg", "alt": "Gym member holding dumbbells at the rack"},
  {"src": "assets/Actual/Selected/scan-4-photo-02.jpg", "alt": "Buffy beneath a gym member doing an inverted exercise"},
  {"src": "assets/Actual/Selected/scan-4-photo-03.jpg", "alt": "Members training together by the barbell rack"},
  {"src": "assets/Actual/Selected/scan-4-photo-04.jpg", "alt": "Gym member hanging from the overhead bar"},
  {"src": "assets/Actual/Selected/scan-4-photo-05.jpg", "alt": "Gym member flexing beneath the pull-up bars"},
  {"src": "assets/Actual/Selected/scan-4-photo-06.jpg", "alt": "Buffy holding a red ball", "portrait": true},
  {"src": "assets/Actual/Selected/scan-5-photo-01.jpg", "alt": "Friends posing together after class"},
  {"src": "assets/Actual/Selected/scan-5-photo-02.jpg", "alt": "Members lifting dumbbells together"},
  {"src": "assets/Actual/Selected/scan-5-photo-03.jpg", "alt": "Gym member pressing dumbbells on a bench"},
  {"src": "assets/Actual/Selected/scan-5-photo-04.jpg", "alt": "Members at the pull-up rack"},
  {"src": "assets/Actual/Selected/scan-5-photo-05.jpg", "alt": "Gym member pressing a barbell on an incline bench"},
  {"src": "assets/Actual/Selected/scan-5-photo-06.jpg", "alt": "Friends smiling together at the gym"},
  {"src": "assets/Actual/Selected/scan-6-photo-01.jpg", "alt": "Gym member pressing dumbbells overhead"},
  {"src": "assets/Actual/Selected/scan-6-photo-02.jpg", "alt": "Buffy and a friend relaxing on the couch"},
  {"src": "assets/Actual/Selected/scan-6-photo-03.jpg", "alt": "Gym member posing in a blue cap"},
  {"src": "assets/Actual/Selected/scan-6-photo-04.jpg", "alt": "Gym member lifting a barbell"},
  {"src": "assets/Actual/Selected/scan-6-photo-05.jpg", "alt": "Gym member doing a push-up"},
  {"src": "assets/Actual/Selected/scan-6-photo-06.jpg", "alt": "Smiling gym member seated with a dumbbell"},
  {"src": "assets/Actual/Selected/scan-7-photo-01.jpg", "alt": "Gym member flexing beside the front window"},
  {"src": "assets/Actual/Selected/scan-8-photo-01.jpg", "alt": "Buffy looking up with a red ball", "portrait": true},
  {"src": "assets/Actual/Selected/scan-8-photo-02.jpg", "alt": "Gym member pressing a pair of dumbbells"},
  {"src": "assets/Actual/Selected/scan-8-photo-03.jpg", "alt": "Gym member doing a split squat with dumbbells"},
  {"src": "assets/Actual/Selected/scan-8-photo-04.jpg", "alt": "Friends chatting beside the racks"},
  {"src": "assets/Actual/Selected/scan-8-photo-05.jpg", "alt": "Gym member crouching beside Buffy with a ball"},
  {"src": "assets/Actual/Selected/scan-8-photo-06.jpg", "alt": "Buffy wearing a yellow bandana"},
  {"src": "assets/Actual/Selected/scan-9-photo-01.jpg", "alt": "Five gym members posing together"},
  {"src": "assets/Actual/Selected/scan-9-photo-02.jpg", "alt": "Gym member preparing to lift a barbell"},
  {"src": "assets/Actual/Selected/scan-9-photo-03.jpg", "alt": "Gym member lifting at the rack"},
  {"src": "assets/Actual/Selected/scan-9-photo-04.jpg", "alt": "Two friends smiling behind a bench"},
  {"src": "assets/Actual/Selected/scan-9-photo-05.jpg", "alt": "Friends posing with dumbbells"},
  {"src": "assets/Actual/Selected/scan-9-photo-06.jpg", "alt": "Two dogs playing together at the gym"},
  {"src": "assets/Actual/Selected/scan-10-photo-01.jpg", "alt": "Three members hanging from the pull-up bars"},
  {"src": "assets/Actual/Selected/scan-10-photo-02.jpg", "alt": "Two friends posing with a dumbbell and barbell"},
  {"src": "assets/Actual/Selected/scan-10-photo-03.jpg", "alt": "Gym member flexing beside the gym entrance"},
  {"src": "assets/Actual/Selected/scan-10-photo-04.jpg", "alt": "A group of friends posing after class"},
  {"src": "assets/Actual/Selected/scan-10-photo-05.jpg", "alt": "Buffy and a friend cuddling on the couch"},
  {"src": "assets/Actual/Selected/scan-10-photo-06.jpg", "alt": "Buffy relaxing on the couch with a gym member"},
  {"src": "assets/Actual/Selected/scan-11-photo-01.jpg", "alt": "Smiling gym member holding a dumbbell"},
  {"src": "assets/Actual/Selected/scan-11-photo-02.jpg", "alt": "Gym member training with dumbbells"},
  {"src": "assets/Actual/Selected/scan-11-photo-03.jpg", "alt": "Three friends posing in front of the windows"},
  {"src": "assets/Actual/Selected/scan-11-photo-04.jpg", "alt": "Gym member seated with dumbbells"},
  {"src": "assets/Actual/Selected/scan-11-photo-05.jpg", "alt": "Gym member crouching in front of the rack"},
  {"src": "assets/Actual/Selected/scan-12-photo-01.jpg", "alt": "Six gym members posing together by the racks"},
  {"src": "assets/Actual/Selected/scan-13-photo-01.jpg", "alt": "Two gym members training with dumbbells"},
  {"src": "assets/Actual/Selected/scan-12-photo-02.jpg", "alt": "Gym member in a black shirt holding an overhead bar"},
  {"src": "assets/Actual/Selected/scan-14-photo-01.jpg", "alt": "Gym member lifting a barbell from the floor"},
  {"src": "assets/Actual/Selected/scan-14-photo-03.jpg", "alt": "Two friends sitting together in the lounge"},
  {"src": "assets/Actual/Selected/scan-14-photo-06.jpg", "alt": "Smiling gym member posing in front of the racks"},
  {"src": "assets/Actual/Selected/scan-13-photo-05.jpg", "alt": "Members relaxing on the floor and couch with Buffy"},
  {"src": "assets/Actual/Selected/scan-13-photo-06.jpg", "alt": "A group of members posing across the gym floor"},
  {"src": "assets/Actual/Selected/scan-15-photo-01.jpg", "alt": "Two gym members taking a break on the class floor"},
  {"src": "assets/Actual/Selected/scan-14-photo-02.jpg", "alt": "Gym member in an orange shirt posing beside a bench"},
  {"src": "assets/Actual/Selected/scan-14-photo-04.jpg", "alt": "Gym member preparing to lift a barbell at the rack"},
  {"src": "assets/Actual/Selected/scan-12-photo-04.jpg", "alt": "Gym member leaning on a bench during an exercise"},
  {"src": "assets/Actual/Selected/scan-13-photo-02.jpg", "alt": "Gym member seated by stacks of weight plates"},
  {"src": "assets/Actual/Selected/scan-13-photo-03.jpg", "alt": "Gym member squatting with a barbell at the rack"},
  {"src": "assets/Actual/Selected/scan-12-photo-03.jpg", "alt": "Buffy with a gym member beside the weight rack"},
  {"src": "assets/Actual/Selected/scan-14-photo-05.jpg", "alt": "Gym member leaning over a loaded barbell"},
  {"src": "assets/Actual/Selected/scan-12-photo-05.jpg", "alt": "Two members training together at a bench"},
  {"src": "assets/Actual/Selected/scan-12-photo-06.jpg", "alt": "Gym member holding a dumbbell in a deep squat"},
  {"src": "assets/Actual/Selected/scan-13-photo-04.jpg", "alt": "Buffy rolling on her back on the gym floor"},
  {"src": "assets/Actual/Selected/scan-16-photo-03.jpg", "alt": "Gym member stretching both arms overhead beside the wooden wall"},
  {"src": "assets/Actual/Selected/scan-16-photo-05.jpg", "alt": "Two members taking a break beside the bright gym windows"},
  {"src": "assets/Actual/Selected/scan-17-photo-02.jpg", "alt": "Close-up of a member reaching toward the camera"},
  {"src": "assets/Actual/Selected/scan-18-photo-01.jpg", "alt": "Two members sharing a playful hug with arms outstretched"},
  {"src": "assets/Actual/Selected/scan-17-photo-01.jpg", "alt": "Gym member crouching behind a loaded barbell"},
  {"src": "assets/Actual/Selected/scan-18-photo-05.jpg", "alt": "Close-up of a member smiling behind their hands"},
  {"src": "assets/Actual/Selected/scan-18-photo-03.jpg", "alt": "Three members posing together beneath the overhead bars"},
  {"src": "assets/Actual/Selected/scan-19-photo-02.jpg", "alt": "Gym member sitting back with hands playfully raised beside their head"},
  {"src": "assets/Actual/Selected/scan-16-photo-04.jpg", "alt": "Smiling member standing with arms crossed after class"},
  {"src": "assets/Actual/Selected/scan-17-photo-05.jpg", "alt": "Member leaning forward during a break by the windows"},
  {"src": "assets/Actual/Selected/scan-18-photo-02.jpg", "alt": "Members doing handstands with their feet supported by the overhead bars"},
  {"src": "assets/Actual/Selected/scan-16-photo-01.jpg", "alt": "Two members striking playful poses beside the gym racks"},
  {"src": "assets/Actual/Selected/scan-16-photo-02.jpg", "alt": "Gym member in glasses posing on the class floor"},
  {"src": "assets/Actual/Selected/scan-16-photo-06.jpg", "alt": "Gym member holding a loaded barbell at shoulder height in a rack"},
  {"src": "assets/Actual/Selected/scan-17-photo-03.jpg", "alt": "Smiling member sitting on the gym floor with arms outstretched"},
  {"src": "assets/Actual/Selected/scan-17-photo-04.jpg", "alt": "Gym member pressing a barbell from a bench"},
  {"src": "assets/Actual/Selected/scan-17-photo-06.jpg", "alt": "Member smiling and making a peace sign on the class floor"},
  {"src": "assets/Actual/Selected/scan-18-photo-04.jpg", "alt": "Two friends posing for a close-up, one wearing sunglasses"},
  {"src": "assets/Actual/Selected/scan-18-photo-06.jpg", "alt": "Gym member holding a pair of dumbbells at shoulder height"},
  {"src": "assets/Actual/Selected/scan-19-photo-01.jpg", "alt": "Member with glasses holding a dumbbell in a split stance"},
  {"src": "assets/Actual/Selected/scan-19-photo-03.jpg", "alt": "Two members standing together after a workout"},
];

const photoImage = (photo, decorative = false) => {
  const image = document.createElement("img");
  image.src = photo.src;
  image.alt = decorative ? "" : photo.alt;
  if (photo.portrait) image.classList.add("portrait-scan");
  image.width = 800;
  image.height = 800;
  image.draggable = false;
  image.decoding = "async";
  return image;
};

// Use Buffy’s bed photo in the lounge; team portraits are selected in the markup.
for (const [selector, index] of [["#pop-couch", 5]]) {
  const print = document.querySelector(selector);
  if (!print) continue;
  print.classList.add("square-print");
  const photo = print.querySelector(".photo");
  photo.classList.add("actual-photo");
  photo.replaceChildren(photoImage(HEAP_PHOTOS[index]));
}

// seeded LCG so the fan lands identically every load
let heapSeed = 20260804;
const heapRand = () => {
  heapSeed = (heapSeed * 1664525 + 1013904223) % 4294967296;
  return heapSeed / 4294967296;
};

// A loose perimeter collage leaves the centre free for the invitation.
const heap = document.querySelector(".polaroids");
let photoOffset = 70;
const layoutFan = () => {
  if (!heap) return;
  const phone = window.matchMedia("(max-width: 600px)").matches;
  const tablet = window.matchMedia("(max-width: 1200px)").matches;
  heap.replaceChildren();
  const probe=document.createElement('figure');probe.className='polaroid bare square-print';heap.append(probe);
  const cardW=probe.offsetWidth||180;probe.remove();
  const w=heap.clientWidth,h=heap.clientHeight,cardH=cardW*86/72;
  // A repeatable, loosely layered arrangement: independent edges, varied depth
  // and angles, with a clear centre for the copy and booking buttons.
  let seed = 20261101;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const between = (a,b) => a + random() * (b-a);
  const positions = [];
  const across = phone ? 4 : tablet ? 6 : 9;
  const compact = !tablet && h < 780;
  for (let edge=0;edge<2;edge++) {
    for (let i=0;i<across;i++) {
      const x = cardW*.38 + (w-cardW*.76)*(i+between(-.2,.2))/(across-1);
      const depth = cardH * between(compact ? .36 : .38, compact ? .62 : .71);
      positions.push([x/w,edge ? 1-depth/h : depth/h,between(-19,18),between(.93,1.07)]);
    }
  }
  if (!phone && w >= 740) {
    const sideCount = tablet ? 3 : compact ? 3 : 5;
    const copy = document.querySelector('.hero-copy');
    const clearWidth = copy ? copy.offsetWidth : 580;
    const inwardLimit = (w-clearWidth)/2-cardW*.68-20;
    for (let side=0;side<2;side++) {
      for (let i=0;i<sideCount;i++) {
        const y=cardH*.95+(h-cardH*1.9)*(i+between(.12,.85))/sideCount;
        const inset=Math.min(cardW*between(.48,1.16),inwardLimit);
        positions.push([side ? 1-inset/w : inset/w,y/h,between(-19,18),between(.92,1.08)]);
      }
    }
  }
  positions.forEach(([x,y,rotation,scale],i)=>{
    const fig=document.createElement('figure');fig.className='polaroid bare square-print';fig.setAttribute('data-drag','');
    const box=document.createElement('div');box.className='photo actual-photo';box.append(photoImage(HEAP_PHOTOS[(photoOffset+i)%HEAP_PHOTOS.length]));fig.append(box);
    fig.style.setProperty('--card-w',(cardW*scale)+'px');
    fig.style.setProperty('--ox',(x*w-w/2)+'px');
    fig.style.setProperty('--oy',(y*h-cardH*scale/2)+'px');
    fig.style.setProperty('--rot',rotation+'deg');
    fig.style.zIndex=String(10+Math.floor(random()*28));heap.append(fig);bindDrag(fig);
  });
  const status=document.querySelector('#photo-status');
  if(status)status.textContent=`Showing ${positions.length} photos, starting at photo ${photoOffset+1} of ${HEAP_PHOTOS.length}.`;
};

// ---------------------------------------------------------------------------
// Draggable polaroids — mouse and touch alike.
// touch-action: none on the prints hands us the whole gesture, so a finger
// drags a print in any direction. Scrolling still works everywhere else in
// the hero — only a gesture that starts on a print belongs to us.
// ---------------------------------------------------------------------------
const mobile = window.matchMedia("(max-width: 860px)");
let topZ = 60; // above the fan's resting z-range (20-40)

const bindDrag = (el) => {
  let startX = 0;
  let startY = 0;
  let baseX = 0;
  let baseY = 0;
  let dragging = false;

  el.addEventListener("pointerdown", (e) => {
    // safe for touch too now that touch-action is none — the browser isn't
    // waiting to decide whether this gesture is a scroll
    e.preventDefault();
    dragging = true;
    try {
      el.setPointerCapture(e.pointerId);
    } catch (err) {
      /* synthetic or already-released pointer — drag still works via bubbling */
    }
    startX = e.clientX;
    startY = e.clientY;
    baseX = parseFloat(el.dataset.tx || "0");
    baseY = parseFloat(el.dataset.ty || "0");
    el.classList.add("dragging");
    el.style.zIndex = ++topZ;
  });

  el.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const tx = baseX + (e.clientX - startX);
    const ty = baseY + (e.clientY - startY);
    el.dataset.tx = tx;
    el.dataset.ty = ty;
    el.style.setProperty("--tx", tx + "px");
    el.style.setProperty("--ty", ty + "px");
  });

  const drop = () => {
    dragging = false;
    el.classList.remove("dragging");
  };
  el.addEventListener("pointerup", drop);
  el.addEventListener("pointercancel", drop);
};

// A few prints also live beside the stories and invitations further down.
document.querySelectorAll("[data-wall-photo]").forEach((print) => {
  const photo = HEAP_PHOTOS[Number(print.dataset.wallPhoto)];
  if (!photo) return;
  const image = photoImage(photo);
  image.loading = "lazy";
  print.querySelector(".photo").replaceChildren(image);
  bindDrag(print);
});

// build the fan now that bindDrag exists, and refit it when the width changes
// Size the opening scene to the viewport beneath the actual navigation height.
const siteNav = document.querySelector('.nav');
const syncNavHeight = () => {
  if (siteNav) document.documentElement.style.setProperty('--site-nav-height', siteNav.offsetHeight + 'px');
};
syncNavHeight();
if (siteNav && window.ResizeObserver) new ResizeObserver(syncNavHeight).observe(siteNav);
layoutFan();
// Font loading can change the copy height, and therefore the collage perimeter.
if (heap && window.ResizeObserver) new ResizeObserver(() => layoutFan()).observe(heap);
document.querySelector(".more-photos")?.addEventListener("click", () => {
  photoOffset = (photoOffset + heap.querySelectorAll(".polaroid").length) % HEAP_PHOTOS.length;
  // Cancel any initial dealing state; a click should swap photos immediately.
  heap.classList.remove("dealing");
  layoutFan();
});

let fanW = window.innerWidth;
let fanTimer;
window.addEventListener("resize", () => {
  if (window.innerWidth === fanW) return; // ignore mobile URL-bar height changes
  fanW = window.innerWidth;
  clearTimeout(fanTimer);
  fanTimer = setTimeout(layoutFan, 180);
});

// ---------------------------------------------------------------------------
// Full-screen navigation, shared by desktop and mobile.
// ---------------------------------------------------------------------------
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
let menuCovered = [];
const setMenu = (open) => {
  menu.hidden = !open;
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.documentElement.classList.toggle("menu-open", open);
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
menuBtn.addEventListener("click", () => setMenu(menu.hidden));
const closeOnNavigation = e => {
  const link = e.target.closest("a");
  if (!link || menu.hidden) return;
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
  if (menu.hidden) return;
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
// Rebuild the photos at the mobile breakpoint without dismissing an open menu.
mobile.addEventListener("change", () => layoutFan());

// ---------------------------------------------------------------------------
// The rooms — cycle three spaces; tap a dot in any of them for a photo.
// Each slide's <img class="room-scene"> can be swapped for a <video> and this
// keeps working: the active room's clip plays, the others pause.
// ---------------------------------------------------------------------------
const roomEl = document.querySelector(".room");
if (roomEl) {
  const slides = [...roomEl.querySelectorAll(".room-slide")];
  const tabs = [...document.querySelectorAll(".room-tabs [role='tab']")];
  const stillPlease = window.matchMedia('(prefers-reduced-motion: reduce)');
  const closeRoom = () => {};
  let current = 0;
  const showRoom = (i, focusTab = false) => {
    current = (i + slides.length) % slides.length;
    document.querySelectorAll("[data-room-description]").forEach((el,n)=>el.hidden=n!==current);
    closeRoom();
    slides.forEach((slide, n) => {
      const on = n === current;
      // unhide first so the crossfade has something to fade to
      if (on) slide.hidden = false;
      slide.classList.toggle("is-active", on);
      if (!on) setTimeout(() => { if (!slide.classList.contains("is-active")) slide.hidden = true; }, 450);
      const clip = slide.querySelector("video");
      if (clip) {
        if (on && !stillPlease.matches) clip.play().catch(() => {});
        else clip.pause();
      }
    });
    tabs.forEach((tab, n) => {
      tab.setAttribute("aria-selected", String(n === current));
      tab.tabIndex = n === current ? 0 : -1;
      if (n === current && focusTab) tab.focus();
    });
  };

  tabs.forEach((tab, n) => tab.addEventListener("click", () => showRoom(n)));

  // standard tablist keyboard behaviour
  document.querySelector(".room-tabs")?.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") showRoom(current + 1, true);
    else if (e.key === "ArrowLeft") showRoom(current - 1, true);
    else if (e.key === "Home") showRoom(0, true);
    else if (e.key === "End") showRoom(slides.length - 1, true);
    else return;
    e.preventDefault();
  });

  roomEl.querySelector(".room-prev")?.addEventListener("click", () => showRoom(current - 1));
  roomEl.querySelector(".room-next")?.addEventListener("click", () => showRoom(current + 1));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeRoom();
  });

  showRoom(0);
}

// ---------------------------------------------------------------------------
// Spotify embed — injected, and only shown once it genuinely loads. Anywhere
// the iframe is blocked (strict CSP, offline, tracker blockers) the section
// still reads complete: cassette, copy, and the "Open in Spotify" buttons.
// ---------------------------------------------------------------------------
document.querySelectorAll("[data-embed]").forEach((box) => {
  const src = box.dataset.embed;
  if (src.includes("PLAYLIST_ID")) return; // placeholder — nothing to load yet
  const frame = document.createElement("iframe");
  frame.src = src;
  frame.height = 380;
  frame.loading = "lazy";
  frame.title = "Buffy's Gym house mix on Spotify";
  frame.allow = "clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  frame.addEventListener("load", () => box.classList.add("ready"));
  box.appendChild(frame);
});

// ---------------------------------------------------------------------------
// The books — flip through scanned spreads. Click the right half of the page
// to go forward, the left half to go back; arrows and ←/→ do the same.
// ---------------------------------------------------------------------------
const bookEl = document.querySelector(".book");
if (bookEl) {
  const stage = bookEl.querySelector(".book-stage");
  const pages = [...stage.querySelectorAll(".book-page")];
  const cap = document.querySelector(".book-cap");
  const count = document.querySelector(".book-count");
  let page = 0;

  const showPage = (i) => {
    const next = (i + pages.length) % pages.length;
    // going backwards? slide the other way
    const back = next < page || (page === 0 && next === pages.length - 1);
    stage.classList.toggle("is-back", back);
    page = next;
    pages.forEach((p, n) => p.classList.toggle("is-active", n === page));
    if (cap) cap.textContent = pages[page].dataset.cap || "";
    if (count) count.textContent = `${page + 1} / ${pages.length}`;
  };

  stage.addEventListener("click", (e) => {
    const box = stage.getBoundingClientRect();
    showPage(page + (e.clientX - box.left < box.width / 2 ? -1 : 1));
  });
  bookEl.querySelector(".book-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    showPage(page - 1);
  });
  bookEl.querySelector(".book-next").addEventListener("click", (e) => {
    e.stopPropagation();
    showPage(page + 1);
  });

  // arrow keys, but only while the book is actually on screen
  let bookVisible = false;
  new IntersectionObserver(
    ([entry]) => (bookVisible = entry.isIntersecting),
    { threshold: 0.35 }
  ).observe(bookEl);

  window.addEventListener("keydown", (e) => {
    if (!bookVisible || document.querySelector(".menu:not([hidden])")) return;
    if (e.key === "ArrowRight") showPage(page + 1);
    else if (e.key === "ArrowLeft") showPage(page - 1);
    else return;
    e.preventDefault();
  });

  showPage(0);
}

// ---------------------------------------------------------------------------
// Scroll reveals
// ---------------------------------------------------------------------------
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Sections are visible immediately; retain the class for existing static styles.
document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('in'));

// ---------------------------------------------------------------------------
// Email signup — draft only, not wired to a backend yet.
// The note is honest about that; don't clear the field (nothing was sent).
// ---------------------------------------------------------------------------
const form = document.querySelector(".signup");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.querySelector(".signup-note").hidden = false;
  });
}

// ---------------------------------------------------------------------------
// Original procedural tennis ball. No external model, textures or runtime library.
// Pure helpers keep orientation and physics independently testable.
function tennisTiltVector(beta, gamma, angle, neutral) {
  const rad = Math.PI / 180, a = angle * rad;
  const gx = Math.sin(gamma * rad) * Math.cos(beta * rad);
  const gy = Math.sin(beta * rad);
  return { x: Math.max(-1, Math.min(1, gx * Math.cos(a) + gy * Math.sin(a) - neutral.x)),
    y: Math.max(-1, Math.min(1, gy * Math.cos(a) - gx * Math.sin(a) - neutral.y)) };
}
function advanceTennisBall(s, dt, bounds, gravity, flat) {
  const drag = Math.exp(-(flat ? 1.8 : .35) * dt);
  s.vx = (s.vx + gravity.x * dt) * drag;
  s.vy = (s.vy + gravity.y * dt) * drag;
  s.x += s.vx * dt; s.y += s.vy * dt;
  for (const [pos, vel, max] of [['x', 'vx', bounds.x], ['y', 'vy', bounds.y]]) {
    if (s[pos] < bounds.r) { s[pos] = bounds.r; s[vel] = Math.abs(s[vel]) * .62; }
    if (s[pos] > max) { s[pos] = max; s[vel] = -Math.abs(s[vel]) * .62; }
    if (Math.abs(s[vel]) < 12 && (s[pos] === bounds.r || s[pos] === max)) s[vel] = 0;
  }
  if (!flat && s.y === bounds.y) s.vx *= Math.exp(-3.5 * dt);
}
(() => {
  const layer = document.querySelector('.ball-layer'), ball = layer?.querySelector('.ball');
  if (!ball) return;
  const dog = layer.querySelector('.fetcher');
  const canvas = ball.querySelector('canvas'), tiltButton = layer.querySelector('.ball-tilt');
  const status = layer.querySelector('.ball-status');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let R = ball.getBoundingClientRect().width / 2;
  const state = {x:80,y:80,vx:0,vy:0};
  let raf = 0, previous = 0, held = false, pointer = null, lastPointer = null;
  let paused = reduced.matches, tilt = false, waitingForSensor = false, sensorTimer = 0;
  let gravity = {x:0,y:1500}, neutral = null, screenAngle = 0;
  let q = [.12,.08,.40,.90], gl, program, rotationUniform;
  let thrown=false, fetching=false, fetchTimers=[];
  const later=(fn,ms)=>{const id=setTimeout(fn,ms);fetchTimers.push(id);};
  function resetFetch(){
    fetchTimers.forEach(clearTimeout);fetchTimers=[];fetching=false;thrown=false;
    dog?.classList.remove('is-fetching');ball.classList.remove('is-gone');
  }
  function fetchBall(){
    if(!dog||fetching||paused||held||document.hidden||reduced.matches)return;
    fetching=true;thrown=false;stop();
    state.y=bounds().y;draw();
    dog.style.left=clamp(state.x,60,layer.clientWidth-60)+'px';
    dog.classList.add('is-fetching');status.textContent='Here comes Buffy!';
    later(()=>{ball.classList.add('is-gone');status.textContent='Buffy got the ball.';},650);
    later(()=>dog.classList.remove('is-fetching'),1600);
    later(()=>{
      state.x=clamp(layer.clientWidth*.72,R,bounds().x);state.y=bounds().y;
      resetFetch();draw();status.textContent='Good dog. Throw it again!';
    },2200);
  }
  const clamp = (v,min,max) => Math.min(max,Math.max(min,v));
  const bounds = () => {
    const {width,height}=layer.getBoundingClientRect();
    // The shader leaves a transparent rim around the sphere; align its visible edge with the page floor.
    const visibleRadius = gl ? R / 1.08 : R;
    return {r:R,x:Math.max(R,width-R),y:Math.max(R,height-visibleRadius)};
  };
  // A ray-sphere intersection in the fragment shader gives a smooth true 3D
  // surface; the inverse orientation locks felt and seam to the rotating ball.
  try {
    gl = canvas.getContext('webgl', {alpha:true, antialias:true, premultipliedAlpha:false});
    if (!gl) throw new Error('No WebGL');
    const vertex = `attribute vec2 position; varying vec2 uv;
      void main(){uv=position*1.08;gl_Position=vec4(position,0.,1.);}`;
    const fragment = `precision highp float;
      varying vec2 uv; uniform mat3 rotation;
      float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      void main(){
        float r2=dot(uv,uv);
        float fuzz=hash(vec3(floor(uv*230.),1.));
        if(r2>1.0+fuzz*.012) discard;
        r2=min(r2,.9999);
        vec3 n=vec3(uv,sqrt(1.-r2)); vec3 p=rotation*n;
        float longitude=atan(p.z,p.x);
        float seamDistance=abs(p.y-.52*cos(2.*longitude));
        float seam=1.-smoothstep(.025,.042,seamDistance+(.5-hash(floor(p*250.)))*.008);
        float groove=1.-smoothstep(.047,.067,seamDistance);
        float fiber=hash(floor(p*380.));
        float mottling=hash(floor(p*36.));
        vec3 felt=vec3(.77,.86,.17)*(0.85+fiber*.24+mottling*.07);
        vec3 material=mix(felt,vec3(.92,.92,.79),seam);
        float diffuse=max(0.,dot(n,normalize(vec3(-.6,.8,1.3))));
        float shade=.52+.48*diffuse;
        float roughHighlight=pow(max(0.,dot(n,normalize(vec3(-.35,.5,1.6)))),8.)*.018;
        material*=1.-.12*groove*(1.-seam);
        vec3 color=material*shade+roughHighlight;
        float edge=(1.-smoothstep(.98+fuzz*.008,1.008,r2));
        gl_FragColor=vec4(color,edge);
      }`;
    function compile(type, source) {
      const shader=gl.createShader(type); gl.shaderSource(shader,source); gl.compileShader(shader);
      if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
      return shader;
    }
    program=gl.createProgram(); gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex));
    gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment)); gl.linkProgram(program);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS)) throw new Error('Ball shader link failed');
    gl.useProgram(program);
    const buffer=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
    const position=gl.getAttribLocation(program,'position'); gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
    rotationUniform=gl.getUniformLocation(program,'rotation');
    ball.classList.add('has-3d');
  } catch (_) { gl=null; canvas.hidden=true; }
  function roll(dx,dy) {
    const distance=Math.hypot(dx,dy); if(distance<.001) return;
    const half=distance/R/2, k=Math.sin(half)/distance;
    const a=dy*k,b=dx*k,c=Math.cos(half),[x,y,z,w]=q;
    q=[c*x+a*w+b*z,c*y+b*w-a*z,c*z+a*y-b*x,c*w-a*x-b*y];
    const length=Math.hypot(...q); q=q.map(v=>v/length);
  }
  function draw() {
    ball.style.transform=`translate3d(${state.x-R}px,${state.y-R}px,0)`;
    if(!gl || gl.isContextLost()) return;
    const [x,y,z,w]=q;
    // Column-major inverse quaternion matrix.
    const matrix=[1-2*(y*y+z*z),2*(x*y-z*w),2*(x*z+y*w),2*(x*y+z*w),1-2*(x*x+z*z),2*(y*z-x*w),2*(x*z-y*w),2*(y*z+x*w),1-2*(x*x+y*y)];
    gl.viewport(0,0,canvas.width,canvas.height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniformMatrix3fv(rotationUniform,false,new Float32Array(matrix)); gl.drawArrays(gl.TRIANGLES,0,6);
  }
  function step(now) {
    raf=0;
    if(paused || held || fetching || document.hidden) return;
    const dt=Math.min((now-previous)/1000||1/60,.033); previous=now;
    const oldX=state.x,oldY=state.y;
    for(let i=0;i<3;i++) advanceTennisBall(state,dt/3,bounds(),gravity,tilt);
    roll(state.x-oldX,state.y-oldY);draw();
    const speed=Math.hypot(state.vx,state.vy);
    const still=tilt ? speed<3 && Math.hypot(gravity.x,gravity.y)<18 : speed<3 && state.y===bounds().y;
    if(!still) raf=requestAnimationFrame(step); else {state.vx=0;state.vy=0;if(thrown)fetchBall();}
  }
  function run(){if(!raf&&!paused&&!held&&!fetching&&!document.hidden){previous=performance.now();raf=requestAnimationFrame(step);}}
  function stop(){cancelAnimationFrame(raf);raf=0;state.vx=0;state.vy=0;}
  function setPause(value){
    paused=value;stop();resetFetch();
    ball.classList.toggle('is-paused',paused);
    if(!paused)run();
  }
  ball.addEventListener('pointerdown',e=>{
    if(paused || fetching || e.button!==0) return;
    e.preventDefault();stop();held=true;pointer=e.pointerId;ball.setPointerCapture(pointer);
    lastPointer={x:e.clientX,y:e.clientY,t:performance.now()};ball.classList.add('is-held');
  });
  ball.addEventListener('pointermove',e=>{
    if(!held||e.pointerId!==pointer)return;
    const now=performance.now(),dt=Math.max((now-lastPointer.t)/1000,.008),b=bounds();
    const oldX=state.x,oldY=state.y;
    state.x=clamp(state.x+e.clientX-lastPointer.x,R,b.x);state.y=clamp(state.y+e.clientY-lastPointer.y,R,b.y);
    state.vx=clamp((state.x-oldX)/dt,-1500,1500);state.vy=clamp((state.y-oldY)/dt,-1500,1500);
    roll(state.x-oldX,state.y-oldY);lastPointer={x:e.clientX,y:e.clientY,t:now};draw();
  });
  function release(e){
    if(!held||e.pointerId!==pointer)return;
    if(e.type!=='pointerup'||performance.now()-lastPointer.t>100){state.vx=0;state.vy=0;}
    held=false;pointer=null;ball.classList.remove('is-held');
    thrown=e.type==='pointerup';if(thrown)later(()=>{if(thrown&&!held&&!paused)fetchBall();},4200);run();
  }
  ['pointerup','pointercancel','lostpointercapture'].forEach(name=>ball.addEventListener(name,release));
  ball.addEventListener('keydown',e=>{
    if(paused||fetching)return;
    const directions={ArrowLeft:[-420,0],ArrowRight:[420,0],ArrowUp:[0,-650],ArrowDown:[0,420],' ':[450,-650],Enter:[450,-650]};
    if(!directions[e.key])return;e.preventDefault();[state.vx,state.vy]=directions[e.key];thrown=true;later(()=>{if(thrown&&!held&&!paused)fetchBall();},4200);run();
  });
  function disableTilt(message='Tilt off. Drag the ball to throw it.'){
    tilt=false;waitingForSensor=false;neutral=null;clearTimeout(sensorTimer);
    window.removeEventListener('deviceorientation',orient);gravity={x:0,y:1500};
    tiltButton.textContent='Tilt to roll';tiltButton.setAttribute('aria-pressed','false');status.textContent=message;run();
  }
  function orient(e){
    if(!Number.isFinite(e.beta)||!Number.isFinite(e.gamma))return;
    const angle=screen.orientation?.angle||0;
    if(!neutral||angle!==screenAngle){neutral=tennisTiltVector(e.beta,e.gamma,angle,{x:0,y:0});screenAngle=angle;}
    const vector=tennisTiltVector(e.beta,e.gamma,angle,neutral);
    gravity={x:Math.abs(vector.x)<.015?0:vector.x*1600,y:Math.abs(vector.y)<.015?0:vector.y*1600};
    if(waitingForSensor){waitingForSensor=false;clearTimeout(sensorTimer);status.textContent='Tilt enabled. Tilt your phone to roll the ball.';}
    run();
  }
  if('DeviceOrientationEvent' in window && isSecureContext && matchMedia('(pointer: coarse)').matches)tiltButton.hidden=false;
  tiltButton.addEventListener('click',async()=>{
    if(tilt){disableTilt();return;}
    try {
      if(typeof DeviceOrientationEvent.requestPermission==='function'){
        const permission=await DeviceOrientationEvent.requestPermission();
        if(permission!=='granted'){status.textContent='Motion access was not enabled. You can still drag the ball.';return;}
      }
      tilt=true;waitingForSensor=true;neutral=null;gravity={x:0,y:0};setPause(false);
      tiltButton.textContent='Tilt on';tiltButton.setAttribute('aria-pressed','true');
      window.addEventListener('deviceorientation',orient);
      sensorTimer=setTimeout(()=>{if(waitingForSensor)disableTilt('Motion sensors are unavailable here. You can still drag the ball.');},3500);
    }catch(_){disableTilt('Motion access is unavailable. You can still drag the ball.');}
  });
  reduced.addEventListener('change',e=>{if(e.matches){disableTilt();setPause(true);}});
  document.addEventListener('visibilitychange',()=>{stop();resetFetch();if(!document.hidden){neutral=null;run();}});
  new ResizeObserver(()=>{
    const oldRadius=R; R=ball.getBoundingClientRect().width/2;
    const b=bounds();state.x=clamp(state.x,R,b.x);state.y=clamp(state.y,R,b.y);
    if(oldRadius!==R&&!held)state.y=b.y;
    neutral=null;draw();run();
  }).observe(layer);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();ball.classList.remove('has-3d');canvas.hidden=true;gl=null;});
  state.x=clamp(layer.clientWidth*.72,R,bounds().x);state.y=bounds().y;
  setPause(paused);draw();
})();

// Native touch/trackpad momentum; mouse dragging adds a short, damped coast.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-scroll-rail]').forEach(rail => {
    let gesture = null, frame = 0, suppressClick = false;
    const controls = [...document.querySelectorAll('[data-rail-step]')].filter(b => b.getAttribute('aria-controls') === rail.id);
    const max = () => Math.max(0, rail.scrollWidth - rail.clientWidth);
    const stop = () => { cancelAnimationFrame(frame); frame = 0; rail.classList.remove('is-gliding'); };
    const update = () => controls.forEach(b => { b.disabled = Number(b.dataset.railStep) < 0 ? rail.scrollLeft <= 2 : rail.scrollLeft >= max() - 2; });
    const step = direction => {
      stop();
      const card = rail.firstElementChild;
      rail.scrollBy({left:direction * (card.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).columnGap)),behavior:reduced.matches?'instant':'smooth'});
    };
    controls.forEach(b => b.addEventListener('click', () => step(Number(b.dataset.railStep))));
    rail.addEventListener('scroll', update, {passive:true});
    new ResizeObserver(update).observe(rail);
    rail.addEventListener('keydown', e => {
      if(e.target !== rail || !['ArrowLeft','ArrowRight'].includes(e.key)) return;
      e.preventDefault(); step(e.key === 'ArrowRight' ? 1 : -1);
    });
    rail.addEventListener('wheel', stop, {passive:true});
    rail.addEventListener('dragstart', e => { if(!e.target.closest('[contenteditable="true"]')) e.preventDefault(); });
    rail.addEventListener('pointerdown', e => {
      stop();
      if(e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest('[contenteditable="true"]')) return;
      suppressClick = false;
      gesture = {id:e.pointerId,startX:e.clientX,startY:e.clientY,left:rail.scrollLeft,x:e.clientX,time:e.timeStamp,v:0,dragged:false};
    });
    rail.addEventListener('pointermove', e => {
      const g = gesture;
      if(!g || e.pointerId !== g.id) return;
      const dx=e.clientX-g.startX;
      if(!g.dragged) {
        if(Math.abs(dx)<6) return;
        if(Math.abs(e.clientY-g.startY)>Math.abs(dx)) { gesture=null; return; }
        g.dragged=true; rail.setPointerCapture(e.pointerId);
        rail.classList.add('is-dragging','is-gliding');
      }
      e.preventDefault();
      const dt=Math.max(8,e.timeStamp-g.time);
      g.v=.65*g.v+.35*(g.x-e.clientX)/dt;
      rail.scrollLeft=g.left-dx; g.x=e.clientX; g.time=e.timeStamp;
    });
    const finish = (e, cancelled=false) => {
      const g=gesture;
      if(!g || e.pointerId!==g.id) return;
      gesture=null; rail.classList.remove('is-dragging');
      if(rail.hasPointerCapture(e.pointerId)) rail.releasePointerCapture(e.pointerId);
      if(!g.dragged) return;
      suppressClick=true;
      setTimeout(()=>{suppressClick=false;},0);
      let velocity=cancelled || reduced.matches || e.timeStamp-g.time>100 ? 0 : Math.max(-2.2,Math.min(2.2,g.v));
      let last=performance.now();
      const coast=now=>{
        const dt=Math.min(32,now-last); last=now;
        const before=rail.scrollLeft;
        rail.scrollLeft+=velocity*dt; velocity*=Math.exp(-dt/180);
        if(Math.abs(velocity)<.025 || Math.abs(rail.scrollLeft-before)<.1) { stop(); update(); return; }
        frame=requestAnimationFrame(coast);
      };
      if(Math.abs(velocity)>.025) frame=requestAnimationFrame(coast); else stop();
    };
    rail.addEventListener('pointerup',e=>finish(e));
    rail.addEventListener('pointercancel',e=>finish(e,true));
    rail.addEventListener('lostpointercapture',e=>finish(e,true));
    rail.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopPropagation();}},true);
    update();
  });
})();

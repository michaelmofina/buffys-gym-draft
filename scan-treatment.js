// Approved photo treatment: the same sRGB curve and colour lift as photo-treatment.html.
// Applied at display time; the original scans and the first nine reference photos stay untouched.
(() => {
 const laterScans = new Set([
  "scan-4-photo-01.jpg",
  "scan-4-photo-02.jpg",
  "scan-4-photo-03.jpg",
  "scan-4-photo-04.jpg",
  "scan-4-photo-05.jpg",
  "scan-4-photo-06.jpg",
  "scan-5-photo-01.jpg",
  "scan-5-photo-02.jpg",
  "scan-5-photo-03.jpg",
  "scan-5-photo-04.jpg",
  "scan-5-photo-05.jpg",
  "scan-5-photo-06.jpg",
  "scan-6-photo-01.jpg",
  "scan-6-photo-02.jpg",
  "scan-6-photo-03.jpg",
  "scan-6-photo-04.jpg",
  "scan-6-photo-05.jpg",
  "scan-6-photo-06.jpg",
  "scan-7-photo-01.jpg",
  "scan-8-photo-01.jpg",
  "scan-8-photo-02.jpg",
  "scan-8-photo-03.jpg",
  "scan-8-photo-04.jpg",
  "scan-8-photo-05.jpg",
  "scan-8-photo-06.jpg",
  "scan-9-photo-01.jpg",
  "scan-9-photo-02.jpg",
  "scan-9-photo-03.jpg",
  "scan-9-photo-04.jpg",
  "scan-9-photo-05.jpg",
  "scan-9-photo-06.jpg",
  "scan-10-photo-01.jpg",
  "scan-10-photo-02.jpg",
  "scan-10-photo-03.jpg",
  "scan-10-photo-04.jpg",
  "scan-10-photo-05.jpg",
  "scan-10-photo-06.jpg",
  "scan-11-photo-01.jpg",
  "scan-11-photo-02.jpg",
  "scan-11-photo-03.jpg",
  "scan-11-photo-04.jpg",
  "scan-11-photo-05.jpg",
  "scan-12-photo-01.jpg",
  "scan-13-photo-01.jpg",
  "scan-12-photo-02.jpg",
  "scan-14-photo-01.jpg",
  "scan-14-photo-03.jpg",
  "scan-14-photo-06.jpg",
  "scan-13-photo-05.jpg",
  "scan-13-photo-06.jpg",
  "scan-15-photo-01.jpg",
  "scan-14-photo-02.jpg",
  "scan-14-photo-04.jpg",
  "scan-12-photo-04.jpg",
  "scan-13-photo-02.jpg",
  "scan-13-photo-03.jpg",
  "scan-12-photo-03.jpg",
  "scan-14-photo-05.jpg",
  "scan-12-photo-05.jpg",
  "scan-12-photo-06.jpg",
  "scan-13-photo-04.jpg",
  "scan-16-photo-03.jpg",
  "scan-16-photo-05.jpg",
  "scan-17-photo-02.jpg",
  "scan-18-photo-01.jpg",
  "scan-17-photo-01.jpg",
  "scan-18-photo-05.jpg",
  "scan-18-photo-03.jpg",
  "scan-19-photo-02.jpg",
  "scan-16-photo-04.jpg",
  "scan-17-photo-05.jpg",
  "scan-18-photo-02.jpg",
  "scan-16-photo-01.jpg",
  "scan-16-photo-02.jpg",
  "scan-16-photo-06.jpg",
  "scan-17-photo-03.jpg",
  "scan-17-photo-04.jpg",
  "scan-17-photo-06.jpg",
  "scan-18-photo-04.jpg",
  "scan-18-photo-06.jpg",
  "scan-19-photo-01.jpg",
  "scan-19-photo-03.jpg"
]);
 const ns = 'http://www.w3.org/2000/svg';
 const make = (name, attrs) => {
  const el = document.createElementNS(ns, name);
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
  return el;
 };
 const svg = make('svg', {width:'0', height:'0', 'aria-hidden':'true', focusable:'false'});
 svg.style.position = 'absolute';
 const defs = make('defs', {});
 const filter = make('filter', {id:'buffy-scan-tone', 'color-interpolation-filters':'sRGB'});
 const transfer = make('feComponentTransfer', {});
 const curve = Array.from({length:101}, (_,i) => Math.pow(Math.max(0,(i/100-.08)/.92),1.10).toFixed(5)).join(' ');
 for (const channel of ['R','G','B']) transfer.append(make('feFunc'+channel,{type:'table',tableValues:curve}));
 filter.append(transfer, make('feColorMatrix',{type:'saturate',values:'1.18'}));
 defs.append(filter); svg.append(defs); document.body.prepend(svg);
 const style = document.createElement('style');
 style.textContent = 'img[data-scan-treatment="approved"] { filter:url("#buffy-scan-tone") !important; }';
 document.head.append(style);
 const apply = img => {
  const path = new URL(img.getAttribute('src') || '', location.href).pathname;
  const eligible = path.includes('/Actual/Selected/') && laterScans.has(decodeURIComponent(path.split('/').pop()));
  if (eligible) img.setAttribute('data-scan-treatment','approved');
  else img.removeAttribute('data-scan-treatment');
 };
 const scan = root => {
  if (root.nodeType !== 1) return;
  if (root.matches('img')) apply(root);
  root.querySelectorAll('img').forEach(apply);
 };
 scan(document.body);
 // Hero reshuffles and the gallery lightbox create or replace images after load.
 new MutationObserver(records => {
  for (const record of records) {
   if (record.type === 'attributes') apply(record.target);
   else record.addedNodes.forEach(scan);
  }
 }).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['src']});
})();

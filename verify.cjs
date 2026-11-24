const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync('dist/index.html','utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML IDs');
for (const [,ref] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  if (ref.startsWith('#')) assert(ids.includes(ref.slice(1)), `Missing anchor ${ref}`);
  else if (!/^(https?:|mailto:)/.test(ref)) assert(fs.existsSync('dist/'+ref), `Missing asset ${ref}`);
}
assert(!/onsubmit=|href="#"|<script>/.test(html));
const path = require('node:path');
for (const [,ref] of fs.readFileSync('assets/site.css','utf8').matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g)) {
  if (!ref.startsWith('#')) assert(fs.existsSync(path.resolve('assets',ref)), `Missing CSS asset ${ref}`);
}
const elements = new Map();
function element(key) {
  if(elements.has(key)) return elements.get(key);
  const classes=new Set(), attrs={}, handlers={};
  const el={style:{},dataset:{},handlers,textContent:'',children:[],disabled:false,
    classList:{add:x=>classes.add(x),remove:x=>classes.delete(x),contains:x=>classes.has(x),toggle(x,on){on??=!classes.has(x);on?classes.add(x):classes.delete(x)}},
    setAttribute:(k,v)=>attrs[k]=v,getAttribute:k=>attrs[k],hasAttribute:k=>k in attrs,
    removeAttribute:k=>delete attrs[k],addEventListener:(type,fn)=>handlers[type]=fn,
    replaceChildren(...items){this.children=items},focus(){document.activeElement=this},
    reportValidity:()=>true,reset(){this.wasReset=true},querySelectorAll:()=>[],offsetTop:0};
  elements.set(key,el); return el;
}
const cards=Array.from({length:8},(_,i)=>{const e=element('card'+i);e.dataset.index=String(i);return e});
const dots=Array.from({length:8},(_,i)=>{const e=element('dot'+i);e.dataset.index=String(i);return e});
const document={activeElement:element('trigger'),body:element('body'),documentElement:{scrollHeight:2000,clientHeight:800,scrollTop:0},
  getElementById:element,querySelector:element,createElement:tag=>element(Symbol(tag)),
  querySelectorAll:s=>s==='.slider-card'?cards:s==='.slider-dot'?dots:[],addEventListener:(t,f)=>element('document').handlers[t]=f};
const context={document,window:{innerWidth:1200,scrollY:0,addEventListener(){}},matchMedia:()=>({matches:false,addEventListener(){}}),
  requestAnimationFrame:f=>f(),location:{protocol:'https:'},URLSearchParams,AbortController,setTimeout,clearTimeout,
  FormData:class{*[Symbol.iterator](){yield ['form-name','contact'];yield ['message','test']}},fetch:async()=>({ok:true})};
vm.createContext(context);vm.runInContext(fs.readFileSync('assets/site.js','utf8'),context);
(async()=>{
  assert(cards[0].classList.contains('active-center'));
  element('btnSliderNext').handlers.click();assert(cards[1].classList.contains('active-center'));
  element('btnSliderPrev').handlers.click();assert(cards[0].classList.contains('active-center'));
  cards[0].handlers.click({target:{closest:()=>true}});
  assert(element('serviceModalOverlay').classList.contains('is-open'));
  assert(element('modalDeliverables').children.length>0);
  element('modalCloseBtn').handlers.click();assert(!element('serviceModalOverlay').classList.contains('is-open'));
  element('hamburger').handlers.click();assert.equal(element('hamburger').getAttribute('aria-expanded'),'true');
  element('hamburger').handlers.click();assert.equal(element('hamburger').getAttribute('aria-expanded'),'false');
  const form=element('contact-form'), event={preventDefault(){}};
  form.setAttribute('data-netlify','true'); await form.handlers.submit(event);
  assert.match(element('form-status').textContent,/not connected/);assert(!form.wasReset);
  form.removeAttribute('data-netlify');context.fetch=async()=>({ok:false});await form.handlers.submit(event);
  assert.match(element('form-status').textContent,/could not confirm/);assert(!form.wasReset);
  context.fetch=async()=>({ok:true});await form.handlers.submit(event);assert(form.wasReset);assert(!element('contact-submit-btn').disabled);
  console.log('PASS: assets, anchors, IDs, slider, modal, menu, disconnected/failed/successful form handling (mock DOM and network).');
  console.log('HTML size:', Buffer.byteLength(html), 'bytes');
})().catch(error=>{console.error(error);process.exitCode=1});

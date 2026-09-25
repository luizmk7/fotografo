/* Native motion: no animation dependency, no continuous rendering loop. */
(() => {
 const reduced = matchMedia('(prefers-reduced-motion: reduce)');
 if (!reduced.matches) document.documentElement.classList.add('motion-ready');
 document.querySelectorAll('.plans .reveal').forEach((el,i)=>el.style.setProperty('--reveal-delay',`${i*85}ms`));
 document.querySelectorAll('.portfolio-row').forEach(row=>{
   const track=row.querySelector('.category-track'), cards=[...track.children], status=row.querySelector('.track-status');
   function update(){
     const start=track.getBoundingClientRect().left+parseFloat(getComputedStyle(track).paddingLeft);
     let index=0; cards.forEach((card,i)=>{if(Math.abs(card.getBoundingClientRect().left-start)<Math.abs(cards[index].getBoundingClientRect().left-start))index=i});
     const max=track.scrollWidth-track.clientWidth;
     row.querySelector('.category-prev').disabled=track.scrollLeft<3;
     row.querySelector('.category-next').disabled=track.scrollLeft>=max-3;
     status.firstChild.textContent=max<3?'04 HISTÓRIAS ':`${String(index+1).padStart(2,'0')} — 04 `;
     status.lastChild.textContent=max<3?'EXPLORE AS GALERIAS':'DESLIZE PARA EXPLORAR';
     status.style.setProperty('--track-progress',`${max<3?100:(index+1)*25}%`);
   }
   let pending=false;track.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(()=>{update();pending=false})}},{passive:true});
   new ResizeObserver(update).observe(track);update();
 });
 const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('.mobile-nav');
 function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');nav.classList.remove('open')}
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});
 document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu()});
 document.querySelectorAll('[data-plan]').forEach(a=>a.addEventListener('click',()=>{const label=document.querySelector('.selected-plan');label.hidden=false;label.textContent=`Pacote de interesse: ${a.dataset.plan}`}));
 const dialog=document.querySelector('#gallery-dialog'),img=dialog.querySelector('.dialog-image');
 let startX=0,startY=0;
 img.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX;startY=e.changedTouches[0].clientY},{passive:true});
 img.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy))dialog.querySelector(dx<0?'.dialog-next':'.dialog-prev').click()},{passive:true});
 const feature=document.querySelector('.feature-photo'),photo=feature.querySelector('img');let visible=false,pending=false;
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting},{rootMargin:'100px'}).observe(feature);
 function scrollMotion(){if(pending||reduced.matches||!visible)return;pending=true;requestAnimationFrame(()=>{const rect=feature.getBoundingClientRect();const progress=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));photo.style.transform=`scale(${1.075-progress*.075})`;pending=false})}
 addEventListener('scroll',scrollMotion,{passive:true});reduced.addEventListener('change',()=>{if(reduced.matches){document.documentElement.classList.remove('motion-ready');photo.style.transform='none'}});
})();

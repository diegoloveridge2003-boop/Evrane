const menu=document.getElementById('menuBtn'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const search=document.getElementById('search');
search.addEventListener('input',e=>{
 const q=e.target.value.toLowerCase().trim();
 document.querySelectorAll('#paragonCards .character').forEach(card=>{
  card.style.display=card.dataset.name.includes(q)?'block':'none';
 });
});

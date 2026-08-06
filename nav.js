(function(){
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('nav ul');
  if(!toggle || !menu) return;
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
})();

document.documentElement.classList.add('js-ready');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function closeMenu(restoreFocus = false) {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menu.classList.toggle('is-open', open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (event.target instanceof Element && !event.target.closest('.header') && menu.classList.contains('is-open')) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

function openWhatsApp(text) {
  window.location.assign('https://wa.me/5535991465090?text=' + encodeURIComponent(text));
}
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const department = document.querySelector('#department').value;
  const message = document.querySelector('#message').value.trim();
  openWhatsApp(`Oi Agrovila! Quero falar sobre ${department}.${message ? ' ' + message : ''}`);
});
const privacyDialog = document.querySelector('#privacy-dialog');
document.querySelector('.privacy-open').addEventListener('click', () => privacyDialog.showModal());
document.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', () => privacyDialog.close()));
privacyDialog.addEventListener('click', event => {
  if (event.target !== privacyDialog) return;
  const box = privacyDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) privacyDialog.close();
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Content is visible without JavaScript; effects only run on entry, never gate access.
if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (!reducedMotion.matches) entry.target.classList.add('enter-motion');
      reveal.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.department,.how,.story,.contact').forEach(item => reveal.observe(item));
  const navLinks = [...menu.querySelectorAll('a[href^="#"]')];
  const currentSection = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -60% 0px' });
  navLinks.forEach(link => { const target = document.querySelector(link.hash); if (target) currentSection.observe(target); });
}

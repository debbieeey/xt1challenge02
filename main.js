function classToggle() {
  const navs = document.querySelectorAll('.nav-item')
  
  navs.forEach(nav => nav.classList.toggle('nav-toggle-show'));
}
document.querySelector('.nav-link-toggle')
  .addEventListener('click', classToggle);
function menuToggle() {
  const navs = document.querySelectorAll('.nav-item')
  
  navs.forEach(nav => nav.classList.toggle('nav-toggle-show'));
}
document.querySelector('.nav-menu-toggle')
  .addEventListener('click', menuToggle);
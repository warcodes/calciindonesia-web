const isHome = document.getElementsByClassName('active')[0].textContent === 'Home';

if (isHome) {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav-transparent');
    if (window.scrollY > 30) {
      nav.classList.add('bg-black');
    } else {
      nav.classList.remove('bg-black');
    }
  });
}


const menuButton = document.getElementsByClassName('menu')[0];
const closeButton = document.getElementsByClassName('close')[0];
const navMobile = document.getElementsByClassName('nav-mobile')[0];

menuButton.addEventListener('click', () => {
  navMobile.classList.add('show');
  closeButton.classList.add('show');
  menuButton.classList.add('hidden');
});

closeButton.addEventListener('click', () => {
  navMobile.classList.remove('show');
  closeButton.classList.remove('show');
  menuButton.classList.remove('hidden');
})
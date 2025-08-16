const cube = document.getElementById('home-cube');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    // user has scrolled down → hide cube
    cube.classList.add('hidden');
  } else {
    // back to very top → show cube
    cube.classList.remove('hidden');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cube = document.getElementById('home-cube');
  if (cube) {
    requestAnimationFrame(() => cube.classList.add('loaded'));
  }
});

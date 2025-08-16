const cube = document.getElementById('home-cube');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scrolling down → hide (more like fade) cube
    cube.classList.add('hidden');
  } else {
    // scrolling up → show cube
    cube.classList.remove('hidden');
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll; // avoid negatives
});

document.addEventListener("DOMContentLoaded", function () {
  const cube = document.getElementById('home-cube');
  if (cube) {
    requestAnimationFrame(() => cube.classList.add('loaded'));
  }
});

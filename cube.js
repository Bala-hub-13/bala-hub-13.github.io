const cube = document.getElementById('home-cube');

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    // At top → show cube
    cube.classList.remove('hidden');
  } else {
    // Anywhere else → hide cube
    cube.classList.add('hidden');
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const cube = document.getElementById('home-cube');
  if (cube) {
    requestAnimationFrame(() => cube.classList.add('loaded'));
  }
});

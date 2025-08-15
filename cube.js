document.addEventListener("DOMContentLoaded", function () {
  const cube = document.getElementById('home-cube');
  if (cube) {
    requestAnimationFrame(() => cube.classList.add('loaded'));
  }
});

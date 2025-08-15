      const cubeImg = document.querySelector('a[href="/"] img');
      cubeImg.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(10deg)';
        this.style.opacity = '1';
      });
      cubeImg.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0deg)';
        this.style.opacity = '0.8';
      });
        document.addEventListener("DOMContentLoaded", function() {
    const cube = document.getElementById('home-cube');
    requestAnimationFrame(() => cube.classList.add('loaded'));
  });
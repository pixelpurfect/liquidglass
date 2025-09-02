// Add subtle 3D tilt to hero content on mouse move
const hero = document.querySelector('.hero-content');
hero.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;
  const x = (offsetX / hero.offsetWidth) - 0.5;
  const y = (offsetY / hero.offsetHeight) - 0.5;

  hero.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
});

hero.addEventListener('mouseleave', () => {
  hero.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

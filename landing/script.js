// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Fade-In Animation for Sections
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.4 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
// Efecto Parallax Avanzado
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = `${scrollPosition * -0.8}px`; // Ajusta la velocidad del parallax
});
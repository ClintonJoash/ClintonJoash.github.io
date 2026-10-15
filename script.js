// Mobile Navigation Toggle
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }));
}

// Current Year Footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Silk AI Typing Effect on Scroll / Intersection
document.addEventListener("DOMContentLoaded", () => {
  const typingElements = document.querySelectorAll('.type-on-scroll');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const fullText = el.getAttribute('data-typed');
        if (fullText && !el.classList.contains('typed')) {
          el.classList.add('typed');
          el.textContent = '';
          let i = 0;
          const speed = 18; // typing speed in milliseconds
          
          function typeWriter() {
            if (i < fullText.length) {
              el.textContent += fullText.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
            }
          }
          typeWriter();
        }
        observer.unobserve(el);
      }
    });
  }, observerOptions);

  typingElements.forEach(el => observer.observe(el));
});

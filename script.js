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

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const typingElements = document.querySelectorAll('.type-on-scroll, .typed-text');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const fullText = el.getAttribute('data-typed') || el.getAttribute('data-text') || el.textContent.trim();
        if (fullText && !el.classList.contains('is-typed')) {
          el.classList.add('is-typed');
          el.textContent = '';
          let i = 0;
          const speed = 16;
          (function typeWriter() {
            if (i < fullText.length) {
              el.textContent += fullText.charAt(i++);
              setTimeout(typeWriter, speed);
            }
          })();
        }
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  typingElements.forEach(el => observer.observe(el));
});

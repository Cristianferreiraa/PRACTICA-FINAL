// 1. Marca l'enllaç actiu del menú segons la pàgina actual
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');
    const currentUrl = window.location.href;
  
    links.forEach(link => {
      if (currentUrl.includes(link.getAttribute('href'))) {
        link.classList.add('active');
      }
    });
  });
  
  // 2. Efecte fade-in al fer scroll
  const faders = document.querySelectorAll('.fade-in');
  
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  // 3. Missatge de confirmació d'enviament del formulari
  const contactForm = document.querySelector('form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // evita el reenvio real
      alert('Gràcies per contactar amb nosaltres!');
      contactForm.reset();
    });
  }

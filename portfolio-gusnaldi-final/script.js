
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.3}s`;
  });

  // Dark Mode Toggle
  const toggleBtn = document.createElement('button');
  toggleBtn.innerText = '🌓 Mode';
  toggleBtn.className = 'toggle-btn';
  toggleBtn.onclick = () => {
    document.body.classList.toggle('dark');
  };
  document.body.appendChild(toggleBtn);

  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll('section');
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) {
        el.classList.add('fade-in');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

// Galeri filter
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.gallery img').forEach(img => {
      const category = img.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        img.style.display = 'inline-block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});

// script.js

document.addEventListener('DOMContentLoaded', () => {

    // Animate skills/tools hover
    const skillElements = document.querySelectorAll('.skills span, .tools span');
    skillElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.2)';
        el.style.backgroundColor = '#4a90e2';
        el.style.color = 'white';
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
        el.style.backgroundColor = '#e1f0ff';
        el.style.color = '#333';
      });
    });
  
    // Fade-in sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
  
    sections.forEach(section => observer.observe(section));
  
    // Social icon rotation on hover
    const socialIcons = document.querySelectorAll('.social-links a');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => icon.style.transform = 'rotate(-10deg) scale(1.3)');
      icon.addEventListener('mouseleave', () => icon.style.transform = 'rotate(0deg) scale(1)');
    });
  });
  
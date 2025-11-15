document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Intersection Observer for scroll-activated fade-in effect ---
  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Observe all elements with the .fade-in-on-scroll class
  document.querySelectorAll('.fade-in-on-scroll').forEach(element => {
    fadeInObserver.observe(element);
  });

  // --- 2. Dynamic header style on scroll ---
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) { // Add class after scrolling 30px
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- 3. Footer accordion for mobile view ---
  const isMobile = () => window.innerWidth <= 1024;
  
  document.querySelectorAll('.footer-list .list-head').forEach(listHead => {
    listHead.addEventListener('click', (event) => {
      if (isMobile()) {
        event.preventDefault(); // Prevent default anchor behavior if any
        const content = listHead.nextElementSibling;
        
        // Toggle active class on the header
        listHead.classList.toggle('active');
        
        // Smoothly open/close the content
        if (listHead.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.paddingTop = '1rem'; // Add padding when open
        } else {
          content.style.maxHeight = null;
          content.style.paddingTop = null;
        }
      }
    });
  });

});

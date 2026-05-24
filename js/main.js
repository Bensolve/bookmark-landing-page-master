// js/main.js

document.addEventListener('DOMContentLoaded', () => {

  /* ==================== MOBILE MENU ==================== */
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');

  function toggleMobileMenu() {
    const isOpen = navMenu.classList.toggle('nav__menu--open');
    
    if (navToggle) navToggle.style.display = isOpen ? 'none' : 'block';
    if (navClose) navClose.style.display = isOpen ? 'block' : 'none';
    
    navToggle?.setAttribute('aria-expanded', isOpen);
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', toggleMobileMenu);
  }
  
  if (navClose && navMenu) {
    navClose.addEventListener('click', toggleMobileMenu);
  }


  /* ==================== FEATURES TABS ==================== */
  const tabs = document.querySelectorAll('.features__tab');
  const tabContents = document.querySelectorAll('.features__content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show corresponding content
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.dataset.tab === tab.dataset.tab) {
          content.classList.add('active');
        }
      });
    });
  });


  /* ==================== FAQ ACCORDION ==================== */
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });


  /* ==================== NEWSLETTER FORM ==================== */
  const newsletterForm = document.querySelector('.newsletter__form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      
      if (!emailInput.value.trim()) {
        alert("Please enter your email address");
      } else if (!emailInput.value.includes('@')) {
        alert("Please enter a valid email address");
      } else {
        alert("Thank you! You've been added to our list.");
        newsletterForm.reset();
      }
    });
  }

});
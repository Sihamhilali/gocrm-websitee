document.addEventListener('DOMContentLoaded', function () {

  /* ========================================
     1. NAVBAR SCROLL EFFECT
     ======================================== */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('nav--scrolled');
      } else {
        navbar.classList.remove('nav--scrolled');
      }
    }, { passive: true });
  }

  /* ========================================
     2. MOBILE MENU TOGGLE
     ======================================== */
  var menuToggle = document.getElementById('menu-toggle');
  var menuClose = document.getElementById('menu-close');
  var menuOverlay = document.getElementById('menu-overlay');
  var mobileMenu = document.getElementById('mobile-menu');

  function openMobileMenu() {
    if (mobileMenu) mobileMenu.classList.add('mobile-menu--open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('mobile-menu--open');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', openMobileMenu);
  }
  if (menuClose) {
    menuClose.addEventListener('click', closeMobileMenu);
  }
  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMobileMenu);
  }

  /* ========================================
     3. SCROLL REVEAL ANIMATIONS
     ======================================== */
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ========================================
     4. ANIMATED COUNTERS
     ======================================== */
  var counterElements = document.querySelectorAll('[data-count]');
  if (counterElements.length > 0 && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    counterElements.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var isDecimal = target % 1 !== 0;
    var duration = 2000;
    var startTime = null;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = easeOutCubic(progress);
      var currentValue = easedProgress * target;

      if (isDecimal) {
        el.textContent = currentValue.toFixed(1) + suffix;
      } else {
        el.textContent = Math.floor(currentValue) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        if (isDecimal) {
          el.textContent = target.toFixed(1) + suffix;
        } else {
          el.textContent = target + suffix;
        }
      }
    }

    requestAnimationFrame(step);
  }

  /* ========================================
     5. FAQ ACCORDION
     ======================================== */
  var faqItems = document.querySelectorAll('[data-faq]');
  faqItems.forEach(function (item) {
    var questionBtn = item.querySelector('.faq-item__question');
    if (questionBtn) {
      questionBtn.addEventListener('click', function () {
        var isOpen = item.classList.contains('faq-item--open');

        // Close all other items in the same group
        var group = item.parentElement;
        if (group) {
          var siblings = group.querySelectorAll('.faq-item');
          siblings.forEach(function (sibling) {
            if (sibling !== item) {
              sibling.classList.remove('faq-item--open');
            }
          });
        }

        // Toggle current item
        if (isOpen) {
          item.classList.remove('faq-item--open');
        } else {
          item.classList.add('faq-item--open');
        }
      });
    }
  });

  /* ========================================
     6. FEATURES PAGE TABS
     ======================================== */
  var tabButtons = document.querySelectorAll('[data-tab]');
  var tabContents = document.querySelectorAll('[data-tab-content]');

  if (tabButtons.length > 0) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tabId = btn.getAttribute('data-tab');

        // Remove active from all tabs
        tabButtons.forEach(function (b) {
          b.classList.remove('tab--active');
        });

        // Add active to clicked tab
        btn.classList.add('tab--active');

        // Hide all tab contents, show matching
        tabContents.forEach(function (panel) {
          if (panel.getAttribute('data-tab-content') === tabId) {
            panel.classList.add('tab-content--active');
          } else {
            panel.classList.remove('tab-content--active');
          }
        });
      });
    });
  }

  /* ========================================
     7. PRICING TOGGLE (Monthly/Annual)
     ======================================== */
  var pricingToggle = document.querySelector('.pricing-toggle__switch');
  var monthlyBtn = document.querySelector('.pricing-toggle__btn--monthly');
  var annualBtn = document.querySelector('.pricing-toggle__btn--annual');
  var isAnnual = false;

  if (pricingToggle) {
    pricingToggle.addEventListener('click', function () {
      isAnnual = !isAnnual;
      pricingToggle.classList.toggle('pricing-toggle__switch--active', isAnnual);

      if (monthlyBtn) monthlyBtn.classList.toggle('pricing-toggle__btn--active', !isAnnual);
      if (annualBtn) annualBtn.classList.toggle('pricing-toggle__btn--active', isAnnual);

      var monthlyEls = document.querySelectorAll('[data-monthly]');
      var annualEls = document.querySelectorAll('[data-annual]');

      monthlyEls.forEach(function (el) {
        el.style.display = isAnnual ? 'none' : '';
      });
      annualEls.forEach(function (el) {
        el.style.display = isAnnual ? '' : 'none';
      });
    });
  }

  /* ========================================
     8. SMOOTH SCROLL FOR ANCHOR LINKS
     ======================================== */
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (href && href.length > 1) {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  /* ========================================
     9. CONTACT FORM (basic prevention)
     ======================================== */
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! We\'ll get back to you soon.');
    });
  }

});
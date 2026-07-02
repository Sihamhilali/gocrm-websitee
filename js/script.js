/* ==========================================================================
   GoCRM — Static Site JavaScript
   Vanilla JS — No Dependencies
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ========================================
     1. NAVBAR SCROLL EFFECT
     ======================================== */
  var navbar = document.getElementById('navbar');
  var isHomePage = document.body.classList.contains('page-home');

  if (navbar) {
    // Start solid on inner pages
    if (!isHomePage) {
      navbar.classList.add('nav--scrolled');
    }

    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('nav--scrolled');
      } else {
        if (isHomePage) {
          navbar.classList.remove('nav--scrolled');
        }
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
    if (menuOverlay) menuOverlay.classList.add('mobile-overlay--visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('mobile-menu--open');
    if (menuOverlay) menuOverlay.classList.remove('mobile-overlay--visible');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
  if (menuClose) menuClose.addEventListener('click', closeMobileMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMobileMenu);

  // Close on mobile link click
  if (mobileMenu) {
    var mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileMenu();
  });

  /* ========================================
     3. SCROLL REVEAL ANIMATIONS
     ======================================== */
  function initScrollAnimations() {
    var elements = document.querySelectorAll('[data-animate], .reveal');

    if (elements.length === 0 || !('IntersectionObserver' in window)) {
      // Fallback: make everything visible
      elements.forEach(function (el) { el.classList.add('reveal--visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var type = el.getAttribute('data-animate') || '';

          if (type === 'stagger') {
            var children = el.children;
            Array.from(children).forEach(function (child, i) {
              setTimeout(function () {
                child.classList.add('reveal--visible');
              }, i * 100);
            });
          } else {
            el.classList.add('reveal--visible');
          }

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.08, rootMargin: '-40px' });

    elements.forEach(function (el) {
      var type = el.getAttribute('data-animate') || '';
      if (type === 'stagger') {
        Array.from(el.children).forEach(function (child) {
          child.style.opacity = '0';
          child.style.transform = 'translateY(24px)';
          child.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
      } else if (!el.classList.contains('reveal')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      }
      observer.observe(el);
    });
  }

  initScrollAnimations();

  /* ========================================
     4. ANIMATED COUNTERS
     Supports: data-count, data-target, data-counter
     ======================================== */
  function animateCounter(el) {
    var target = parseFloat(
      el.getAttribute('data-count') ||
      el.getAttribute('data-target') ||
      el.getAttribute('data-counter') ||
      '0'
    );
    var suffix = el.getAttribute('data-suffix') ||
                 el.getAttribute('data-counter-suffix') || '';
    var isDecimal = el.hasAttribute('data-counter-decimal') ||
                    el.hasAttribute('data-decimal') ||
                    (target % 1 !== 0);
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
        el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  var counterSelectors = '[data-count], [data-target], [data-counter]';
  var counterElements = document.querySelectorAll(counterSelectors);

  if (counterElements.length > 0 && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /* ========================================
     5. FAQ ACCORDION
     Supports: data-faq-trigger, .faq-item__question
     ======================================== */
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-faq-trigger], .faq-item__question, .faq__question');
    if (!trigger) return;

    var faqItem = trigger.closest('.faq-item') || trigger.closest('[data-faq]');
    if (!faqItem) return;

    var content = faqItem.querySelector('[data-faq-content]') ||
                  faqItem.querySelector('.faq-item__answer') ||
                  faqItem.querySelector('.faq__answer');
    var isOpen = faqItem.classList.contains('faq-item--open');

    // Close siblings in same section
    var section = faqItem.closest('.faq-section, .faq-group, .faq-list, .pricing-faq');
    if (section) {
      var siblings = section.querySelectorAll('.faq-item, [data-faq]');
      siblings.forEach(function (sibling) {
        if (sibling !== faqItem) {
          sibling.classList.remove('faq-item--open');
          var sibContent = sibling.querySelector('[data-faq-content], .faq-item__answer, .faq__answer');
          if (sibContent) sibContent.style.maxHeight = '0';
          var sibChevron = sibling.querySelector('.faq-chevron, .faq-item__chevron');
          if (sibChevron) sibChevron.style.transform = '';
        }
      });
    }

    // Toggle current
    if (isOpen) {
      faqItem.classList.remove('faq-item--open');
      if (content) content.style.maxHeight = '0';
    } else {
      faqItem.classList.add('faq-item--open');
      if (content) content.style.maxHeight = content.scrollHeight + 'px';
    }

    // Rotate chevron
    var chevron = faqItem.querySelector('.faq-chevron, .faq-item__chevron');
    if (chevron) {
      chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    }
  });

  /* ========================================
     6. TAB SYSTEM
     ======================================== */
  var tabButtons = document.querySelectorAll('[data-tab]');
  var tabContents = document.querySelectorAll('[data-tab-content]');

  if (tabButtons.length > 0) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tabId = btn.getAttribute('data-tab');

        tabButtons.forEach(function (b) {
          b.classList.remove('tab--active', 'tabs__btn--active', 'active');
        });
        btn.classList.add('tab--active', 'tabs__btn--active', 'active');

        tabContents.forEach(function (panel) {
          if (panel.getAttribute('data-tab-content') === tabId) {
            panel.classList.add('tab-content--active', 'active');
            panel.style.display = '';
          } else {
            panel.classList.remove('tab-content--active', 'active');
            panel.style.display = 'none';
          }
        });
      });
    });
  }

  /* ========================================
     7. PRICING TOGGLE (Monthly/Annual)
     Supports: data-toggle="billing", .pricing-toggle__switch
     data-monthly / data-annual, data-price-monthly / data-price-annual
     ======================================== */
  var pricingToggle = document.querySelector('[data-toggle="billing"], .pricing-toggle__switch');
  var isAnnual = false;

  function updatePricing() {
    // Toggle switch visual
    if (pricingToggle) {
      pricingToggle.classList.toggle('pricing-toggle__switch--active', isAnnual);
      var knob = pricingToggle.querySelector('.pricing-toggle__knob');
      if (knob) knob.style.transform = isAnnual ? 'translateX(24px)' : 'translateX(0)';
    }

    // Toggle button labels
    var monthlyLabel = document.querySelector('.pricing-toggle__btn--monthly');
    var annualLabel = document.querySelector('.pricing-toggle__btn--annual');
    if (monthlyLabel) monthlyLabel.classList.toggle('pricing-toggle__btn--active', !isAnnual);
    if (annualLabel) annualLabel.classList.toggle('pricing-toggle__btn--active', isAnnual);

    // Update prices - data-monthly / data-annual pattern
    var monthlyEls = document.querySelectorAll('[data-monthly]');
    var annualEls = document.querySelectorAll('[data-annual]');
    monthlyEls.forEach(function (el) { el.style.display = isAnnual ? 'none' : ''; });
    annualEls.forEach(function (el) { el.style.display = isAnnual ? '' : 'none'; });

    // Update prices - data-price-monthly / data-price-annual pattern
    var priceEls = document.querySelectorAll('[data-price-monthly]');
    priceEls.forEach(function (el) {
      el.textContent = isAnnual
        ? '$' + el.getAttribute('data-price-annual')
        : '$' + el.getAttribute('data-price-monthly');
    });
  }

  if (pricingToggle) {
    pricingToggle.addEventListener('click', function () {
      isAnnual = !isAnnual;
      updatePricing();
    });
  }

  /* ========================================
     8. SMOOTH SCROLL FOR ANCHOR LINKS
     ======================================== */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (href && href.length > 1) {
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  /* ========================================
     9. ACTIVE NAV LINK HIGHLIGHTING
     ======================================== */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link');

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active', 'mobile-menu__link--active');
    } else {
      link.classList.remove('nav__link--active', 'mobile-menu__link--active');
    }
  });

  /* ========================================
     10. CONTACT FORM VALIDATION
     ======================================== */
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      var requiredFields = contactForm.querySelectorAll('[required]');

      // Clear previous errors
      contactForm.querySelectorAll('.form-error').forEach(function (err) {
        err.textContent = '';
      });

      requiredFields.forEach(function (field) {
        var errorEl = field.parentElement.querySelector('.form-error') ||
                      field.parentElement.parentElement.querySelector('.form-error');
        if (!field.value.trim()) {
          valid = false;
          if (errorEl) errorEl.textContent = 'This field is required';
          field.style.borderColor = '#ef4444';
        } else {
          field.style.borderColor = '';
          if (errorEl) errorEl.textContent = '';
        }

        // Email validation
        if (field.type === 'email' && field.value.trim()) {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            valid = false;
            if (errorEl) errorEl.textContent = 'Please enter a valid email';
            field.style.borderColor = '#ef4444';
          }
        }
      });

      if (valid) {
        alert('Thank you for your message! We\'ll get back to you soon.');
        contactForm.reset();
      }
    });
  }

  /* ========================================
     11. FEATURES PAGE — Show first tab, hide rest
     ======================================== */
  var firstTab = document.querySelector('[data-tab]');
  if (firstTab && tabContents.length > 0) {
    tabContents.forEach(function (panel) {
      if (panel.getAttribute('data-tab-content') !== firstTab.getAttribute('data-tab')) {
        panel.style.display = 'none';
      }
    });
    firstTab.classList.add('tab--active', 'tabs__btn--active', 'active');
  }

});
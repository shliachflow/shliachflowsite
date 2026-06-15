/* ============================================================
   ShliachFlow — script.js
   FAQ accordion · Mobile nav · Nav scroll behavior · Smooth scroll
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav scroll behavior ────────────────────────────────── */
  const nav = document.getElementById('nav');
  const hero = document.getElementById('hero');

  function updateNav() {
    if (!nav || !hero) return;
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    if (window.scrollY > heroBottom - 80) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ── Mobile nav ─────────────────────────────────────────── */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');

  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('is-open');
    hamburger && hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('is-open');
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      mobileNav && mobileNav.classList.contains('is-open')
        ? closeMobileNav()
        : openMobileNav();
    });
  }

  // Close on link click
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });
  }

  // Close on outside tap
  document.addEventListener('click', function (e) {
    if (
      mobileNav &&
      mobileNav.classList.contains('is-open') &&
      !mobileNav.contains(e.target) &&
      hamburger && !hamburger.contains(e.target)
    ) {
      closeMobileNav();
    }
  });

  /* ── FAQ accordion ──────────────────────────────────────── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    const toggle = item.querySelector('.faq-toggle');

    if (!question) return;

    question.addEventListener('click', function () {
      const isOpen = item.classList.contains('is-open');

      // Close all
      faqItems.forEach(function (other) {
        other.classList.remove('is-open');
        const t = other.querySelector('.faq-toggle');
        if (t) t.textContent = '+';
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('is-open');
        if (toggle) toggle.textContent = '×';
      }
    });
  });

  /* ── Smooth scroll polyfill for anchor links ────────────── */
  // CSS scroll-behavior: smooth handles most cases.
  // This handles edge cases in older Safari.
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

})();

/* ── Scroll reveal (IntersectionObserver) ──────────────────── */
(function () {

  const selectors = [
    'section > .container > h2',
    '.service-featured', '.service-item',
    '.testimonial-pull', '.faq-item',
    '.about-text', '.pricing-copy', '.portfolio-card',
    '.hiw-item', '.intro-inner'
  ];

  document.querySelectorAll(selectors.join(',')).forEach(function (el) {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      if (el.parentElement && el.parentElement.children.length > 1) {
        el.classList.add('stagger-child');
      }
    }
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();

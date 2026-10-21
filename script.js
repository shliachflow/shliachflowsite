/* ============================================================
   ShliachFlow — script.js
   FAQ accordion · Mobile nav · Nav scroll behavior · Smooth scroll
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav scroll behavior ────────────────────────────────── */
  const nav = document.getElementById('nav');
  const hero = document.getElementById('hero') || document.querySelector('.portfolio-page-hero');

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
    '.testimonial-pull',
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

/* ── Work strip arrows ─────────────────────────────────────── */
(function () {
  const track = document.querySelector('.portfolio-grid');
  const arrows = document.querySelectorAll('.work-arrow');
  if (!track || !arrows.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function step() {
    const card = track.querySelector('.portfolio-card');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card ? card.getBoundingClientRect().width + gap : 300;
  }
  function update() {
    const max = track.scrollWidth - track.clientWidth - 2;
    arrows.forEach(function (a) {
      const dir = Number(a.dataset.dir);
      a.disabled = dir < 0 ? track.scrollLeft <= 2 : track.scrollLeft >= max;
    });
  }
  arrows.forEach(function (a) {
    a.addEventListener('click', function () {
      track.scrollBy({ left: Number(a.dataset.dir) * step(), behavior: reduce ? 'auto' : 'smooth' });
    });
  });
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* Work strip: click-and-drag with a mouse (touch keeps native swiping) */
(function () {
  const track = document.querySelector('.portfolio-grid');
  if (!track) return;
  let drag = null;
  track.addEventListener('mousedown', function (e) {
    if (e.button !== 0) return;
    drag = { x: e.clientX, left: track.scrollLeft, moved: false };
  });
  window.addEventListener('mousemove', function (e) {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (!drag.moved && Math.abs(dx) > 5) { drag.moved = true; track.classList.add('is-dragging'); }
    if (drag.moved) track.scrollLeft = drag.left - dx;
  });
  window.addEventListener('mouseup', function () {
    if (!drag) return;
    const moved = drag.moved;
    drag = null;
    track.classList.remove('is-dragging');
    if (moved) track.dataset.justDragged = '1';
    setTimeout(function () { delete track.dataset.justDragged; }, 0);
  });
  track.addEventListener('click', function (e) {
    if (track.dataset.justDragged) { e.preventDefault(); e.stopPropagation(); }
  }, true);
  track.addEventListener('dragstart', function (e) { e.preventDefault(); });
})();

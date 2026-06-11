/* ============================================================
   MAIN.JS — CLEANED CircLynk Theme
   ============================================================ */
'use strict';

/* =========================
   NAVIGATION
========================= */

function initNav() {
  const toggler = document.querySelector('.navbar-toggler');
  const nav = document.querySelector('.navbar-nav');
  const items = document.querySelectorAll('.nav-item.has-mega');

  if (!nav) return;

  /* ---- MOBILE TOGGLE ---- */
  if (toggler) {
    toggler.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggler.classList.toggle('open', open);
      toggler.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  /* ---- MOBILE MEGA TOGGLE ---- */
  document.querySelectorAll('.nav-item.has-mega > .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();

        const item = link.parentElement;

        // close others
        document.querySelectorAll('.nav-item.mobile-open')
          .forEach(i => {
            if (i !== item) i.classList.remove('mobile-open');
          });

        item.classList.toggle('mobile-open');
      }
    });
  });

  /* ---- DESKTOP HOVER STATE (NO BUGGY GLOBAL SCOPES) ---- */
  items.forEach(item => {
    let timer;

    item.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      item.classList.add('open');
    });

    item.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        item.classList.remove('open');
      }, 220); // hover buffer (fixes flicker)
    });
  });

  /* ---- OUTSIDE CLICK CLOSE ---- */
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-header') && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggler?.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* ---- ESC CLOSE ---- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      nav.classList.remove('open');
      toggler?.classList.remove('open');
      document.querySelectorAll('.nav-item.mobile-open')
        .forEach(i => i.classList.remove('mobile-open'));
    }
  });
}

/* =========================
   AOS
========================= */

function initAOS() {
  const els = document.querySelectorAll('[data-aos]');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('aos-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el, i) => {
    const delay = el.dataset.aosDelay || (i * 60);
    el.style.transitionDelay = delay + 'ms';
    obs.observe(el);
  });
}

/* =========================
   TOC
========================= */

function initTOC() {
  const tocContainer = document.getElementById('toc-auto');
  if (!tocContainer) return;

  const headings = document.querySelectorAll('.prose h2, .prose h3');

  headings.forEach((h, i) => {
    if (!h.id) h.id = 'section-' + i;

    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.className = 'toc-link' + (h.tagName === 'H3' ? ' h3' : '');
    a.textContent = h.textContent;

    tocContainer.appendChild(a);
  });

  const links = document.querySelectorAll('.toc-link');

  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(
          '.toc-link[href="#' + e.target.id + '"]'
        );
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  headings.forEach(h => spy.observe(h));
}

/* =========================
   COPY LINK
========================= */

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.querySelector('[data-copy-link]');
    if (!btn) return;

    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = orig, 2000);
  });
}

/* =========================
   COUNTDOWN
========================= */

function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;

  const target = new Date(el.dataset.target || '2025-12-01T00:00:00');

  function update() {
    const diff = target - new Date();

    if (diff <= 0) {
      el.textContent = 'Live!';
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const fmt = n => String(n).padStart(2, '0');

    document.getElementById('cd-days')  && (document.getElementById('cd-days').textContent = fmt(d));
    document.getElementById('cd-hours') && (document.getElementById('cd-hours').textContent = fmt(h));
    document.getElementById('cd-mins')  && (document.getElementById('cd-mins').textContent = fmt(m));
    document.getElementById('cd-secs')  && (document.getElementById('cd-secs').textContent = fmt(s));
  }

  update();
  setInterval(update, 1000);
}

/* =========================
   EMAIL FORM
========================= */

function initEmailForm() {
  document.querySelectorAll('[data-email-form]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();

      const input = form.querySelector('input[type=email]');
      const btn = form.querySelector('button[type=submit]');
      const success = form.querySelector('[data-success]');

      if (!input) return;

      const email = input.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!valid) {
        input.classList.add('error');
        return;
      }

      input.classList.remove('error');
      if (btn) btn.disabled = true;

      const list = JSON.parse(localStorage.getItem('cl_waitlist') || '[]');
      if (!list.includes(email)) {
        list.push(email);
        localStorage.setItem('cl_waitlist', JSON.stringify(list));
      }

      await new Promise(r => setTimeout(r, 500));

      form.style.display = 'none';
      if (success) success.style.display = 'block';
    });
  });
}

/* =========================
   SMOOTH SCROLL
========================= */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* =========================
   ACTIVE NAV
========================= */

function setActiveNav() {
  const path = window.location.pathname;

  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');

    if (href && href !== '/' && path.startsWith(href)) {
      a.classList.add('active');
    }
  });
}

/* =========================
   INIT
========================= */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAOS();
  initTOC();
  initCountdown();
  initEmailForm();
  initSmoothScroll();
  setActiveNav();
});
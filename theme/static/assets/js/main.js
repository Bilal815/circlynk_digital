/* ============================================================
   MAIN.JS — CircLynk Digital Pelican Theme
   ============================================================ */
'use strict';

/* ---- NAV TOGGLE ---- */
function initNav() {
  const toggler = document.querySelector('.navbar-toggler');
  const nav     = document.querySelector('.navbar-nav');
  if (!toggler || !nav) return;

  toggler.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggler.classList.toggle('open', open);
    toggler.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Mobile mega-menu toggles
  document.querySelectorAll('.nav-item.has-mega').forEach(item => {
    const link = item.querySelector('.nav-link');
    link.addEventListener('click', e => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        item.classList.toggle('mobile-open');
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.site-header') && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggler.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ---- AOS (Animate On Scroll) ---- */
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

/* ---- TOC HIGHLIGHT ---- */
function initTOC() {
  const links = document.querySelectorAll('.toc-link');
  if (!links.length) return;

  const headings = Array.from(
    document.querySelectorAll('.prose h2, .prose h3')
  ).filter(h => h.id);

  // Auto-generate IDs
  document.querySelectorAll('.prose h2, .prose h3').forEach((h, i) => {
    if (!h.id) h.id = 'heading-' + i;
  });

  // Build TOC dynamically if container exists
  const tocContainer = document.getElementById('toc-auto');
  if (tocContainer) {
    const all = document.querySelectorAll('.prose h2, .prose h3');
    all.forEach((h, i) => {
      if (!h.id) h.id = 'section-' + i;
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.className = 'toc-link' + (h.tagName === 'H3' ? ' h3' : '');
      a.textContent = h.textContent;
      tocContainer.appendChild(a);
    });
  }

  // Scroll spy
  const allLinks = document.querySelectorAll('.toc-link');
  const allHeadings = document.querySelectorAll('.prose h2[id], .prose h3[id]');

  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        allLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector('.toc-link[href="#' + e.target.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  allHeadings.forEach(h => spy.observe(h));
}

/* ---- COPY LINK ---- */
function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.querySelector('[data-copy-link]');
    if (btn) { const orig = btn.textContent; btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = orig, 2000); }
  });
}

/* ---- COUNTDOWN TIMER ---- */
function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const target = new Date(el.dataset.target || '2025-12-01T00:00:00');

  function update() {
    const now  = new Date();
    const diff = target - now;
    if (diff <= 0) { el.textContent = 'Live!'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const fmt = n => String(n).padStart(2, '0');
    document.getElementById('cd-days')  && (document.getElementById('cd-days').textContent  = fmt(d));
    document.getElementById('cd-hours') && (document.getElementById('cd-hours').textContent = fmt(h));
    document.getElementById('cd-mins')  && (document.getElementById('cd-mins').textContent  = fmt(m));
    document.getElementById('cd-secs')  && (document.getElementById('cd-secs').textContent  = fmt(s));
  }

  update();
  setInterval(update, 1000);
}

/* ---- EMAIL FORM ---- */
function initEmailForm() {
  document.querySelectorAll('[data-email-form]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const input   = form.querySelector('input[type=email]');
      const btn     = form.querySelector('button[type=submit]');
      const success = form.querySelector('[data-success]');
      if (!input) return;

      const email = input.value.trim();
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) { input.classList.add('error'); return; }

      input.classList.remove('error');
      btn && (btn.disabled = true);

      // Store locally
      const list = JSON.parse(localStorage.getItem('cl_waitlist') || '[]');
      if (!list.includes(email)) { list.push(email); localStorage.setItem('cl_waitlist', JSON.stringify(list)); }

      // TODO: POST to your Brevo/Formspree endpoint
      // await fetch('/api/subscribe', { method:'POST', body: JSON.stringify({email}), headers:{'Content-Type':'application/json'} });

      await new Promise(r => setTimeout(r, 600)); // simulate
      form.style.display = 'none';
      if (success) success.style.display = 'block';
    });
  });
}

/* ---- SMOOTH SCROLL ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/* ---- ACTIVE NAV LINK ---- */
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href && path.startsWith(href) && href !== '/') {
      a.classList.add('active');
    }
  });
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAOS();
  initTOC();
  initCountdown();
  initEmailForm();
  initSmoothScroll();
  setActiveNav();
});

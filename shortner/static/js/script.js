/* ------------------------------------------------------------------
   Short.ly — interactive behavior (plain JS, no framework)
   Handles:
   - staggered entrance animation (reads --d custom property)
   - forge (submit) loading state before the real POST fires
   - invalid-URL shake / error messaging
   - copy-to-clipboard with confirmation state
   - scroll-triggered reveal for the feature strip
   - lightweight ember particle drift
------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  /* --- staggered entrance --- */
  document.querySelectorAll('.anim-rise').forEach((el) => {
    const delay = el.style.getPropertyValue('--d') || '0ms';
    el.style.animationDelay = delay;
  });

  /* --- forge submit loading state --- */
  const form = document.getElementById('forge-form');
  const input = document.getElementById('original_url');
  const btn = document.getElementById('forge-btn');
  const hint = document.getElementById('form-hint');
  const forgeBar = document.getElementById('forge-bar');
  const progressBar = document.getElementById('progress-bar');

  function showError(message) {
    forgeBar.classList.remove('is-forging');
    forgeBar.classList.add('is-error');
    if (hint) {
      hint.textContent = message;
      hint.classList.add('is-error-text');
    }
    window.setTimeout(() => forgeBar.classList.remove('is-error'), 500);
  }

  function clearError() {
    if (hint && hint.classList.contains('is-error-text')) {
      hint.textContent = 'One link at a time. Molten metal cools fast.';
      hint.classList.remove('is-error-text');
    }
  }

  function startProgress() {
    if (!progressBar) return;
    progressBar.classList.add('is-active');
    progressBar.style.width = '0%';
    // two-stage ease toward (but not reaching) completion — the real
    // page load/redirect finishes the bar off automatically
    requestAnimationFrame(() => {
      progressBar.style.width = '35%';
      window.setTimeout(() => { progressBar.style.width = '78%'; }, 400);
    });
  }

  if (form && btn) {
    form.addEventListener('submit', (e) => {
      if (!input.value || !input.checkValidity()) {
        e.preventDefault();
        showError('That doesn\u2019t look like a valid URL yet.');
        input.focus();
        return;
      }

      if (btn.disabled) {
        e.preventDefault();
        return; // already forging
      }

      // Loading feedback lives only in the top progress bar — the
      // input and button just go quiet and let it run.
      btn.disabled = true;
      forgeBar.classList.add('is-forging');
      if (hint) {
        hint.textContent = 'Forging your link…';
      }
      startProgress();
      // form submits natively — no need to intercept further
    });

    if (input) {
      input.addEventListener('input', clearError);
    }
  }

  // if the server rendered an error on page load, give the bar a nudge too
  if (document.getElementById('server-error') && forgeBar) {
    forgeBar.classList.add('is-error');
    window.setTimeout(() => forgeBar.classList.remove('is-error'), 500);
  }

  /* --- theme toggle --- */
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('shortly-theme', next);
      } catch (err) {
        // storage unavailable — theme just won't persist across visits
      }
    });
  }

  /* --- footer year --- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- scroll-triggered reveal for the feature strip --- */
  const revealEls = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* --- copy to clipboard --- */
  const copyBtn = document.getElementById('copy-btn');
  const copyLabel = document.getElementById('copy-label');
  const copyIcon = document.getElementById('copy-icon');

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const url = copyBtn.getAttribute('data-url');
      try {
        await navigator.clipboard.writeText(url);
      } catch (err) {
        // fallback for older browsers
        const tmp = document.createElement('textarea');
        tmp.value = url;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        document.body.removeChild(tmp);
      }

      copyBtn.classList.add('copied');
      copyLabel.textContent = 'Copied';
      copyIcon.innerHTML = '<path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';

      window.setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyLabel.textContent = 'Copy link';
        copyIcon.innerHTML = '<rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M5 15V5a2 2 0 0 1 2-2h10" stroke="currentColor" stroke-width="1.7"/>';
      }, 1800);
    });
  }

  /* --- ambient ember particles: randomize drift so it never feels mechanical --- */
  document.querySelectorAll('.ember-field span').forEach((span) => {
    const left = Math.random() * 100;
    const duration = 7 + Math.random() * 6;
    const delay = Math.random() * 8;
    const size = 2 + Math.random() * 3;
    span.style.left = left + '%';
    span.style.animationDuration = duration + 's';
    span.style.animationDelay = delay + 's';
    span.style.width = size + 'px';
    span.style.height = size + 'px';
  });
});
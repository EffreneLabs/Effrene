// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav after tapping a link
navMobile.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form — placeholder submit handler.
// Replace this with a real endpoint (Formspree, Netlify Forms, your own API, etc.)
// before going live, since GitHub Pages can't run server-side code.
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    status.textContent = 'Please fill in every field before sending.';
    return;
  }

  // TODO: send `new FormData(form)` to your form backend of choice here.
  status.textContent = "Thanks — we'll get back to you within a day.";
  form.reset();
});

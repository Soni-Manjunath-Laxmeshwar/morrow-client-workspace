const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    primaryNav.classList.toggle('open', !isOpen);
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      primaryNav.classList.remove('open');
    });
  });
}

const billingOptions = document.querySelectorAll('.billing-option');
const prices = {
  monthly: { starter: '$12', studio: '$24' },
  yearly: { starter: '$10', studio: '$20' },
};

billingOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const period = option.dataset.period;
    billingOptions.forEach((item) => {
      const active = item === option;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    document.querySelectorAll('[data-price]').forEach((price) => {
      price.textContent = prices[period][price.dataset.price];
    });
    document.querySelectorAll('[data-billed]').forEach((note) => {
      note.textContent = period === 'yearly' ? 'Billed yearly, per person' : 'Billed monthly';
    });
  });
});

const demoForm = document.querySelector('#demo-form');
const formMessage = document.querySelector('#form-message');

if (demoForm && formMessage) {
  const fields = [...demoForm.querySelectorAll('input, select')];

  fields.forEach((field) => {
    field.addEventListener('input', () => field.classList.remove('invalid'));
    field.addEventListener('change', () => field.classList.remove('invalid'));
  });

  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = '';
    formMessage.classList.remove('error');

    let firstInvalidField = null;
    fields.forEach((field) => {
      const valid = field.checkValidity();
      field.classList.toggle('invalid', !valid);
      if (!valid && !firstInvalidField) firstInvalidField = field;
    });

    if (firstInvalidField) {
      formMessage.textContent = 'Please check the details above and try again.';
      formMessage.classList.add('error');
      firstInvalidField.focus();
      return;
    }

    const name = demoForm.elements.name.value.trim().split(/\s+/)[0];
    formMessage.textContent = `Thanks, ${name}. Your details look good. Nothing was sent in this demo.`;
    demoForm.reset();
  });
}

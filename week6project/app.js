// Get visitors from localStorage or default to empty array
const visitors = JSON.parse(localStorage.getItem('visitors') || '[]');

// Render visitor count
function renderVisitorCount() {
  const count = visitors.length;
  const msg = `Visitor signups: ${count}`;
  document.getElementById('visit-btn')?.insertAdjacentHTML('afterend', `<p>${msg}</p>`);
}

// Handle form submission
function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email || !email.includes('@')) {
    alert('Please enter a valid name and email.');
    return;
  }

  const entry = { name, email, time: new Date().toISOString() };
  visitors.push(entry);
  localStorage.setItem('visitors', JSON.stringify(visitors));

  const thankEl = document.getElementById('thankyou-message');
  thankEl.textContent = `Thanks, ${name}! We’ll email updates to ${email}.`;

  e.target.reset();
}

// Setup event listeners
function init() {
  const btn = document.getElementById('visit-btn');
  btn?.addEventListener('click', () => {
    window.location = 'services.html';
  });

  const form = document.getElementById('interest-form');
  form?.addEventListener('submit', handleForm);

  renderVisitorCount();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);

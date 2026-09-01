const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#navMenu');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('#navMenu a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent(`Quote Request - ${data.get('service')}`);
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Phone: ${data.get('phone')}
Email: ${data.get('email') || 'Not provided'}
Service: ${data.get('service')}

Message:
${data.get('message') || 'No additional details provided.'}`
  );
  window.location.href = `mailto:REPLACE_WITH_BUSINESS_EMAIL?subject=${subject}&body=${body}`;
});

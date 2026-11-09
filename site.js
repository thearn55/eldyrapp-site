// Keep legacy email links working without offering a browser version on the homepage.
const authParams = new URLSearchParams(location.hash.slice(1));
const query = new URLSearchParams(location.search);
if (authParams.has('access_token') || authParams.has('error_description') || query.has('code')) {
  location.replace('account.html' + location.search + location.hash);
}
const dialog = document.querySelector('#screen-dialog');
let opener;
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  opener = button;
  document.querySelector('#screen-title').textContent = button.dataset.title;
  const img = document.querySelector('#large-screen');
  img.src = 'media/' + button.dataset.image + '.png';
  img.alt = button.dataset.title + ' — Eldyr app screenshot';
  dialog.showModal();
}));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close(); }});
dialog.addEventListener('close', () => opener?.focus());

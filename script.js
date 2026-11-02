const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}
function selectMood(button) {
  document.querySelectorAll('.mood-options button').forEach(item => item.classList.remove('selected'));
  button.classList.add('selected');
}
function saveCheckin() {
  const mood = document.querySelector('.mood-options button.selected');
  const note = document.getElementById('skinNote').value.trim();
  if (!mood && !note) {
    showToast('Choose how your skin feels or add a short note.');
    return;
  }
  document.getElementById('savedNote').textContent = '✓ Check-in saved on this page.';
  showToast('Your check-in has been saved (demo).');
}
document.querySelectorAll('.routine-item input').forEach(input => {
  input.addEventListener('change', () => {
    const item = input.closest('.routine-item');
    item.classList.toggle('done', input.checked);
    item.querySelector('b').textContent = input.checked ? 'Done' : 'To do';
    const completed = document.querySelectorAll('.routine-item input:checked').length;
    document.querySelector('.progress-label').textContent = `${completed} of 3 done`;
    document.querySelector('.progress-track span').style.width = `${completed / 3 * 100}%`;
  });
});

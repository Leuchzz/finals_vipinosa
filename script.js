const capybara = document.getElementById('capybara');
const btn = document.getElementById('actionBtn');

btn.addEventListener('click', () => {
  capybara.style.transform = 'scale(1.2) rotate(10deg)';
  setTimeout(() => {
    capybara.style.transform = 'scale(1) rotate(0deg)';
  }, 1000);
});

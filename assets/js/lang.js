function toggleLanguageMenu() {
  const menu = document.getElementById('languageOptions');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

document.addEventListener('click', function(event) {
  const menu = document.getElementById('languageOptions');
  const button = event.target.closest('.language-selector');
  if (!button && menu.style.display === 'block') {
    menu.style.display = 'none';
  }
});

function darkToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  const initialText = 'Toggle Dark mode';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.innerHTML =
      '<span>Toggle Light mode</span>';
  } else {
    btn.textContent = initialText;
  }
});

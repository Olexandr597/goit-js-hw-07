const nameInput = document.querySelector('#name-input');
nameInput.addEventListener('input', () => {
  const name = nameInput.value;

  if (name) {
    const nameOutput = document.querySelector('#name-output');
    nameOutput.textContent = name;
  } else {
    const nameOutput = document.querySelector('#name-output');
    nameOutput.textContent = 'Anonymous!';
  }
});

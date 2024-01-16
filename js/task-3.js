const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function placeholder(){
  nameOutput.textContent = nameInput.value.trim() || 'Anonymus';

}


nameInput.addEventListener('input', placeholder);

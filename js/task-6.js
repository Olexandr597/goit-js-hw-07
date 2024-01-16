function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]')

let amount = 0;

input.addEventListener('input', (event) => {
  amount = event.currentTarget.value;
});

btnCreate.addEventListener('click', createBoxes);

function createBoxes() {
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${20 + 10 * i}px`; 
    box.style.height = `${20 + 10 * i}px`;

    boxes.append(box);
  }
};

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  input.value = '';
  for (let i = 0; i < boxes.children.length; i++) {
    boxes.lastChild.remove();
    i -= 1; 
  };
  amount = 0;
};
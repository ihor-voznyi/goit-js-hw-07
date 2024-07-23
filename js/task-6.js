const numberOfBoxes = document.querySelector(`#controls input`);
const addButton = document.querySelector(`button[data-create]`);
const destroyButton = document.querySelector(`button[data-destroy]`);
const boxList = document.querySelector("#boxes");

function createBoxes(amount) {
    destroyBoxes();
  const boxListFragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const elem = document.createElement(`div`);
    elem.className = `box`;
    elem.style.width = `${30 + (10 * i)}px`;
    elem.style.height = `${30 + (10 * i)}px`;
    elem.style.backgroundColor = getRandomHexColor();
    boxListFragment.appendChild(elem);
  }
  boxList.appendChild(boxListFragment);
}

addButton.addEventListener('click', function() {
  const amount = parseInt(numberOfBoxes.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    numberOfBoxes.value = '';
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxList.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
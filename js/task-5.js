const changeColor = document.querySelector(`.change-color`);
const newColor = document.querySelector(`.color`);
const bgColor = document.querySelector(`body`);

changeColor.addEventListener("click", () => { 
    const randomColor = getRandomHexColor();
    newColor.style.backgroundColor = randomColor;
    bgColor.style.backgroundColor = randomColor;
    newColor.textContent = randomColor;
});
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6,0)}`;
}
const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const defaultOutput = output.textContent;

nameInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();
    output.textContent = inputValue ? inputValue : defaultOutput;
});
const button = document.querySelector(".button");
const input = document.querySelector(".input");

let counter = localStorage.length;
button.addEventListener("click", () => {
    localStorage.setItem(counter, input.value);
    input.value = "";
    counter++;
});

const savedInput = "savedInput";
// input.oninput = () => {
//     localStorage.setItem(savedInput, input.value)
// };

input.addEventListener("keydown", (event) => {
    localStorage.setItem(savedInput, input.value);
});

input.value = localStorage.getItem(savedInput);

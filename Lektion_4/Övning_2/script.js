const body = (elementValue) => {
    return document.querySelector(elementValue);
};

console.log(body("body"));
localStorage.clear();

const button = document.querySelector("button");
const input = document.querySelector("input");

let counter = 0;
button.addEventListener("click", () => {
    localStorage.setItem(counter, input.value);
    input.value = "";
    counter++;
});

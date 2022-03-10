const button = document.querySelector(".button");
const input = document.querySelector(".input");
const list = document.querySelector(".favorite-languages");

let counter = localStorage.length;
button.addEventListener("click", () => {
    localStorage.setItem(counter, input.value);
    input.value = "";
    counter++;

    updateList();
});


function updateList() {
    list.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const listItem = document.createElement("li");
        console.log(`index value: ${i} key: ${localStorage.key(i)}`);
        listItem.textContent = `${localStorage.getItem(localStorage.key(i))}`;

        list.appendChild(listItem)
    }
}

updateList();

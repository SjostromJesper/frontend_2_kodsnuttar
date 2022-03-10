const body = document.querySelector("body");

localStorage.clear();

localStorage.setItem("title", "hans & greta");
localStorage.setItem("author", "wilhelm grimm");
localStorage.setItem("release year", "1812");

const table = document.createElement("table");

for (let i = 0; i < localStorage.length; i++) {
    const tableHeader = document.createElement("th");
    tableHeader.textContent = `${localStorage.key(i)}: ${localStorage.getItem(localStorage.key(i))}`;

    table.appendChild(tableHeader)
}

body.appendChild(table);


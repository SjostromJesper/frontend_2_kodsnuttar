let button = document.getElementById("button-click");
let image = document.getElementById("image");

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(result => {
        console.log(result);
    });


fetch('https://randomuser.me/api/').then(resp => resp.json()).then(result => {
    console.log(result.results[0]);
}).catch(error => console.log(error));

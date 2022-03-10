const name = document.querySelector(".name");
const age = document.querySelector(".age");
const city = document.querySelector(".city");
const email = document.querySelector(".email");
const image = document.querySelector(".image");

fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(result => {
        const person = result;
        console.log(person);

        name.innerHTML = `${person.name.first} ${result.results[0].name.last}`;
        age.innerText = person.dob.age;
        email.innerText = person.email;
        city.innerText = person.location.city;
        image.src = person.picture.medium;
    })
    .catch(error => console.log(error));

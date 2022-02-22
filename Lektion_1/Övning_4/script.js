// getting all elements with the socialmediaicons class selector
const navList = document.querySelectorAll(".socialmediaicons");

// creating an array with the needed values
const links = [
    {name: "facebook", link: "http://facebook.com", src: "./assets/icons8-facebook.svg"},
    {name: "flickr", link: "http://flickr.com", src: "./assets/icons8-flickr.svg"},
    {name: "twitter", link: "http://twitter.com", src: "./assets/icons8-twitter.svg"},
    {name: "youtube", link: "http://youtube.com", src: "./assets/icons8-youtube-47.png"}
];

// creating the immeadiately-invoked function expression
(function(links) {
    const ulElement = document.createElement("ul");

    // looping through all of the nav-elements
    for(let i = 0 ; i < navList.length ; i++) {

        // looping through all of the links
        links.forEach(link => {
            // creating all needed elements to add in the ul
            const liElement = document.createElement("li");
            const aElement = document.createElement("a");
            const imgElement = document.createElement("img");

            // adding data to the elements
            imgElement.src = link.src;
            liElement.textContent = link.name;
            aElement.href = link.link;

            // appending each element to the their respective parent
            aElement.appendChild(liElement);
            ulElement.appendChild(imgElement);
            ulElement.appendChild(aElement)
        });

        // appending the ul to the current nav-element
        navList[i].appendChild(ulElement);
    }
}(links));

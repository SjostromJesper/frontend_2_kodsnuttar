// function User(name, DOB) {
//     this.name = name;
//     this.DOB = DOB;
//
//     function getAge() {
//         let birthDate = new Date(DOB);
//         return new Date().getFullYear() - birthDate.getFullYear();
//     }
//
//     this.print = function () {
//         DOB = this.DOB;
//         return `${this.name} is ${getAge()} years old!`;
//     };
// }
//
// User.prototype.favoriteFruit = "banana";
//
// const user2 = new User("Mahmud", "1973");
//
//
// user2.name = "John";
// user2.DOB = "1990";
// console.log(user2);
//
//
// class Car {
//     constructor(brand, year) {
//         this.brand = brand;
//         this.year = year;
//     }
//
//     #getBrand = function() {
//         console.log(this.brand)
//     }
// }
//
// const car = new Car("Saab", 2002);
// console.log(car);


// function User2(name, DOB) {
//     this.getAge = function () {
//         let birthDate = new Date(DOB);
//         return new Date().getFullYear() -
//             birthDate.getFullYear();
//     };
// }
//
// //const user2 = new User2("Mahmud", "1973");
// //console.log(user2.getAge());
//
// class User {
//     constructor(name, DOB) {
//         this.name = name;
//         this.DOB = DOB;
//     }
//
//     getAge() {
//         let birthDate = new Date(this.DOB);
//         return new Date().getFullYear() -
//             birthDate.getFullYear();
//     }
// }
//
//const user = new User("Kung Beppe", "1990");
//console.log(user.getAge());

// function User(name, DOB) {
//     this.name = name;
//     this.DOB = DOB
// }
//
// User.prototype.DOB = "1990";
//
// User.prototype.getAge = function (DOB) {
//     let birthDate = new Date(DOB);
//     return new Date().getFullYear() -
//         birthDate.getFullYear();
// };
//
// const user = new User("Oliver");
//
// console.log(user.getAge("2002"));


class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        return `${this.name} eats.`;
    }
}

class Rabbit extends Animal {
    jump() {
        return `${this.name} jumps!`;
    }

    eat() {
        console.log("im overriding the animal function")
    }
}

const rabbit = new Rabbit("hello");

rabbit.eat();










// function reverseArray(arr) {
//     const reversedArray = [];
//     while(arr.length > 0) {
//         reversedArray.push(arr.pop())
//     }
//     return reversedArray;
// }
//
// console.log(reverseArray([1, 2, 3, 4]));

// function reverseArray(arr) {
//     console.log(arr.map(arr.pop, [...arr]))
// }
//
// reverseArray([1, 2, 3, 4]);


// const arr = [1, 2, 3, 4];
// const reversedArray = [];
// function reverseArray() {
//     for(let i = arr.length - 1; i >= 0 ; i--) {
//         reversedArray.push(arr[i])
//     }
//     console.log(reversedArray)
// }
//
// reverseArray();

class Car {
    constructor(namn, efternamn) {
        this.namn = namn;
        this.efterNamn = efternamn
    }
}

const car = new Car("harald", "jönsson");



// 1

function range(one, two) {
    const rangeArray = [];
    for(let i = one ; i <= two ; i++) {
        rangeArray.push(i);
    }
    console.log(rangeArray)
}

// 2

function sum(a) {
    let number = 0;
    for(let i = 0 ; i < a.length; i++) {
        number += a[i]
    }
    return number;
}
console.log(sum([2, 8, 9, 1, 10, 10]));

const arr = [1, 8, 10, 9, 1];

console.log(arr.reduce(a, 0));

function a(vadSomHelst, faktiskt) {
    return vadSomHelst + Math.round(faktiskt);
}

'use strict';


function getSenseOfLife() {
    return 42;
}

const res = getSenseOfLife();

console.log(res);
console.log(getSenseOfLife());

function sum (a, b) {
    return a + b;
}
console.log(sum(10, 55));

function sum (a) {
    console.log("I am " + a + 'years old ' )
}

console.log(sum(11));


//arrow function

const mult = (a, b) => {
    return a * b;
};

console.log( mult(10, 5))
console.log( mult(44444, 0))


const sumFunc = function (a, b) {
    return a + b;
}

console.log(sumFunc);
console.log(sumFunc(10, 20));


// const square = (num) => {
//     const res = num * num;
//     return res;
// }

// const square = (num) => {
//     return num * num;
// }

const square = (num) => num * num;

console.log(square(10));
console.log(square(6));


const getMagicNumber = () => {
    return 17;
}

const getMagicNumber = () => 17;
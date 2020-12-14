//input: num
//output: num

// function multiply() {
//     return Object.values(arguments).reduce((acc, el) => acc * el)
// }

function multiply(...args) {
    console.log(args);
    return args.reduce((acc, el) => acc * el)
}

console.log(multiply(5));
console.log(multiply(5, 10));
multiply(2, 3, 5);
multiply(5, 10, 1, 6, 7, 9);


//spread
const testArr = [3, 4, 4, 23, 32, 32, 32];
console.log(...testArr);


const testArrCopy = [...testArr];

function sum(a, b) {
    return a + b
}

sum (testArr[0], testArr[1]);
sum(...testArr);

let example = 1111;
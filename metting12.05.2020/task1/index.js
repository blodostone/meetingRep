// input: none
// output: function

function makeCounter() {

    let counter = 0;

    return function count() {
        return ++counter;
    };
};

const counter1 = makeCounter();

console.log(counter1());
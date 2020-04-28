const numbersList = [4.543, 6.7, 3.35, 2.89];

function callback(acc, num) {
    console.log(acc, num);
    const newAcc = acc + num;
    // что то счетаем...
    // return newAcc;
    return undefined;
}

const getTotalPrice = numbersList.reduce(callback, 0);

console.log('result: ', sum);



const getTotalPrice = (arr) => {
    const sum = arr.reduce(function callback(acc, num) {
        return acc + num;
    }, 0);
    console.log(sum);

    return '$' + Math.floor(sum * 100) / 100;
};

console.log(getTotalPrice(numbersList));
// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведи squaredNumbers в консоль

// put your code here

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

const findRes = numbersList.find(el => el % 2 === 1);
console.log(findRes);

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

const forEachRes = numbersList.forEach(num => {
    if(num > 0) {
        console.log(num);
    }
 });

console.log(forEachRes);

/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

//input: callback, number (optional)
//output: number


//(option 1)
// const reduceRes = transactions.reduce((acc, el) => {
//     console.log('acc: ' + acc);
//     console.log('el: ' + el)


//     if( el > 100) {
//         return acc + el;
//     } else {
//         return acc;
//     }
// }, 0);



//option 2
// const reduceRes = transactions.reduce((acc, el) => {
//     return el > 100 ? acc + el : acc; 
// }, 0);


//option 3
const reduceRes = transactions.reduce((acc, el) => (el > 100 ? acc + el : acc), 0);


console.log(reduceRes);
//callack!!!
//input: number, number, index(optional), array(optional)
//output: number

/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];

///input: callback
//output: array

const sortRes = numbersList1.sort((a, b) => {
    return  b - a;
});

console.log(sortRes);

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];

//option 1
// const sortResCopyied = numbersList2.slice().sort((a, b) => {
//     return  b - a;
// });


//option 2
const sortResCopyied = numbersList2.slice().sort((a, b) => b - a);


console.log(sortResCopyied);
console.log(numbersList2);

//put your code here
// начальный массив
const numbersList = [1, 2, 3, 4, 5];

/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */


// const a = numbersList.pop();

// console.log(a);

// console.log(numbersList);

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достаньте последний элемент массива и поместите его в переменную lastNumber
// выведите эту переменную в консоль

// ... code here

const a = numbersList.pop();

const lastNumber = a;

console.log(lastNumber);


/* push - добавит элемент в конец массива */

// c помощью метода push добавьте число 6 в конец массива
// выведите numbersList в консоль

// ... code here

numbersList.push(6);


console.log(numbersList);


/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достаньте первый элемент массива и поместите его в переменную firstNumber
// выведите эту переменную в консоль

// ... code here

const firstNumber = numbersList.shift();

console.log(firstNumber);


/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавьте число 0 в начало массива
// выведите numbersList в консоль

// ... code here

numbersList.unshift(0);

console.log(numbersList);



/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// function sum(a, b) {
//     return a + b;
// }

// console.log(numbersList);

// const arr = [];

// for (let i = 0; i < numbersList.length; i += 1) {
//     numbersList[i] = 4;
// }

// const newArr = [];

// function func(item) {
//     newArr.push(item * item);
//     console.log(item);

// }

// numbersList.forEach(func);

// console.log(numbersList);
// console.log(newArr);


/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* элементы массива newArr - это результат вызова callback для каждого элемента arr */
/* newArr[i] = callback(arr[i]) */

// c помощью метода map создайте новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведите squaredNumbers в консоль

// ... code here
function square(num) {
    // console.log('call');
    return num * num;
}

// console.log(numbersList);

const squaredNumbers = numbersList.map(square);

console.log(squaredNumbers);

// console.log('are equal?', squaredNumbers === numbersList);



/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true */
/* callback(arr[i]) === true -> элемент будет добавлен в финальный массив  */
/* callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив  */

// c помощью метода filter создайте новый массив evenNumbers, в котором только четные числа из numbersList
// выведите evenNumbers в консоль

// ... code here
function filterFunc(num) {
    // console.log('call');
    return num % 2 === 0;

    // return true / false;
}


const evenNumbers = numbersList.filter(filterFunc);

console.log(evenNumbers);
// console.log(numbersList);
// console.log(evenNumbers === numbersList);



/* метод find */
/* const arrElement = arr.filter(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* если callback(arr[i]) вернет true, то filter прекратит поиск и вернет этот элемент */

// c помощью метода find найдите первое нечетное число в numbersList и выведите его в консоль

// ... code here

function callback(num) {
    // console.log('call');
    return num % 2 === 1;
}


const firstOdd = numbersList.find(callback);

console.log(numbersList);

// console.log(firstOdd);




// 1. Для работы с массивами используем методы массивов
// 2. Используем методы котоыре не мутируют массив
// 3. Никогда не изменять аргументы ф-ции !!!!!!!!!!!
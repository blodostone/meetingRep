//input: Array, func
//output: array

//callback: el, index (option), array (option)
//output: bool

//algo:
//1. iterate array +++
//2. apply callback func for every el 
//3. if callback return true - add el to result

// const filterArray = (arr, callback) => {
//     let result = [];
//     for ( let i = 0; i < arr.length; i++) {
//         const fitsCondition = callback(arr[i], i, arr);
//         if (fitsCondition === true) {
//             result.push(arr[i]);
//        }
//     }
//     return result;
// };

//final solution
const filterArray = (arr, callback) => {
    const result = [];
    for ( let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
};



//test func

const testArr = [5, 6, 10 , -2, 44, 5];
const testCallback = (el, index, arr) => index > 3;

const res = filterArray(testArr, testCallback);
console.log(res);
  
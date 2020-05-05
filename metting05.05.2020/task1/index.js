// input: array, array;
//output: object;


// function buildObject (keysList, valuesList) {

//     let obj = {};

//     for(let i = 0; i < keysList.length; i++){

//         obj = {...obj, [keysList[i]]: valuesList[i] }

//     }

//     return obj;

// }

function buildObject(keysList, valuesList) {
    let obj = keysList.reduce((acc, key, index) => {
        return {...acc, [key]: valuesList[index] };
    }, obj);
}

// const keys = ['name', 'age'];
// const values = ['Tom', 40];

// function buildObjectV3 (keysList, valuesList) {
//     let obj = keysList.raduce((acc, key, index) => {
//         return {[key]: valuesList[index] };
//     }, obj);
// }
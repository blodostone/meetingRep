//input: arr, arr
//output: input


const keys = ['name', 'addres', 'age'];
const values = ['Bob', 'Ukraine', 34]

const buildObject = (keys, values) => {
    return keys.reduce((acc, key, index) => {
        console.log('STEP ' + index);
        console.log('acc ' + acc);
        console.log('key ' + key);
        console.log('value ' + values[index]);
        return {...acc, [key]: values[index]}
    }, {});
}

const result = buildObject(keys, values);
console.log(result);

// const buildObject = (keys, values) => {
//     const res = {};

//     for(let index = 0; index < keys.lenght; index +=1){

//         debugger;
//         const key = keys[index];
//         const value = values[index];

//         Object.assign(res, { [key]: value})
//     }

//     return res;
// };

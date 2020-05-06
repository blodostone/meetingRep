//input obj1, obj2


//algo
// compare keys count
//comape values

const obj1 = {
    name: 'Tom',
    age: 17
};
const obj2 = {
    name: 'Tom',
    age: 17
};



function compareObjects(obj1, obj2) {

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    return keys1.reduce((acc, key) => obj1[key] === obj2[key], true);
}
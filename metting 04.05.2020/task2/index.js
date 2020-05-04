/*
input: object, object
returns: object 
*/
const obj1 = {
    name: 'Tom',
    age: 17,
};

const obj2 = {
    name: 'Bob',
    student: false
};

const mergeObjectsV1 = (obj1, obj2) => {
    return Object.assign({}, obj1, obj2);
}

const mergeObjectsV2 = (obj1, obj2) => {
    return Object.assign({}, (obj2), obj1);
}

const mergeObjectsV3 = (obj1, obj2) => {
    return {...obj1, ...obj2 };
}

const mergeObjectsV4 = (obj1, obj2) => {
    return {...obj2, ...obj1 };
}
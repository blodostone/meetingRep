//input: obj
//output: arr of obj


// algo
// 1. copy obj & get object entries +++
// 2. map array  +++
// 3. sort +++

//option 1
const getCustomersListDraft = obj => {

    //input: obj
    //output: array
    const entries = Object.entries(obj);
    console.log(entries)

    //input: callback
    //output: array
    const resArr = entries.map(arr => {
        const resObj = arr[1];
        console.log('ARRAY IS', arr);

        console.log('obj', resObj);

        return { ...resObj, id: arr[0] };
    });

    console.log(resArr);

    const resArrSorted = resArr.sort((a, b) => {
        return a.age - b.age;
    });

    console.log(resArrSorted);

    return resArrSorted;
};

//option 2
const getCustomersList = obj => {
    return Object.entries(obj)
    .map(arr => {
        return { ...arr[1], id: arr[0] }
    })
    .sort((a, b) => {
        return a.age - b.age;
    });
};

//option 3
const getCustomersList = obj => {
    return Object.entries(obj)
    .map(arr => ({ ...arr[1], id: arr[0] }))
    .sort((a, b) => a.age - b.age);
};

// test func

const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54,
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17,
    },
    'customer-id-555': {
        name: 'Andrey',
        age: 100,
    },
    
};

getCustomersList(customers);
console.log(customers);
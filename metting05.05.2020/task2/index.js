const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
    'customer-id-3': {
        name: 'Andry',
        age: 19
    },
}

//1. entris
//2.  map
//3.  sort


function markAdmins(obj) {
    return Object.entries(obj).map(
        (arr) => Object.assign(obj, { id: arr[0] })
    ).sort((a, b) => a.age - b.age);
}

console.log(markAdmins(customers));

// let user = {
//     name: "Test",
//     age: 20,
//     city: 'Kiev',
// };

// let [city] = user;
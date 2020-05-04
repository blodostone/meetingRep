// input: userData, id
// output: object;

const userData = {
    name: 'Sam'
}

function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
}

function addPropertyV2(userData, userId) {
    Object.assign(userData, { id: userId });
    return userData;
}

const addPropertyV3 = (userData, userId) => {
    const obj = Object.assign({}, userData, { id: userId });
    return obj;
}

function addPropertyV4(userData, userId) {
    return {...userData, id: userId }
}
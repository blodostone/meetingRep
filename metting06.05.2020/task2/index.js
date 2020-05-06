//input: arr, arr
//returns: arr

//algo:
//iterate array - if user is admin true, if not - mark false

const users = [
    { id: '1', name: 'Bob' },
    { id: '2', name: 'Tom' },
    { id: '3', name: 'Sam' },
    { id: '4', name: 'Tad' },
];

const adminsIds = ['1', '3'];

function markAdmins(users, ids) {
    return users.map(user => {
        const isAdmin = ids.includes(user.id);
        return {...users, isAdmin }
    });
}

const result = markAdmins(users, adminsIds);

console.log(result);
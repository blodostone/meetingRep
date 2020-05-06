//input: arr, arr
//returns: arr

//algo:
//iterate array - if user is admin true, if not - mark false

function markAdmins(users, ids) {
    return users.map(user => {
        const isAdmin = ids.includes(id);
        return {...user, isAdmin }
    })
}
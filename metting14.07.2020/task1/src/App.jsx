import React from 'react';
import UserList from './UserList';

//1. divide components
//2. make static html


//1. divide task for subtasks
//2. for each subtasks make algo
//3. test each subtask (!!!) & use debug all the time
//4. read documentation

const App = () => {
    const users = [
        {
            id: 'id-0',
            age: 21,
            name: 'Bob',
        },
        {
            id: 'id-1',
            age: 17,
            name: 'Tom',
        },
        {
            id: 'id-2',
            age: 18,
            name: 'Tad',
        },
        {
            id: 'id-3',
            age: 45,
            name: 'Justin',
        },
        {
            id: 'id-4',
            age: 45,
            name: 'Franklin',
        },
        {
            id: 'id-5',
            age: 45,
            name: 'John',
        },
        {
            id: 'id-6',
            age: 45,
            name: 'Andrew',
        },
        {
            id: 'id-7',
            age: 45,
            name: 'Pol',
        },
        {
            id: 'id-8',
            age: 45,
            name: 'Ron',
        },
        {
            id: 'id-9',
            age: 45,
            name: 'Harry',
        },
        {
            id: 'id-10',
            age: 45,
            name: 'Anna',
        },
    ]
    return <UserList users={users}/>;
};

export default App;

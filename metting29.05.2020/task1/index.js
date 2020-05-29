//todo list algo

//1. create array of events - and create 5 test events (создаем место для хранения данных)
//2. write render fuction that render all tasks - function renderTasks (tasks)
//3. addEventsListener for .list all +++
//4. checkbox handler - update task in the array and render tasks (обновляет)
//5. create handler - create task object and put to the array and render tasks (добавляет)


const listElem = document.querySelector('.list');

const tasks = [
    { text: 'Buy milk', done: false, createDate: '2019-11-24T15:51:32.222Z', id: '1' },
    { text: 'Pick up Tom from airport', done: false, createDate: '2019-11-25T15:51:32.222Z', id: '2' },
    { text: 'Visit party', done: false, createDate: '2019-11-26T15:51:32.222Z', id: '3' },
    { text: 'Visit doctor', done: true, createDate: '2019-11-27T15:51:32.222Z', id: '4' },
    { text: 'Buy meat', done: true, createDate: '2019-11-28T15:51:32.222Z', id: '5' },
];

const renderTasks = tasksList => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-id', id);
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });
    listElem.append(...tasksElems);
};


renderTasks(tasks);


listElem.addEventListener('click', onToggleTask);

// algo
//1. check if checkbox is clicked, if not - exit +++
//2. get checkbox data-id +++
//3. find by task id +++
//4. update task
//5. render tasks
function onToggleTask(event) {
    if (!event.target.classList.contains('list__item-checkbox')) {
        return;
    }
    let task = tasks.find(task => task.id === event.target.dataset.id);
    task.done = event.target.checked;

    renderTasks(tasks);

}

const toDoListElem = document.querySelector('.list');
toDoListElem.addEventListener('click', onToggleTask);

// algo
//1. find btn, input 
//2. (if) for check input empty or not empty.
//3. add new obj for list
//4. render tasks

const createBtnElem = document
    .querySelector('.create-task-btn')
    .addEventListener('click', onCreateTask);

function onCreateTask() {
    //TODO
    const inputElem = document.querySelector('.task-input');
    if (!inputElem.value) {
        return;
    }

    inputElem.value = '';

    // const addLength = tasks.lenth++;

    tasks.push({
        done: false,
        createData: new Date().toString(),
        text: inputElem.value,
        id: Math.random().toString()
    });


    renderTasks(tasks);
}
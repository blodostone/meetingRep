const tasks = [{
        text: "Buy milk",
        done: false,
        createDate: "2019-10-24T15:51:32.222Z",
        finishDate: null,
        id: "1",
    },
    {
        text: "Pick up Tom from airport",
        done: false,
        createDate: "2019-10-25T15:51:32.222Z",
        finishDate: null,
        id: "2",
    },
    {
        text: "Visit party",
        done: false,
        createDate: "2019-10-26T15:51:32.222Z",
        finishDate: null,
        id: "3",
    },
    {
        text: "Visit doctor",
        done: true,
        createDate: "2019-10-27T15:51:32.222Z",
        finishDate: "2019-11-27T15:51:32.222Z",
        id: "4",
    },
    {
        text: "Buy meat",
        done: true,
        createDate: "2019-10-28T15:51:32.222Z",
        finishDate: "2019-11-28T15:51:32.222Z",
        id: "5",
    },
];


const listElem = document.querySelector(".list");
const renderTasks = (tasksList) => {

    listElem.innerHTML = "";
    const tasksElems = tasksList
        .slice()
        .sort(sortTasks)
        .map(mapTask);
    listElem.append(...tasksElems);
};

const mapTask = ({ text, done, id }) => {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("list__item");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("data-id", id);
    checkbox.checked = done;
    checkbox.classList.add("list__item-checkbox");
    if (done) {
        listItemElem.classList.add("list__item_done");
    }
    listItemElem.append(checkbox, text);
    return listItemElem;
}
const sortTasks = (a, b) => {
    if (a.done - b.done !== 0) {
        return a.done - b.done;
    }
    if (a.done) {
        return new Date(b.finishDate) - new Date(a.finishDate);
    }
    return new Date(b.createDate) - new Date(a.createDate);
}

export { renderTasks, tasks, listElem }
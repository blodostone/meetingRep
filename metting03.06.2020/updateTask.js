import { tasks, renderTasks } from "./render.js";

function updateTask(event) {

    if (!event.target.classList.contains("list__item-checkbox")) {
        return;
    }
    const taskData = tasks.find((task) => task.id == event.target.dataset.id);

    Object.assign(taskData, {
        done: event.target.checked,
        finishDate: new Date().toISOString(),
    });

    renderTasks(tasks);
}

export { updateTask };
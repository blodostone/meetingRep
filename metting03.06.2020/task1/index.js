import { renderTasks, tasks, listElem } from "./render.js"
import { createTask } from './createTask.js'
import { updateTask } from './updateTask.js'
renderTasks(tasks);


listElem.addEventListener('click', updateTask)

const createBtn = document.querySelector(".create-task-btn");
createBtn.addEventListener("click", createTask);
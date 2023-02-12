import { projects, createProjectArr } from "./logic";

import {
  content,
  projectsContainer,
  addProject,
  cancelProject,
  addTaskBtn,
  cancelTaskBtn,
  editTaskBtn,
  closeEditTaskBtn,
  openProjectForm,
  closeProjectForm,
  openTaskForm,
  cancelTask,
  createTaskDOM,
  displayProjects,
  renewDisplay,
  openEditTaskForm,
  closeEditTaskForm,
} from "./dom";

createProjectArr("Personal tasks");
createProjectArr("Work tasks");

projects[0].createTask(
  "Buy a new dress",
  "buy a new dress for Mary's wedding on 20.04.2023",
  "2023-04-10",
  true
);
projects[0].createTask(
  "Make a dentist's appointment",
  "Make a dentist's appointment to check out a cavity",
  "2023-02-25",
  true
);
projects[1].createTask(
  "Buy a new mug",
  "Buy a new coffee mug to leave at work",
  "2023-03-01",
  false
);

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".open-project-form")
    .addEventListener("click", openProjectForm);
});

cancelProject.addEventListener("click", closeProjectForm);

addProject.addEventListener("click", (e) => {
  e.preventDefault();
  createProjectArr(document.getElementById("project-name").value);
  closeProjectForm();
  console.log("inside add button", projects);
  displayProjects();
});

cancelTaskBtn.addEventListener("click", cancelTask);

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createTaskDOM(addTaskBtn.dataset.at);
  cancelTask();
  displayProjects();
  console.log("inside add tasks button", projects);
});

closeEditTaskBtn.addEventListener("click", closeEditTaskForm);

displayProjects();

console.log(projects);

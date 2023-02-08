import {
  projects,
  Project,
  Task,
  createProjectArr,
  deleteProject,
  editTask,
} from "./logic";

import {
  content,
  projectsContainer,
  addProject,
  cancelProject,
  addTaskBtn,
  cancelTaskBtn,
  openProjectForm,
  closeProjectForm,
  createProject,
  openTaskForm,
  cancelTask,
  createTask,
  createTaskDOM,
  addTaskToContainer,
} from "./dom";

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".open-project-form")
    .addEventListener("click", openProjectForm);
});

cancelProject.addEventListener("click", closeProjectForm);

addProject.addEventListener("click", (e) => {
  e.preventDefault();
  createProjectArr(document.getElementById("project-name").value);
  createProject();
  closeProjectForm();
  console.log("inside add button", projects);
});

cancelTaskBtn.addEventListener("click", cancelTask);

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createTaskDOM(addTaskBtn.dataset.numberProject);
  addTaskToContainer(addTaskBtn.dataset.numberProject);
  cancelTask();
  console.log("inside add tasks button", projects);
});

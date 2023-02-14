import "./style.css";
import { projects, createProjectArr, Task, Project } from "./logic";

import {
  addProject,
  cancelProject,
  addTaskBtn,
  cancelTaskBtn,
  closeEditTaskBtn,
  openProjectForm,
  closeProjectForm,
  cancelTask,
  createTaskDOM,
  displayProjects,
  closeEditTaskForm,
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
  closeProjectForm();
  saveChanges();
  console.log(projects);
  displayProjects();
});

cancelTaskBtn.addEventListener("click", cancelTask);

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createTaskDOM(addTaskBtn.dataset.at);
  cancelTask();
  saveChanges();
  displayProjects();
  console.log(projects);
});

closeEditTaskBtn.addEventListener("click", closeEditTaskForm);

let projectsJSON = JSON.parse(localStorage.getItem("projectsJSON"));

if (projectsJSON === null) {
  createProjectArr("Personal tasks");
  createProjectArr("Work tasks");
  console.log(projects);

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

  localStorage.setItem("projectsJSON", JSON.stringify(projects));
} else {
  projectsJSON.forEach((project) => {
    regainProjectMethods(project);
    project.tasks.forEach((task) => regainTaskMethods(task));
  });
  projects = projectsJSON;
}

function regainTaskMethods(task) {
  Object.setPrototypeOf(task, Task.prototype);
}

function regainProjectMethods(project) {
  Object.setPrototypeOf(project, Project.prototype);
}

function saveChanges() {
  localStorage.setItem("projectsJSON", JSON.stringify(projects));
}

displayProjects();

console.log(projects);

export { saveChanges };

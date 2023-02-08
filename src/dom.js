import { projects, deleteProject } from "./logic";

const content = document.querySelector(".content");
const projectsContainer = document.querySelector(".projects-container");
const addProject = document.querySelector(".add-project");
const cancelProject = document.querySelector(".cancel-project");
const addTaskBtn = document.querySelector(".add-task");
const cancelTaskBtn = document.querySelector(".cancel-task");

function openProjectForm() {
  document.querySelector(".project-form-window").style.display = "flex";
}

function closeProjectForm() {
  document.querySelector(".project-form-window").style.display = "none";
}

function createProject() {
  const project = document.createElement("div");

  project.classList.add("project");
  const projectName = document.createElement("p");
  projectName.textContent = document.getElementById("project-name").value;

  const taskContainer = document.createElement("div");
  taskContainer.textContent = "I am a task Container";
  projects.forEach((item) => {
    taskContainer.dataset.number = projects.indexOf(item);
  });

  const openTaskFormBtn = document.createElement("button");
  openTaskFormBtn.textContent = "Add a new task!";
  openTaskFormBtn.classList.add("open-task-form-btn");
  taskContainer.appendChild(openTaskFormBtn);
  projects.forEach((item) => {
    openTaskFormBtn.dataset.numberP = projects.indexOf(item);
  });
  openTaskFormBtn.addEventListener("click", () => {
    openTaskForm();
    addTaskBtn.dataset.numberProject = openTaskFormBtn.dataset.numberP;
  });

  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.textContent = "Delete Project";
  deleteProjectBtn.setAttribute("type", "button");
  projects.forEach((item) => {
    deleteProjectBtn.dataset.numberBtn = projects.indexOf(item);
  });
  deleteProjectBtn.addEventListener("click", () => {
    deleteProject(deleteProjectBtn.dataset.numberBtn);
    projectsContainer.removeChild(project);
    console.log(projects);
  });

  project.append(projectName, taskContainer, deleteProjectBtn);
  projectsContainer.appendChild(project);
  console.log("dom");

  document.getElementById("project-name").value = "";
}

function openTaskForm() {
  document.querySelector(".task-form-window").style.display = "flex";
}

function cancelTask() {
  document.querySelector(".task-form-window").style.display = "none";
}

function createTaskDOM(projectIndex) {
  projects[projectIndex].createTask(
    document.getElementById("task-title").value,
    document.getElementById("task-description").value,
    document.getElementById("task-date").value,
    document.getElementById("task-priority").value,
    document.getElementById("task-complete").checked
  );
}

function addTaskToContainer(projectIndex) {
  const taskDOM = document.createElement("div");

  document
    .querySelector(`[data-number="${projectIndex}"]`)
    .appendChild(taskDOM);

  const shortTask = document.createElement("p");
  shortTask.textContent = `${document.getElementById("task-title").value} due ${
    document.getElementById("task-date").value
  }`;

  const taskTitle = document.createElement("p");
  taskTitle.textContent = `Title: ${
    document.getElementById("task-title").value
  }`;

  const taskDescription = document.createElement("p");
  taskDescription.textContent = `Description: ${
    document.getElementById("task-description").value
  }`;

  const taskDate = document.createElement("p");
  taskDate.textContent = `Due Date: ${
    document.getElementById("task-date").value
  }`;

  const taskPriority = document.createElement("p");
  taskPriority.textContent = `Priority: ${
    document.getElementById("task-priority").value
  }`;

  let completeness;

  if (document.getElementById("task-complete").value === false) {
    completeness = "no";
  } else {
    completeness = "yes";
  }

  const taskComplete = document.createElement("p");
  taskComplete.textContent = `Task complete: ${completeness}`;

  taskDOM.append(
    shortTask,
    taskTitle,
    taskDescription,
    taskDate,
    taskPriority,
    taskComplete
  );
}

export {
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
  createTaskDOM,
  addTaskToContainer,
};

import { projects, deleteProject } from "./logic";
import { saveChanges } from "./index";

const content = document.querySelector(".content");
const projectsContainer = document.querySelector(".projects-container");
const addProject = document.querySelector(".add-project");
const cancelProject = document.querySelector(".cancel-project");
const addTaskBtn = document.querySelector(".add-task");
const cancelTaskBtn = document.querySelector(".cancel-task");
const editTaskBtn = document.querySelector(".edit-task");
const closeEditTaskBtn = document.querySelector(".close-task");

function displayProjects() {
  projectsContainer.innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    const p = document.createElement("div");
    projectsContainer.appendChild(p);
    p.dataset.p = i;
    p.classList.add("project");

    const pin = document.createElement("img");
    pin.classList.add("pin");
    pin.setAttribute("src", "./pin.svg");
    pin.setAttribute("alt", "pin");

    const pName = document.createElement("h2");
    pName.dataset.pn = p.dataset.p;
    pName.textContent = `${projects[pName.dataset.pn].name}`;

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskContainer.dataset.tc = p.dataset.p;

    const openTaskFormBtn = document.createElement("button");
    openTaskFormBtn.textContent = "Add a new task!";
    openTaskFormBtn.classList.add("open-task-form-btn");
    openTaskFormBtn.dataset.otf = taskContainer.dataset.tc;
    taskContainer.appendChild(openTaskFormBtn);
    openTaskFormBtn.addEventListener("click", () => {
      addTaskBtn.dataset.at = taskContainer.dataset.tc;
      openTaskForm();
    });

    for (let j = 0; j < projects[i].tasks.length; j++) {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      taskDiv.dataset.tn = j;
      taskDiv.dataset.pc = openTaskFormBtn.dataset.otf;
      taskContainer.appendChild(taskDiv);

      const changeStatus = document.createElement("input");
      changeStatus.setAttribute("type", "checkbox");
      changeStatus.dataset.cp = taskDiv.dataset.pc;
      changeStatus.dataset.c = taskDiv.dataset.tn;
      changeStatus.checked =
        projects[changeStatus.dataset.cp].tasks[
          changeStatus.dataset.c
        ].complete;
      changeStatus.addEventListener("change", () => {
        if (
          projects[changeStatus.dataset.cp].tasks[changeStatus.dataset.c]
            .complete === false
        ) {
          projects[changeStatus.dataset.cp].tasks[
            changeStatus.dataset.c
          ].complete = true;
          if (
            document.querySelector(
              `[data-complete="${taskDiv.dataset.tn}"][data-completep="${taskDiv.dataset.pc}"]`
            ) !== null
          ) {
            document.querySelector(
              `[data-complete="${taskDiv.dataset.tn}"][data-completep="${taskDiv.dataset.pc}"]`
            ).textContent = `Task complete: yes`;
          }
        } else {
          projects[changeStatus.dataset.cp].tasks[
            changeStatus.dataset.c
          ].complete = false;
          if (
            document.querySelector(
              `[data-complete="${taskDiv.dataset.tn}"][data-completep="${taskDiv.dataset.pc}"]`
            ) !== null
          ) {
            document.querySelector(
              `[data-complete="${taskDiv.dataset.tn}"][data-completep="${taskDiv.dataset.pc}"]`
            ).textContent = `Task complete: no`;
          }
        }
        saveChanges();
      });

      const shortTask = document.createElement("p");
      shortTask.classList.add("short-task");
      shortTask.dataset.tt = taskDiv.dataset.tn;
      shortTask.dataset.ttp = taskDiv.dataset.pc;
      shortTask.textContent = `${
        projects[shortTask.dataset.ttp].tasks[shortTask.dataset.tt].title
      } due ${
        projects[shortTask.dataset.ttp].tasks[shortTask.dataset.tt].date
      }`;

      const viewDetailsBtn = document.createElement("button");
      viewDetailsBtn.setAttribute("type", "button");
      viewDetailsBtn.textContent = "View details";
      viewDetailsBtn.dataset.v = taskDiv.dataset.tn;
      viewDetailsBtn.dataset.vp = taskDiv.dataset.pc;

      viewDetailsBtn.addEventListener("click", () => {
        if (viewDetailsBtn.textContent == "View details") {
          viewDetailsBtn.textContent = "Hide details";
          const details = document.createElement("div");
          details.classList.add("details");
          details.dataset.vd = viewDetailsBtn.dataset.v;
          details.dataset.vdp = viewDetailsBtn.dataset.vp;
          taskDiv.insertBefore(details, buttonContainer);

          const taskTitle = document.createElement("p");
          taskTitle.textContent = `Title: ${
            projects[viewDetailsBtn.dataset.vp].tasks[viewDetailsBtn.dataset.v]
              .title
          }`;

          const taskDescription = document.createElement("p");
          taskDescription.textContent = `Description: ${
            projects[viewDetailsBtn.dataset.vp].tasks[viewDetailsBtn.dataset.v]
              .description
          }`;

          const taskDate = document.createElement("p");
          taskDate.textContent = `Due date: ${
            projects[viewDetailsBtn.dataset.vp].tasks[viewDetailsBtn.dataset.v]
              .date
          }`;

          let important;
          const taskPriority = document.createElement("p");

          if (
            projects[viewDetailsBtn.dataset.vp].tasks[viewDetailsBtn.dataset.v]
              .priority === false
          ) {
            important = "no";
          } else {
            important = "yes";
            taskPriority.classList.add("priority");
          }

          taskPriority.textContent = `High priority: ${important}`;

          let completeness;

          if (
            projects[viewDetailsBtn.dataset.vp].tasks[viewDetailsBtn.dataset.v]
              .complete === false
          ) {
            completeness = "no";
          } else {
            completeness = "yes";
          }

          const taskComplete = document.createElement("p");
          taskComplete.setAttribute("id", "completeness");
          taskComplete.dataset.completep = taskDiv.dataset.pc;
          taskComplete.dataset.complete = taskDiv.dataset.tn;
          taskComplete.textContent = `Task complete: ${completeness}`;

          details.append(
            taskTitle,
            taskDescription,
            taskDate,
            taskPriority,
            taskComplete
          );
        } else {
          viewDetailsBtn.textContent = "View details";
          document
            .querySelector(
              `[data-tn="${viewDetailsBtn.dataset.v}"][data-pc="${viewDetailsBtn.dataset.vp}"]`
            )
            .removeChild(
              document.querySelector(
                `[data-vd="${viewDetailsBtn.dataset.v}"][data-vdp="${viewDetailsBtn.dataset.vp}"]`
              )
            );
        }
      });

      if (
        projects[viewDetailsBtn.dataset.vp].tasks[viewDetailsBtn.dataset.v]
          .priority === true
      ) {
        taskDiv.setAttribute("id", "important");
      }

      const openEditBtn = document.createElement("button");
      openEditBtn.setAttribute("type", "button");
      openEditBtn.textContent = "Edit";
      openEditBtn.dataset.e = taskDiv.dataset.tn;
      openEditBtn.dataset.ep = taskDiv.dataset.pc;
      openEditBtn.addEventListener("click", () => {
        editTaskBtn.dataset.et = openEditBtn.dataset.e;
        editTaskBtn.dataset.etp = openEditBtn.dataset.ep;
        openEditTaskForm();
        document.getElementById("task-title-v").value =
          projects[editTaskBtn.dataset.etp].tasks[editTaskBtn.dataset.et].title;
        document.getElementById("task-description-v").value =
          projects[editTaskBtn.dataset.etp].tasks[
            editTaskBtn.dataset.et
          ].description;
        document.getElementById("task-date-v").value =
          projects[editTaskBtn.dataset.etp].tasks[editTaskBtn.dataset.et].date;
        document.getElementById("task-priority-v").checked =
          projects[editTaskBtn.dataset.etp].tasks[
            editTaskBtn.dataset.et
          ].priority;
      });

      editTaskBtn.addEventListener("click", (e) => {
        e.preventDefault();
        projects[editTaskBtn.dataset.etp].tasks[
          editTaskBtn.dataset.et
        ].editTask(
          document.getElementById("task-title-v").value,
          document.getElementById("task-description-v").value,
          document.getElementById("task-date-v").value,
          document.getElementById("task-priority-v").checked
        );

        console.log(projects);
        saveChanges();
        closeEditTaskForm();
        renewDisplay();
      });

      const deleteTaskBtn = document.createElement("button");
      deleteTaskBtn.setAttribute("type", "button");
      deleteTaskBtn.textContent = "Delete";
      deleteTaskBtn.dataset.d = taskDiv.dataset.tn;
      deleteTaskBtn.dataset.dp = taskDiv.dataset.pc;
      deleteTaskBtn.addEventListener("click", () => {
        projects[deleteTaskBtn.dataset.dp].deleteTask(deleteTaskBtn.dataset.d);
        console.log(projects);
        saveChanges();
        renewDisplay();
      });

      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("button-container");
      buttonContainer.append(viewDetailsBtn, openEditBtn, deleteTaskBtn);

      taskDiv.append(changeStatus, shortTask, buttonContainer);
    }

    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.textContent = "Delete Project";
    deleteProjectBtn.setAttribute("type", "button");
    deleteProjectBtn.classList.add("delete-project-btn");
    deleteProjectBtn.dataset.pd = p.dataset.p;
    deleteProjectBtn.addEventListener("click", () => {
      deleteProject(deleteProjectBtn.dataset.pd);
      saveChanges();
      renewDisplay();
      console.log(projects);
    });

    p.append(pin, pName, taskContainer, deleteProjectBtn);
  }
}

function renewDisplay() {
  displayProjects();
}

function openProjectForm() {
  document.querySelector(".project-form-window").style.display = "flex";
}

function closeProjectForm() {
  document.querySelector(".project-form-window").style.display = "none";
}

function openEditTaskForm() {
  document.querySelector(".view-task-window").style.display = "flex";
}

function closeEditTaskForm() {
  document.querySelector(".view-task-window").style.display = "none";
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
    document.getElementById("task-priority").checked
  );
}

export {
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
};

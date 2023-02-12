let projects = [];

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  createTask(title, description, date, priority, complete) {
    let task1 = new Task(title, description, date, priority, complete);
    this.tasks.push(task1);
    return task1;
  }

  deleteTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  }
}

class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.complete = false;
  }

  editTask(newTitle, newDescription, newDate, newPriority) {
    this.title = newTitle;
    this.description = newDescription;
    this.date = newDate;
    this.priority = newPriority;
  }
}

function createProjectArr(projectName) {
  let project2 = new Project(projectName);
  projects.push(project2);
}

function deleteProject(projectIndex) {
  projects.splice(projectIndex, 1);
}

export { projects, Project, Task, createProjectArr, deleteProject };

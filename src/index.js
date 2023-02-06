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
  constructor(title, description, date, priority, complete) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.complete = complete;
  }

  set newTitle(newTitle) {
    this.title = newTitle;
  }

  set newDescription(newDescription) {
    this.description = newDescription;
  }

  set newDate(newDate) {
    this.date = newDate;
  }

  set newPriority(newPriority) {
    this.priority = newPriority;
  }

  set newComplete(newComplete) {
    this.complete = newComplete;
  }
}

const logic = (() => {
  const createProject = (projectName) => {
    let project2 = new Project(projectName);
    projects.push(project2);
  };
  const deleteProject = (projectIndex) => {
    projects.splice(projectIndex, 1);
  };

  const editTask = (
    newTitle,
    newDescription,
    newDate,
    newPriority,
    newComplete,
    projectIndex,
    taskIndex
  ) => {
    projects[projectIndex].tasks[taskIndex].newTitle = newTitle;
    projects[projectIndex].tasks[taskIndex].newDescription = newDescription;
    projects[projectIndex].tasks[taskIndex].newDate = newDate;
    projects[projectIndex].tasks[taskIndex].newPriority = newPriority;
    projects[projectIndex].tasks[taskIndex].newComplete = newComplete;
  };
  return {
    createProject,
    deleteProject,
    editTask,
  };
})();

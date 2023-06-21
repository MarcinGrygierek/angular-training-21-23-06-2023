interface SingleTask {
  id: string;
  title: string;
}

class TaskManager {
  private tasks: SingleTask[] = [];

  get length() {
      return this.tasks.length;
  }

  getTasks() {
      return this.tasks;
  }

  addTask(title: string) {
      const newTask: SingleTask = {
          id: Math.round(Math.random() * 100000).toString(),
          title
      }
      this.tasks = [...this.tasks, newTask];
  }

  deleteTaskByIndex(indexToDelete: number) {
      this.tasks.splice(indexToDelete, 1); // sposób mutujący
  }

  deleteTaskById(idToDelete: string) {
      this.tasks = this.tasks.filter(val => val.id !== idToDelete); // sposób niemutujący
  }
}

const manager = new TaskManager();
manager.addTask('Lorem 1');
manager.addTask('Lorem 2');
manager.addTask('Lorem 3');
manager.addTask('Lorem 4');
manager.addTask('Lorem 5');

console.log(manager.getTasks());
manager.deleteTaskByIndex(3);

const tasks = manager.getTasks();
const idToDelete = tasks[1].id;

manager.deleteTaskById(idToDelete);

console.log('------');

console.log(manager.getTasks());
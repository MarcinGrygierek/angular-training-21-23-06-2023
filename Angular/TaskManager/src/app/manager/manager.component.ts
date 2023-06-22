import { Component, OnInit } from '@angular/core';
import { SingleTask, TaskStatus, TaskStatusChange } from '../types';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent {
  tasks: SingleTask[] = [];

  addTask(title: string) {
    const newTask: SingleTask = {
      title,
      status: TaskStatus.New,
      id: Math.round(Math.random() * 100000)
    }

    this.tasks.push(newTask);
  }

  deleteTask(idToDelete: number) {
    console.log('Deletein', idToDelete);
    const indexToDelete = this.tasks.findIndex(task => task.id === idToDelete);
    if(indexToDelete > -1) this.tasks.splice(indexToDelete, 1);
  }

  changeStatus(payload: TaskStatusChange) {
    const taskToChange = this.tasks.find(task => task.id === payload.id);
    if(taskToChange) {
      taskToChange.status = payload.newStatus;
    }
  }
  
}

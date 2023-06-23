import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SingleTask, TaskStatus, TaskStatusChange } from './types';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks = new BehaviorSubject<SingleTask[]>([]);
  tasks$: Observable<SingleTask[]>;

  constructor() { 
    this.tasks$ = this._tasks.asObservable();
  }
  
  addTask(title: string) {
    const newTask: SingleTask = {
      title,
      status: TaskStatus.New,
      hidden: false,
      id: Math.round(Math.random() * 100000)
    }

    const currentTasks = this._tasks.getValue();
    this._tasks.next([...currentTasks, newTask]);
  }

  deleteTask(idToDelete: number) {
    const currentTasks = this._tasks.getValue();
    const updatedTasks = currentTasks.map(task => {
      if(task.id === idToDelete) return {
        ...task,
        hidden: true,
      }
      return task;
    });

    this._tasks.next(updatedTasks);
  }

  changeStatus(payload: TaskStatusChange) {
    const currentTasks = this._tasks.getValue();
    const updatedTasks = currentTasks.map(task => {
      if(task.id === payload.id) return {
        ...task,
        status: payload.newStatus,
      }
      return task;
    });

    this._tasks.next(updatedTasks);
  }
}

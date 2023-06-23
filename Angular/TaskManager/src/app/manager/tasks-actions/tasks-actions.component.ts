import { Component } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-tasks-actions',
  templateUrl: './tasks-actions.component.html',
  styleUrls: ['./tasks-actions.component.scss']
})
export class TasksActionsComponent {

  constructor(private tasksService: TasksService) {}

  addTask(title: string) {
    this.tasksService.addTask(title);
  }
}

import { Component } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private tasksService: TasksService) {

  }

  addTask() {
    this.tasksService.addTask('From app')
  }
}

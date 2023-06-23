import { Component, Input, OnInit } from '@angular/core';
import { SingleTask } from '../../types';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  @Input()
  task!: SingleTask;

}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-tasks-actions',
  templateUrl: './tasks-actions.component.html',
  styleUrls: ['./tasks-actions.component.scss']
})
export class TasksActionsComponent {

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(
    private tasksService: TasksService,
    private fb: FormBuilder) {}

  handleSubmit() {
    const taskTitle = this.form.value.title;

    if(!taskTitle) return;

    this.tasksService.addTask(taskTitle);

    this.form.reset();
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SingleTask, TaskStatus } from '../../types';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input()
  task!: SingleTask;

  constructor(private tasksService: TasksService) {}

  get isNew() {
    return this.task.status === TaskStatus.New;
  }

  get isInProgress() {
    return this.task.status === TaskStatus.InProgress;
  }

  get isDone() {
    return this.task.status === TaskStatus.Done;
  }

  handleDelete() {
    this.tasksService.deleteTask(this.task.id);
  }

  changeToNew() {
    this.tasksService.changeStatus({ id: this.task.id, newStatus: TaskStatus.New })
  }
  
  changeToInProgress() {
    this.tasksService.changeStatus({ id: this.task.id, newStatus: TaskStatus.InProgress })
  }
  
  changeToDone() {
    this.tasksService.changeStatus({ id: this.task.id, newStatus: TaskStatus.Done })
  }

}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SingleTask, TaskStatus, TaskStatusChange } from '../../types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input()
  task!: SingleTask;

  @Output()
  onDelete = new EventEmitter<number>();

  @Output()
  onStatusChange = new EventEmitter<TaskStatusChange>()

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
    this.onDelete.emit(this.task.id);
  }

  changeToNew() {
    this.onStatusChange.emit({ id: this.task.id, newStatus: TaskStatus.New })
  }
  
  changeToInProgress() {
    this.onStatusChange.emit({ id: this.task.id, newStatus: TaskStatus.InProgress })
  }
  
  changeToDone() {
    this.onStatusChange.emit({ id: this.task.id, newStatus: TaskStatus.Done })
  }

}

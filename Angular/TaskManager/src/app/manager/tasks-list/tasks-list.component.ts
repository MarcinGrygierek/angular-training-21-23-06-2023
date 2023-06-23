import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SingleTask, TaskStatusChange } from '../../types';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {

  @Input()
  tasks: SingleTask[] = [];

  @Output()
  onDelete = new EventEmitter<number>();

  @Output()
  onStatusChange = new EventEmitter<TaskStatusChange>()

  deleteTask(id: number) {
    this.onDelete.emit(id);
  }

  changeStatus(payload: TaskStatusChange) {
    this.onStatusChange.emit(payload)
  }
}

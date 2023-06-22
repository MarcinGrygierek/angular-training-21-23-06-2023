import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tasks-actions',
  templateUrl: './tasks-actions.component.html',
  styleUrls: ['./tasks-actions.component.scss']
})
export class TasksActionsComponent {

  @Output()
  onAdd = new EventEmitter<string>();

  addTask(title: string) {
    this.onAdd.emit(title);
  }
}

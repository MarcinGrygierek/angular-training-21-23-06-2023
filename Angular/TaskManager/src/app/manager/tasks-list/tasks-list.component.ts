import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from 'src/app/tasks.service';
import { SingleTask } from 'src/app/types';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  tasks!: Observable<SingleTask[]>;

  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService.tasks$;
  }
}

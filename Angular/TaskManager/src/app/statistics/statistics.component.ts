import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Observable, map } from 'rxjs';
import { SingleTask, TaskStats, TaskStatus } from '../types';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent {
  tasksStats!: Observable<TaskStats>;

  openedTasks: number = 0;
  closedTasks: number = 0;

  constructor(private tasksService: TasksService) {
    this.tasksStats = this.tasksService.tasks$
      .pipe(
        map(tasks => ({
          opened: tasks.filter(task => task.status === TaskStatus.New).length,
          closed: tasks.filter(task => task.status === TaskStatus.Done).length
        }))
      )
  }
}

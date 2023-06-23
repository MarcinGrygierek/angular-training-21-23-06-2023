import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TasksActionsComponent } from './tasks-actions/tasks-actions.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ManagerComponent,
    TaskComponent,
    TaskDetailsComponent,
    TasksActionsComponent,
    TasksListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }

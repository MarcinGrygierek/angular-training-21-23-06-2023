import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { TaskComponent } from './task/task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksActionsComponent } from './tasks-actions/tasks-actions.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { PageContainerComponent } from './page-container/page-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    TaskComponent,
    TasksListComponent,
    TasksActionsComponent,
    TaskDetailsComponent,
    PageContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

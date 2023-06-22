import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';

const routes: Routes = [
  { path: '', component: AppWrapperComponent, children: [
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'manager', component: ManagerComponent
    },
    {
      path: 'statistics', component: StatisticsComponent
    },
    {
      path: '**', redirectTo: 'home'
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

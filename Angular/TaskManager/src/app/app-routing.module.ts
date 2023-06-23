import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';

const routes: Routes = [
  { path: '', component: AppWrapperComponent, children: [
    {
      path: 'home', component: HomeComponent
    },
    { path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule) },
    { path: 'statistics', loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule) },
    {
      path: '**', redirectTo: 'home'
    }
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

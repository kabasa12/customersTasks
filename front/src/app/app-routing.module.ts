import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersPageComponent } from './components/pages/customers-page/customers-page.component';
import { TasksPageComponent } from './components/pages/tasks-page/tasks-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'customers',
    component: CustomersPageComponent
  },
  {
    path: 'tasks',
    component: TasksPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

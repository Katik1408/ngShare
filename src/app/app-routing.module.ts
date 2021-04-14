import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { CategoryComponent } from './category/category.component';
import { CrudComponent } from './crud/crud.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { LoginComponent } from 'src/app/login/login.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';
const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
  },
  {
    path: 'createstudent',
    component: CreatestudentComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

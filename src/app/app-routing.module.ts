import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { CategoryComponent } from './category/category.component';
import { CrudComponent } from './crud/crud.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

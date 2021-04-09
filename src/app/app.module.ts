import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatestudentComponent } from './createstudent/createstudent.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NavbarComponent,
    CategoryComponent,
    CrudComponent,
    CreatestudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

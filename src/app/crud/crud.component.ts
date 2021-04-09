import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  constructor(private crudService: CrudService,private router : Router) {}
  students: any;
  ngOnInit(): void {
    this.crudService.getStudents().subscribe(
      (data) => {
        console.log(data);
        this.students = data;
      },
      (err) => console.log(err)
    );
  }
  createStudentComponent(){
    console.log('Inside createStudentComponent Method');
    this.router.navigateByUrl('createstudent');
  }
}

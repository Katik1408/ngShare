import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css'],
})
export class CreatestudentComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      place: new FormControl(),
    });
  }
  sendData(student) {
    console.log(student);
    this.crudService.createStudent(student).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

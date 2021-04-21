import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'ngSharing';
  price = 25;
  curr = 'USD';

  doj = new Date();
  people: any[] = [
    {
      name: 'Kartik',
      place: 'Bangalore',
      age: 27,
    },
    {
      name: 'Rahul',
      place: 'Noida',
      age: 47,
    },
    {
      name: 'Abhishek',
      place: 'Hyd',
      age: 37,
    },
    {
      name: 'Rohit',
      place: 'Delhi',
      age: 29,
    },
  ];

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

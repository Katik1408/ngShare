import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  message = '';
  datafromChild = '';
 // a : string;
  constructor(private dataService : DataService) {}

  ngOnInit(): void {}

  receiveData(data) {
    this.datafromChild = data;
  }

  sendData(){
    this.dataService.changeData(this.message);
  }

}

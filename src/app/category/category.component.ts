import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private dataService: DataService) {}

  datafromanothercomponent;
  ngOnInit(): void {
    this.dataService.currentMessage$.subscribe(
      (data) => {
        this.datafromanothercomponent = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

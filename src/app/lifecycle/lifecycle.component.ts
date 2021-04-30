import {
  Component,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy,
    OnChanges {
  order = 1;
  constructor(private data: DataService) {
    console.log('Inside Constructor and order is ' + this.order);
    this.order++;
  }
  ngDoCheck(): void {
    console.log('Inside ngDoCheck and order is ' + this.order);
    this.order++;
  }
  ngAfterContentInit(): void {
    console.log('Inside ngAfterContentInit and order is ' + this.order);
    this.order++;
  }
  ngAfterContentChecked(): void {
    console.log('Inside ngAfterContentChecked and order is ' + this.order);
    this.order++;
  }
  ngAfterViewChecked(): void {
    console.log('Inside ngAfterViewChecked and order is ' + this.order);
    this.order++;
  }
  ngAfterViewInit(): void {
    console.log('Inside ngAfterViewInit and order is ' + this.order);
    this.order++;
  }
  ngOnDestroy(): void {
    console.log('Inside ngOnDestroy and order is ' + this.order);
    this.order++;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Inside ngOnchanges and order is ' + this.order);
    this.order++;
  }
  title: any;
  form: FormGroup;
  ngOnInit(): void {
    this.title = 'title';
    this.form = new FormGroup({});
    console.log('Inside ngOnInit and order is '+ this.order);
    this.order++;
  }
}

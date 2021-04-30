import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  @Input() notify;

  username = '';
  @Output() usernameEmitter = new EventEmitter<string>();
  order = 1;
  // constructor() {
  //   console.log('Inside Constructor and order is ' + this.order);
  //   this.order++;
  //   console.log(this.notify);
  // }
  // ngDoCheck(): void {
  //   console.log('Inside ngDoCheck and order is ' + this.order);
  //   this.order++;
  //   console.log(this.notify);
  // }
  // ngAfterContentInit(): void {
  //   console.log('Inside ngAfterContentInit and order is ' + this.order);
  //   this.order++;
  //   console.log(this.notify);
  // }
  // ngAfterContentChecked(): void {
  //   console.log('Inside ngAfterContentChecked and order is ' + this.order);
  //   this.order++;
  //   console.log(this.notify);
  // }
  // ngAfterViewChecked(): void {
  //   console.log('Inside ngAfterViewChecked and order is ' + this.order);
  //   this.order++;
  //   console.log(this.notify);
  // }
  // ngAfterViewInit(): void {
  //   console.log('Inside ngAfterViewInit and order is ' + this.order);
  //   this.order++;
  //   console.log(this.notify);
  // }
  // ngOnDestroy(): void {
  //   console.log('Inside ngOnDestroy and order is ' + this.order);
  //   this.order++;
  //   console.log(this.notify);
  // }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    console.log(changes['notify']);

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        let change = changes[prop];
        switch (prop) {
          case 'notify':
            console.log('Notify change to ' + change.currentValue);
            console.log('Notify previous value is ' + change.previousValue);
            break;
          case 'inputprop2':
            console.log('another property');
        }
      }
    }
  }

  // ngOnInit(): void {
  //   console.log('Inside onInit and order is ' + this.order);
  //   this.order++;
  //   console.log(this.notify);
  // }
  sendData() {
    this.usernameEmitter.emit(this.username);
  }
}

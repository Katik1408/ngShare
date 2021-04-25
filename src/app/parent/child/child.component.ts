import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() notify;
  @Input() notify2;
  username = '';
  @Output() usernameEmitter = new EventEmitter<string>();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(changes['notify']);
    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        let change = changes[prop];
        switch (prop) {
          case 'notify':
            console.log('Notify change to ' + change.currentValue);
        }
      }
    }
  }

  ngOnInit(): void {}
  sendData() {
    this.usernameEmitter.emit(this.username);
  }
}

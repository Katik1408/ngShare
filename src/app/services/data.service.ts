import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  messageSource = new BehaviorSubject('Default');
  currentMessage$ = this.messageSource.asObservable();

  changeData(message: string) {
    this.messageSource.next(message);
  }

  constructor() {}
}

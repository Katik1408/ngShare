import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundChange]',
})
export class BackgroundChangeDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}

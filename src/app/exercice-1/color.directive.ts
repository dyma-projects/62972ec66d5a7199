import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') color?: string;
  @HostListener('window:keydown', ['$event']) keyboardEvent($event) {
    switch($event.key) {
      case "ArrowUp" :
        this.color = "red";
        break;
      case "ArrowDown" :
        this.color = "blue";
        break;
      case "ArrowLeft" :
        this.color = "yellow";
        break;
      case "ArrowRight" :
        this.color = "green";
        break;
      
      
    }
  }

  constructor() { }

}

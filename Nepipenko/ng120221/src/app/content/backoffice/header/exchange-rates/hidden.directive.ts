import { Directive, HostBinding} from '@angular/core';
// import {HostListener} from '@angular/core';

@Directive({
  selector: '[appHidden]',
  exportAs: 'hiddenControl'
})
export class HiddenDirective {
@HostBinding('style.visibility') public visibility: 'visible' | 'hidden' = 'hidden';
// @HostListener('window:click', ['$event.clientX']) public onClick(event: MouseEvent): void{
//   console.log(event);
//   this.visibility = 'hidden';
// }
  constructor() { }
  public show(): void{
  this.visibility = 'visible';
  }
  public hide(): void{
    this.visibility = 'hidden';
  }
}

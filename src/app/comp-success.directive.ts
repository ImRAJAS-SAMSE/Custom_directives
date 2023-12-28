import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true,
})
export class CompSuccessDirective {
  constructor(public obj: ElementRef) {}
  @HostListener('mouseenter') onmouseenter() {
    this.obj.nativeElement.style.background = 'green';
  }
  @HostListener('mouseleave') onmouseleave() {
    this.obj.nativeElement.style.background = 'black';
    this.obj.nativeElement.style.color = 'white';
  }
}

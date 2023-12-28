import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true,
})
export class CompFailureDirective {
  constructor(public obj: ElementRef) {}
  @HostListener('mouseleave') onmouseleave() {
    this.obj.nativeElement.style.background = 'red';
  }
}

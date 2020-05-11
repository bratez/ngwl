import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]'
})
export class HoverBorderDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.borderColor = '#000';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.borderColor= 'transparent';
  }

}

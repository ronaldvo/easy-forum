import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostListener('mouseover') onMouseOver() {
    this.ChangeBgColor('blue', '103%');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('black', '100%');
  }
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ChangeBgColor(color: string, size: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'font-size', size);
  }
}

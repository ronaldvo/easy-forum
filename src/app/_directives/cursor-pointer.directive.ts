import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCursorPointer]'
})
export class CursorPointerDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
      this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }
}

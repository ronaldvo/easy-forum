import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextAlign]'
})
export class TextAlignDirective implements OnInit {

  @Input('appTextAlign') align: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'text-align', this.align);
  }
}

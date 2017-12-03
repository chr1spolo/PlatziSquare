import { Directive, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltDirective implements OnInit {

  constructor (private elRef: ElementRef, private renderer: Renderer2)  {}

  @Input('appResaltar') plan : string;

  ngOnInit () {
      if (this.plan === 'paid') {
          this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
          this.renderer.setStyle(this.elRef.nativeElement, 'font-wigth', 'bold');
      }
  }

}

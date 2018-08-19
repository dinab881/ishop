import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[bgImage]'
})
export class BgImageDirective {
  @Input('bgImage') url: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundImage = 'url(' + this.url + ')';
  }

}

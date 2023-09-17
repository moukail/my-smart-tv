import {Directive, ElementRef, Inject} from '@angular/core';

@Directive({
  selector: '[focus]',
})
export class FocusDirective {
  constructor(@Inject(ElementRef) private element: ElementRef) {
    setTimeout(() => this.element.nativeElement.focus());
  }
}

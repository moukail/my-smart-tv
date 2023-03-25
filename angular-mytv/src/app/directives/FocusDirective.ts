import {Directive, ElementRef, HostListener, Inject, Input} from '@angular/core';

@Directive({
  selector: '[focus]',
})
export class FocusDirective {
  @Input()
  focus!:boolean;
/*  constructor(private _elementRef: ElementRef) {
    console.log('ngAfterViewChecked', this._elementRef.nativeElement)
    this._elementRef.nativeElement.focus()
  }*/

  constructor(@Inject(ElementRef) private element: ElementRef) {
    setTimeout(() => this.element.nativeElement.focus());
  }
  protected ngOnChanges() {
    //this.element.nativeElement.focus();
  }
}

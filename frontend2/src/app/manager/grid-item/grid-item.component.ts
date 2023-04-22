import {Component, ElementRef, Input} from '@angular/core';
import {FocusableOption} from "@angular/cdk/a11y";

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  host: { tabindex: '-1' },
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements FocusableOption {
  @Input() fruit!: string;
  disabled!: boolean;

  constructor(private _elementRef: ElementRef) {}

  focus() {
    this._elementRef.nativeElement.focus();
  }
}
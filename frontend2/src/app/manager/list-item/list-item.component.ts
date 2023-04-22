import {Component, ElementRef, Input} from '@angular/core';
import {FocusableOption} from "@angular/cdk/a11y";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  host: { tabindex: '-1' },
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements FocusableOption {
  @Input() fruit!: string;
  disabled!: boolean;

  constructor(private _elementRef: ElementRef) {}

  focus() {
    this._elementRef.nativeElement.focus();
  }
}

import {
  AfterContentInit, AfterViewInit,
  Component,
  ContentChildren, ElementRef,
  HostListener,
  Input,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {FocusKeyManager} from "@angular/cdk/a11y";
import {GridItemComponent} from "../grid-item/grid-item.component";
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  host: { 'tabindex': '0' },
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements AfterViewInit {
  @ViewChild('gridList') gridList!: ElementRef;
  @ViewChildren('gridItem') gridItem!: QueryList<any>;
  keyManager!: any;

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  @HostListener('keydown', ['$event'])
  manage(event: any) {
    this.keyManager.onKeydown(event);
    this.keyManager.setNextItemActive();
  }

  ngAfterViewInit(): void {
    this.keyManager = new FocusKeyManager(this.gridItem).withWrap();
  }
}

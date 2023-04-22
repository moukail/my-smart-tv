import {
  AfterContentInit,
  Component,
  HostListener,
} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  host: { 'tabindex': '0' },
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterContentInit {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 1, color: '#61d959'},
    {text: 'Four', cols: 2, rows: 1, color: '#e00662'},
    {text: 'Four', cols: 2, rows: 1, color: '#881b1b'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  @HostListener('keydown', ['$event'])
  manage(event: KeyboardEvent) {
    //this.keyManager.onKeydown(event);
  }

  ngAfterContentInit(): void {
    //this.keyManager = new FocusKeyManager(this.items).withWrap();
  }
}

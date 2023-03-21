import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() max: number = 0;
  @Input() value: number = 0;
  @Input() label: string = '';
  @Output() input = new EventEmitter<Event>();
  @Output() change = new EventEmitter<Event>();

  public inputHandler(event: Event) {
    this.input.emit(event);
  }

  public changeHandler(event: Event) {
    this.change.emit(event);
  }
}

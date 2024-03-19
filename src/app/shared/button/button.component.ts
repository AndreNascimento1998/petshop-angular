import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output() clickEvent = new EventEmitter<void>()
  onClick() {
    this.clickEvent.emit()
  }
}

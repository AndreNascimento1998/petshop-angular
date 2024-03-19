import {Component, Output, EventEmitter, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output() clickEvent = new EventEmitter<void>()
  @Input() animate: boolean = false
  onClick() {
    this.clickEvent.emit()
  }
}

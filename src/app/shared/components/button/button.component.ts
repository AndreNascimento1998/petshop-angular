import {Component, Output, EventEmitter, Input, input} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  @Output() clickEvent = new EventEmitter<void>()
  @Input() animate: boolean = false
  @Input() color: string = '#515BAC4C'
  @Input() textColor: string = '#000000'
  onClick() {
    this.clickEvent.emit()
  }
}

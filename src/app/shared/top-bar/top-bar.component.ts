import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

}

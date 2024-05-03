import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {ArrowComponent} from "../../../assets/svg/arrow/arrow.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    ArrowComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  imagePath = 'assets/image/dog.png';
}

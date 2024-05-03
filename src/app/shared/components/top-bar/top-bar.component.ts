import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {LogoComponent} from "../../../../assets/svg/logo/logo.component";
import {InstagramComponent} from "../../../../assets/svg/instagram/instagram.component";
import {YoutubeComponent} from "../../../../assets/svg/youtube/youtube.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    ButtonComponent,
    LogoComponent,
    InstagramComponent,
    YoutubeComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

}

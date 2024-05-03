import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./modules/landing-page/home-page.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  //{ path: 'top', component: TopBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

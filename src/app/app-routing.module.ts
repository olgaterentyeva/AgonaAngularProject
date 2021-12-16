import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutFilmComponent} from "./pages/about-film/about-film.component";

const routes: Routes = [
  {
    path:'',
    component:AboutFilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutFilmComponent } from './pages/about-film/about-film.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { ButtonComponent } from './components/button/button.component';
import { FilmComponent } from './components/film/film.component';
import { GenreSearchComponent } from './components/genre-search/genre-search.component';
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutFilmComponent,
    ToggleComponent,
    ButtonComponent,
    FilmComponent,
    GenreSearchComponent,
  ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
      OverlayModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

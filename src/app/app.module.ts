import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutFilmComponent } from './pages/about-film/about-film.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import { InputComponent } from './components/input/input.component';
import {MatButtonModule} from "@angular/material/button";
import { FilmComponent } from './components/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutFilmComponent,
    ToggleComponent,
    InputComponent,
    FilmComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

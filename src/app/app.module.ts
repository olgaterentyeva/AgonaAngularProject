import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmInfoComponent } from './pages/film-info/film-info.component';
import { CollectionComponent } from './pages/collection/collection.component';
import {ReactiveFormsModule} from "@angular/forms";
import {OverlayModule} from "@angular/cdk/overlay";
import { FilmComponent } from './components/film/film.component';
import {ToggleComponent} from "./components/toggle/toggle.component";
import { GenreSearchComponent } from './components/genre-search/genre-search.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmInfoComponent,
    CollectionComponent,
    FilmComponent,
    ToggleComponent,
    GenreSearchComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



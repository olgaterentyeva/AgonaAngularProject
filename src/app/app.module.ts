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
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { GenreSearchComponent } from './components/genre-search/genre-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmInfoComponent,
    CollectionComponent,
    FilmComponent,
    ToggleComponent,
    SaveButtonComponent,
    GenreSearchComponent,
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



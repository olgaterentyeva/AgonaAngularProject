import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AboutFilmComponent} from "../../pages/about-film/about-film.component";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.sass']
})
export class FilmComponent {

  @Input() films$ = this.aboutFilm.films$;
  @Output() clickedOnPoster: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private aboutFilm: AboutFilmComponent) {
  }
  seeFilmInfo(): void {
    this.clickedOnPoster.emit(true);
  }

}

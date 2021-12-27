import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FilmInfoComponent} from "../../pages/film-info/film-info.component";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.sass'],
})

export class FilmComponent {

  @Input() films$ = this.aboutFilm.films$;
  @Output() clickedOnPoster: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private aboutFilm: FilmInfoComponent) {
  }

  seeFilmInfo(): void {
    this.clickedOnPoster.emit(true);
  }

}


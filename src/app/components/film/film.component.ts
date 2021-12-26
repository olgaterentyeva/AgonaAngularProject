import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AboutFilmComponent} from "../../pages/about-film/about-film.component";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.sass']
})
export class FilmComponent{

  constructor(private aboutFilm: AboutFilmComponent){};

  @Input() films$ = this.aboutFilm.films$;
  @Output() clickedOnPoster: EventEmitter<boolean> = new EventEmitter<boolean>();

  seeFilmDescription():void{
    this.clickedOnPoster.emit(true);
  }
}

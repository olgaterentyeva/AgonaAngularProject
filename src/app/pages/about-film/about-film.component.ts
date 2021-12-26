import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FilmService} from "../../services/film.service";
import {delay, distinctUntilChanged} from "rxjs";

@Component({
  selector: 'app-about-film',
  templateUrl: './about-film.component.html',
  styleUrls: ['./about-film.component.sass']
})
export class AboutFilmComponent {
  form: FormGroup;
  films$ = this.filmService.films$;
  value = '';
  selected = 0;
  filmNotFound = true;

  constructor(
    private fb: FormBuilder,
    private filmService: FilmService
  ) {
    this.form = this.fb.group({
      searchInput: [],
      genre: [[]]
    });

    this.form.get('searchInput')!.valueChanges
      .pipe(
        delay(700),
        distinctUntilChanged()
      )
      .subscribe(res => {
        this.filmService.searchFilm(res);
      })
  }

  onToggleChange(n: number) {
    this.selected = n;
  }

  onPosterClick(value: boolean):void{
    console.log(value);
  }
}

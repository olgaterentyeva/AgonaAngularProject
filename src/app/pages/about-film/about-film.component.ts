import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FilmService} from "../../services/film.service";
import {delay, distinctUntilChanged} from "rxjs";

@Component({
    selector: 'app-about-film',
    templateUrl: './about-film.component.html',
    styleUrls: ['./about-film.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  }
)
export class AboutFilmComponent {
  form: FormGroup;
  films$ = this.filmService.films$;
  value = '';

  constructor(private fb: FormBuilder,
              private filmService: FilmService) {
    this.form = this.fb.group({
      searchInput: [],
      toggle:["true"]
    });

    // @ts-ignore
    this.form.get('searchInput').valueChanges
      .pipe(
        delay(700),
        distinctUntilChanged(),
      )
      .subscribe(res => {
      this.filmService.searchFilm(res);
    })

    // @ts-ignore
    this.form.get('toggle').valueChanges.subscribe(res => {
      console.log(res)
    })
  }

  onClick(value: boolean):void{
    console.log(value);
  }
}

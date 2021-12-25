import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
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
  form: FormGroup = new FormGroup({
    "toggle": new FormControl
  })
  films$ = this.filmService.films$;
  value = '';
  toggle = true;

  constructor(private fb: FormBuilder,
              private filmService: FilmService) {
    this.form = this.fb.group({
      searchInput: [],
      toggle: true
    });

    this.form.get('searchInput')!.valueChanges
      .pipe(
        delay(700),
        distinctUntilChanged(),
      )
      .subscribe(res => {
      this.filmService.searchFilm(res);
    })

    this.form.get('toggle')!.valueChanges.subscribe(res => {
    //  TODO сделать смену контента при нажатии на тоггл
    })
  }

  onClick(value: boolean):void{
    console.log(value);
  }
}

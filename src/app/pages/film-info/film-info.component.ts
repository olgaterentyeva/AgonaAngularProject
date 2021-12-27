import { Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { delay, distinctUntilChanged } from 'rxjs';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.sass']
})
export class FilmInfoComponent {

  form: FormGroup;
  films$ = this.filmService.films$;
  value = '';
  selected = 0;
  filmNotFound = true;

  constructor(private fb: FormBuilder,
              private filmService: FilmService) {
    this.form = this.fb.group({
      searchInput: [],
      toggle:["true"]
    });


    this.form.get('searchInput')!.valueChanges
      .pipe(
        delay(700),
        distinctUntilChanged(),
      )
      .subscribe(res => {
        this.filmService.searchFilm(res);
        this.filmNotFound = !Boolean(res);
      })

  }

  onToggleChange(n: number) {
    this.selected = n;
  }

  onClick(value: boolean):void{
  }

}

import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'agona-project';
  form: FormGroup;
  films$ = this.filmService.films$;

  constructor(private fb: FormBuilder, private filmService: FilmService) {
    this.form = this.fb.group({
      filmSearch: [],
      genre: [[]]
    });
  }
}


import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

interface Film{
  image: string,
  name: string,
  id: number,
  year: string
}

const MockFilms: Array<Film> = [

  {
    name: 'Еще по одной',
    id: 1,
    image: "./assets/films/drunk.svg" ,
    year: "2020"
  },
  {
    name: 'Отец',
    id: 2,
    image: "./assets/films/father.svg" ,
    year: "2020"
  },
  {
    name: 'Девушка',
    id: 3,
    image: "./assets/films/girl.svg" ,
    year: "2020"
  },
  {
    name: 'Девушка',
    id: 9,
    image: "./assets/films/girl.svg" ,
    year: "2020"
  },
  {
    name: 'Годзилла',
    id: 4,
    image: "./assets/films/godzilla.svg" ,
    year: "2020"
  },
  {
    name: 'Манк',
    id: 5,
    image: "./assets/film/mank.svg" ,
    year: "2020"
  }
];

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films$: BehaviorSubject<Array<Film>> = new BehaviorSubject<Array<Film>>([]);

  searchFilm(inputValue: string): void{
    if(!inputValue || inputValue.length < 1){
      this.films$.next([]);
      return;
    }
    const value = MockFilms.filter(film => film.name.toLowerCase().startsWith(inputValue.toLowerCase()));

    this.films$.next(value);
  }

  constructor() { }
}

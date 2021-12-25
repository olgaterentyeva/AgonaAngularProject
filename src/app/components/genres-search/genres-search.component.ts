import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

interface Option<T = string> {
  label: string,
  value: T
}

export const Genres: Array<Option> = [
  {
    label: 'Комедия',
    value: 'comedy'
  }, {
    label: 'Боевик',
    value: 'action'
  }, {
    label: 'Нуар',
    value: 'noir'
  }, {
    label: 'Фантастика',
    value: 'fantasy'
  }
];

@Component({
  selector: 'app-genres-search',
  templateUrl: './genres-search.component.html',
  styleUrls: ['./genres-search.component.sass']
})
export class GenresSearchComponent {
  @Input() placeholder: string = 'Жанр';
  overlayIsOpen: boolean = false;
  selected: Array<Option> = [];
  inputSearch: FormControl = new FormControl('');
  genres: Array<Option> = [];

  onChangeCallback = (v: any) => {
  };
  onTouchedCallback = () => {
  };

  constructor() {
    this.inputSearch.valueChanges.subscribe(value => {
      if (!value || value.length < 1) {
        this.genres = [];
        this.overlayIsOpen = false;
        return;
      }
      this.genres = Genres.filter(item => item.label.startsWith(value));
      this.overlayIsOpen = true;
    })
  }

  writeValue(value: Array<Option>): void {
    if (value !== this.selected) {
      this.selected = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  close(): void {
    this.overlayIsOpen = false;
  }

  selectGenre(genre: Option): void {
    this.selected.push(genre);
    this.overlayIsOpen = false;
    this.inputSearch.reset();

    this.onChangeCallback(this.selected);
    this.onTouchedCallback();

  }

  removeGenre(genre: Option): void {
    this.selected = this.selected.filter(item => item.value !== genre.value);
  }

}

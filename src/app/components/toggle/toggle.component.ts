import {Component, EventEmitter, Input, OnInit, Output, forwardRef} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(():any => ToggleComponent),
      multi: true
    }
  ]
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() buttons!: string[];
  @Input() selected!: number;
  @Output() onChanged = new EventEmitter<number>();

  handleChange(n: number) {
    this.selected = n;
    this.onChanged.emit(n);
  }
}

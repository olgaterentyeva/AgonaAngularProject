import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaveButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

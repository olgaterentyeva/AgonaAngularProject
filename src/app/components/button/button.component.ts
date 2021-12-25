import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonComponent implements OnInit {

  @Input() theme: 'PRIMARY' | 'SECONDARY' = 'PRIMARY';//по дефолту ставим primary
  @Input() type: 'submit' | 'button' | 'reset' = 'button';

  constructor() {
  }

  ngOnInit(): void {
  }

}

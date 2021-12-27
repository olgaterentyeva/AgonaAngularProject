import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonComponent {

  @Input() theme: 'PRIMARY' | 'SECONDARY' = 'PRIMARY';
  @Input() type: 'submit' | 'button' | 'reset' = 'button';

}

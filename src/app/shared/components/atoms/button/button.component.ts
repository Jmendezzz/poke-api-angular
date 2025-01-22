import { Component, Input } from '@angular/core';
import { Size } from 'src/app/shared/types/Size';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() size: Size = 'medium';
  @Input() type: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() disabled: boolean = false;

  get buttonClass(): string {
    return `btn btn--${this.size} btn--${this.type}`;
  }
}
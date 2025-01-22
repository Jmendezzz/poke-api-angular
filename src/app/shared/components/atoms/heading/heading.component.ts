import { Component, Input } from '@angular/core';
import { Heading } from 'src/app/shared/types/Heading';
import { Size } from 'src/app/shared/types/Size';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {

  @Input() headingLevel!: Heading;

  @Input() size!: Size;

  getHeadingClass(): string {
    return `heading heading--${this.size}`;
  }
}

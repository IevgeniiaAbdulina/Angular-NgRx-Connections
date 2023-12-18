import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule]
})
export class ButtonComponent {
  @Input() type?:
    | 'basic'
    | 'raised'
    | 'flat'
    | 'icon'
    | 'stroked'
    | 'fab'
    | 'mini-fab';
  @Input() color?: string;
  @Input() disabled?: boolean;
  @Input() extended?: boolean;
  @Output() buttonClick = new EventEmitter();

  onClick(event: Event): void {
    this.buttonClick.emit(event);
  }
}

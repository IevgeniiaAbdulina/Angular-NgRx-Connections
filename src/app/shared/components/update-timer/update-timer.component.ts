import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-update-timer',
  templateUrl: './update-timer.component.html',
  styleUrls: ['./update-timer.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent]
})
export class UpdateTimerComponent {
  countdown = 0;

  onClick(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.countdown = 60;
    setInterval(() => {
      this.countdown -= 1;

      if (this.countdown < 0) {
        this.countdown = 0;
      }
    }, 1000);
  }
}

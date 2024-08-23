import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent {
  @Input() initialState: number = 0;
  currentState: number = 0;

  // 0: Зеленый, 1: Желтый, 2: Красный, 3: Красный+Желтый
  states: string[] = ['green', 'yellow', 'red', 'red-yellow'];

  constructor() {
    this.currentState = this.initialState;
  }

  nextState() {
    this.currentState = (this.currentState + 1) % this.states.length;
  }

  get currentColor() {
    return this.states[this.currentState];
  }

  get showRedArrow() {
    return this.currentColor === 'red' || this.currentColor === 'red-yellow' || this.currentColor === 'green';
  }

  get showGreenArrow() {
    return this.currentColor === 'green';
  }
}

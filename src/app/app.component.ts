import { Component } from '@angular/core';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrafficLightComponent],
  template: `
    <app-traffic-light [initialState]="0"></app-traffic-light>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

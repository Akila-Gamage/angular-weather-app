import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent {
  @Input() iconUrl: any;
}

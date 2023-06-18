import { Component, Input} from '@angular/core';
import { TemperatureComponent } from '../temperature/temperature.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

  weatherData: any;

  receiveWeatherData(data: any) {
    this.weatherData = data;
  }

  @Input() weatherType: any;
}

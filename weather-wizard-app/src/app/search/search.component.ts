import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { TemperatureComponent } from '../temperature/temperature.component';
import { HumidityComponent } from '../humidity/humidity.component';
import { PressureComponent } from '../pressure/pressure.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  city: string = 'colombo';

  ngOnInit(): void {
    this.search();
  }


  @Output() weatherData = new EventEmitter<any>();

  constructor(private weatherApiService: WeatherApiService) { }

  search(): void {
    this.weatherApiService.getWeatherDetails(this.city)
      .subscribe(response => {
        this.weatherData.emit(response);
      });
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-name',
  templateUrl: './city-name.component.html',
  styleUrls: ['./city-name.component.css']
})
export class CityNameComponent {

  @Input() name: any;
}

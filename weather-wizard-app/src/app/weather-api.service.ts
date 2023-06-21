import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  constructor(private http: HttpClient) { }

  getWeatherDetails(city: string): Observable<any> {
    const url = `http://localhost:8080/weather/${city}`;
    return this.http.get(url);
  }
}

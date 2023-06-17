import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { HumidityComponent } from './humidity/humidity.component';
import { PressureComponent } from './pressure/pressure.component';
import { MainComponent } from './main/main.component';
import { CityNameComponent } from './city-name/city-name.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TemperatureComponent,
    HumidityComponent,
    PressureComponent,
    MainComponent,
    CityNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SearchComponent,
    TemperatureComponent,
    HumidityComponent,
    PressureComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }

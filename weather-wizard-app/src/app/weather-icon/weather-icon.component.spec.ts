import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIconComponent } from './weather-icon.component';

describe('WeatherIconComponent', () => {
  let component: WeatherIconComponent;
  let fixture: ComponentFixture<WeatherIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherIconComponent]
    });
    fixture = TestBed.createComponent(WeatherIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

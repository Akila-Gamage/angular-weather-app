import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityNameComponent } from './city-name.component';

describe('CityNameComponent', () => {
  let component: CityNameComponent;
  let fixture: ComponentFixture<CityNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityNameComponent]
    });
    fixture = TestBed.createComponent(CityNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

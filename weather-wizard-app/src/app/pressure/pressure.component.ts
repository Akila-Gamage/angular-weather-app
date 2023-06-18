import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.css']
})
export class PressureComponent {
  @Input() pressure: any;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate3',
  templateUrl: './calculate3.component.html',
  styleUrls: ['./calculate3.component.css']
})
export class Calculate3Component implements OnInit {
  fahrenheit = 5;     
  celsuis = 20;  
  constructor() { }

  ngOnInit() {
  }

}

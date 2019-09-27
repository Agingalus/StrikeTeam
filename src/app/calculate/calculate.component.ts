import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  qty = 8;     // These 2 lines are what I changed, these are this components “state”, or model
  cost = 9;    //  They are just normal class properties
  constructor() { }

  ngOnInit() {
  }

}

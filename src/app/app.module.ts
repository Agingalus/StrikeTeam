import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpletextComponent } from './simpletext/simpletext.component';
import { CalculateComponent } from './calculate/calculate.component';
import { FormsModule } from '@angular/forms';
import { Calculate2Component } from './calculate2/calculate2.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { Calculate3Component } from './calculate3/calculate3.component';
import { ToDoComponent } from './to-do/to-do.component'; 


@NgModule({
  declarations: [
    AppComponent,
    SimpletextComponent,
    CalculateComponent,
    Calculate2Component,
    BmiCalculatorComponent,
    Calculate3Component,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpletextComponent } from './simpletext/simpletext.component';
import { CalculateComponent } from './calculate/calculate.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'; 
=======
import { FormsModule } from '@angular/forms';
import { Calculate2Component } from './calculate2/calculate2.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component'; 
>>>>>>> c5ae7d301f37647a4d6cd7513a3cde8e997a080a

@NgModule({
  declarations: [
    AppComponent,
    SimpletextComponent,
<<<<<<< HEAD
    CalculateComponent
=======
    CalculateComponent,
    Calculate2Component,
    BmiCalculatorComponent
>>>>>>> c5ae7d301f37647a4d6cd7513a3cde8e997a080a
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

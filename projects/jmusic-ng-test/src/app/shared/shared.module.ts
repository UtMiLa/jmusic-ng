import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PianoKbdComponent } from './piano-kbd/piano-kbd.component';



@NgModule({
  declarations: [
    PianoKbdComponent
  ],
  exports: [
    PianoKbdComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

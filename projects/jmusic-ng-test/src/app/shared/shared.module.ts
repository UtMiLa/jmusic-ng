import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PianoKbdComponent } from './piano-kbd/piano-kbd.component';
import { TerminalComponent } from './terminal/terminal.component';



@NgModule({
  declarations: [
    PianoKbdComponent,
    TerminalComponent
  ],
  exports: [
    PianoKbdComponent,
    TerminalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

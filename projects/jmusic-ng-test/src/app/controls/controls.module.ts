import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls.component';
import { ConstructRegularMeterComponent } from './construct-regular-meter/construct-regular-meter.component';
import { DisplayMeterComponent } from './display-meter/display-meter.component';
import { SelectMeterComponent } from './select-meter/select-meter.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [
    ControlsComponent,
    ConstructRegularMeterComponent,
    DisplayMeterComponent,
    SelectMeterComponent
  ],
  exports: [
    ConstructRegularMeterComponent,
    DisplayMeterComponent,
    SelectMeterComponent
  ]
})
export class ControlsModule { }

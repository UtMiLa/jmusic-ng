import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterConstructComponent } from './meter-construct/meter-construct.component';
import { MeterDisplayComponent } from './meter-display/meter-display.component';
import { MeterSelectComponent } from './meter-select/meter-select.component';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [

    CommonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [MeterConstructComponent, MeterDisplayComponent, MeterSelectComponent],
  exports: [MeterConstructComponent, MeterDisplayComponent, MeterSelectComponent]
})
export class ControlsModule { }

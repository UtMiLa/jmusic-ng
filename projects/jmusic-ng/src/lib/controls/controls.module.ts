import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterConstructComponent } from './meter-construct/meter-construct.component';
import { MeterDisplayComponent } from './meter-display/meter-display.component';
import { MeterSelectComponent } from './meter-select/meter-select.component';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClefDisplayComponent } from './clef-display/clef-display.component';
import { ClefSelectComponent } from './clef-select/clef-select.component';
import { ClefConstructComponent } from './clef-construct/clef-construct.component';
import { KeyDisplayComponent } from './key-display/key-display.component';
import { KeySelectComponent } from './key-select/key-select.component';
import { KeyConstructComponent } from './key-construct/key-construct.component';
import { JmusicNgModule } from '../jmusic-ng.module';
import { ScoreConstructComponent } from './score-construct/score-construct.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonToggleModule,
    /*MatFormFieldModule,*/
    FormsModule,
    /*MatInputModule,*/
    JmusicNgModule
  ],
  declarations: [
    MeterConstructComponent,
    MeterDisplayComponent,
    MeterSelectComponent,
    ClefDisplayComponent,
    ClefSelectComponent,
    ClefConstructComponent,
    KeyDisplayComponent,
    KeySelectComponent,
    KeyConstructComponent,
    ScoreConstructComponent,
  ],
  exports: [
    MeterConstructComponent,
    MeterDisplayComponent,
    MeterSelectComponent,
    ClefDisplayComponent,
    ClefSelectComponent,
    ClefConstructComponent,
    KeyDisplayComponent,
    KeySelectComponent,
    KeyConstructComponent,
  ],
})
export class ControlsModule {}

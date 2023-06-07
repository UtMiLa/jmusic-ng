import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ClefDialogComponent } from './clef-dialog/clef-dialog.component';
import { MeterDialogComponent } from './meter-dialog/meter-dialog.component';
import { KeyDialogComponent } from './key-dialog/key-dialog.component';
import { ControlsModuleDevelop } from '../controls/controls.module';
import { DialogsService } from 'projects/jmusic-ng/src/lib/dialogs.service';
import { JmusicNgModule } from 'projects/jmusic-ng/src/public-api';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { ControlsModule } from 'projects/jmusic-ng/src/lib/controls/controls.module';

@NgModule({
  imports: [
    CommonModule,
    ControlsModuleDevelop,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    JmusicNgModule,
    ControlsModule
  ],
  declarations: [DialogDemoComponent],
  providers: [DialogsService],
  exports: [],
})
export class DialogsModule {}

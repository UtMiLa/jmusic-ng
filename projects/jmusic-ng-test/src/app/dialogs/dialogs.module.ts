import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsComponent } from './dialogs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ClefDialogComponent } from './clef-dialog/clef-dialog.component';
import { MeterDialogComponent } from './meter-dialog/meter-dialog.component';
import { KeyDialogComponent } from './key-dialog/key-dialog.component';
import { ControlsModule } from '../controls/controls.module';

@NgModule({
  imports: [
    CommonModule,
    ControlsModule
    /*FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DialogsComponent*/
  ],
  //declarations: [MeterComponentComponent, KeyDialogComponent],
  exports: []
})
export class DialogsModule { }

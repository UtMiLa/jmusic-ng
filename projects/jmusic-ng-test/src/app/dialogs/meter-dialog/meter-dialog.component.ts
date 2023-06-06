import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { KeyDef, RegularMeterDef, Time } from 'jmusic-model/model';
import { ControlsModule } from 'projects/jmusic-ng/src/lib/controls/controls.module';

export interface DialogData {
  meterDef: RegularMeterDef;
}

@Component({
  selector: 'app-meter-dialog',
  templateUrl: './meter-dialog.component.html',
  styleUrls: ['./meter-dialog.component.scss'],
  imports: [MatDialogModule, MatFormFieldModule, ControlsModule, JsonPipe],
  standalone: true
})
export class MeterDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MeterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public meterDef: RegularMeterDef) { }

  ngOnInit() {
  }

  isLegal(): boolean {
    return !!this.meterDef && this.meterDef.count > 0 && this.meterDef.value > 0;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}

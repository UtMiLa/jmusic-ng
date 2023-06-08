import { RegularMeterDef } from 'jmusic-model/model';
import { JsonPipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ControlsModule } from '../../controls/controls.module';

@Component({
  selector: 'app-meter-dialog',
  templateUrl: './meter-dialog.component.html',
  styleUrls: ['./meter-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, ControlsModule],
})
export class MeterDialogComponent {
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


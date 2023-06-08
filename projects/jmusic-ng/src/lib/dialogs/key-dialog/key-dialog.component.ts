import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ControlsModule } from '../../controls/controls.module';
import { KeyDef } from 'jmusic-model/model';

@Component({
  selector: 'app-key-dialog',
  templateUrl: './key-dialog.component.html',
  styleUrls: ['./key-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, ControlsModule],
})
export class KeyDialogComponent {
  constructor(public dialogRef: MatDialogRef<KeyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public keyDef: KeyDef) { }

  ngOnInit() {
  }

  isLegal(): boolean {
    return !!this.keyDef && this.keyDef.accidental !== undefined && this.keyDef.count !== undefined;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}

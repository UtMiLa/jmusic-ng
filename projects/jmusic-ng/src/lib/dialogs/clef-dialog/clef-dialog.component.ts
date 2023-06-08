import { Component, Inject } from '@angular/core';
import { ControlsModule } from '../../controls/controls.module';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ClefDef } from 'jmusic-model/model';

@Component({
  selector: 'app-clef-dialog',
  templateUrl: './clef-dialog.component.html',
  styleUrls: ['./clef-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, ControlsModule],
})
export class ClefDialogComponent {
  constructor(public dialogRef: MatDialogRef<ClefDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public clefDef: ClefDef) { }

  ngOnInit() {
  }

  isLegal(): boolean {
    return !!this.clefDef && this.clefDef.clefType !== undefined && this.clefDef.line !== undefined;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}

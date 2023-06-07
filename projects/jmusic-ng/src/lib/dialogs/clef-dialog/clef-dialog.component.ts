import { Component, Inject } from '@angular/core';
import { ControlsModule } from '../../controls/controls.module';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClefDef } from 'jmusic-model/model';
import { JmusicNgModule } from '../../jmusic-ng.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-clef-dialog',
  templateUrl: './clef-dialog.component.html',
  styleUrls: ['./clef-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, ControlsModule,
    JmusicNgModule,
    /*CommonModule,

    FormsModule,


    MatInputModule,
    MatButtonModule*/


  ],
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

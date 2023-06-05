import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-clef-dialog',
  templateUrl: './clef-dialog.component.html',
  styleUrls: ['./clef-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule]
})
export class ClefDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClefDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

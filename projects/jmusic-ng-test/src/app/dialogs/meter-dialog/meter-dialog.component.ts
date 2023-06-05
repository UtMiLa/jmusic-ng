import { NgIf } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { KeyDef, RegularMeterDef, Time } from 'jmusic-model/model';

export interface DialogData {
  meterDef: RegularMeterDef;
}

@Component({
  selector: 'app-meter-dialog',
  templateUrl: './meter-dialog.component.html',
  styleUrls: ['./meter-dialog.component.scss'],
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule, NgIf, MatButtonToggleModule],
  standalone: true
})
export class MeterDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MeterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  private _denominator?: string;
  public get denominator() {
    return this._denominator;
  }
  public set denominator(value) {
    this._denominator = value;
    if (value)
      this.data.meterDef.value = +value;
    if (this._denominator && this._numerator) this._selected = `${this._numerator}/${this._denominator}`;
  }
  private _numerator?: string;
  public get numerator() {
    return this._numerator;
  }
  public set numerator(value) {
    this._numerator = value;
    if (value)
      this.data.meterDef.count = +value;
    if (this._denominator && this._numerator) this._selected = `${this._numerator}/${this._denominator}`;
  }
  private _selected?: string;
  public get selected() {
    return this._selected;
  }
  public set selected(value) {
    this._denominator = undefined;
    this._numerator = undefined;
    this._selected = value;
    const vals = this._selected?.split('/');
    if (vals && vals.length === 2) {
      this._numerator = vals[0];
      this._denominator = vals[1];
      this.data.meterDef.count = +vals[0];
      this.data.meterDef.value = +vals[1];
    }
  }

  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}

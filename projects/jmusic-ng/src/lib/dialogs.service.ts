import { Injectable } from '@angular/core';
import { KeyDef, Clef, ClefDef, RegularMeterDef, ClefType, ScoreDef, JMusic, StaffDef, FlexibleSequence } from 'jmusic-model/model';
import { MeterDialogComponent } from './dialogs/meter-dialog/meter-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ClefDialogComponent } from './dialogs/clef-dialog/clef-dialog.component';
import { KeyDialogComponent } from './dialogs/key-dialog/key-dialog.component';
import { ScoreDialogComponent } from './dialogs/score-dialog/score-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(public dialog: MatDialog) { }

  getKey(): Promise<KeyDef> {
    const dialogRef = this.dialog.open(KeyDialogComponent, {
      data: {keyDef: { accidentals: 0, count: 0 }},
    });

    return new Promise((resolve, reject) => {
      dialogRef.afterClosed().subscribe(result => {
        //console.log('The dialog was closed');
        if (result && result.keyDef)
          resolve(result.keyDef);
        else
          reject();
      });

    });
  }

  getClef(): Promise<ClefDef> {
    const dialogRef = this.dialog.open(ClefDialogComponent, {
      data: {clefDef: { clefType: ClefType.G, line: 2 }},
    });

    return new Promise((resolve, reject) => {
      dialogRef.afterClosed().subscribe(result => {
        //console.log('The dialog was closed');
        if (result && result.clefDef)
          resolve(result.clefDef);
        else
          reject();
      });

    });
  }
  getMeter(): Promise<RegularMeterDef> {
    const dialogRef = this.dialog.open(MeterDialogComponent, {
      data: {meterDef: { count: 4, value: 4 }},
    });

    return new Promise((resolve, reject) => {
      dialogRef.afterClosed().subscribe(result => {
        //console.log('The dialog was closed');
        if (result && result.meterDef)
          resolve(result.meterDef);
        else
          reject();
      });

    });

  }

  getNewScore(): Promise<ScoreDef> {
    const dialogRef = this.dialog.open(ScoreDialogComponent, {
      data: {scoreDef: { staves: [] }},
    });

    return new Promise((resolve, reject) => {
      dialogRef.afterClosed().subscribe(result => {
        if (result && result.scoreDef)
          resolve(result.scoreDef);
        else
          reject();
      });

    });
  }
}

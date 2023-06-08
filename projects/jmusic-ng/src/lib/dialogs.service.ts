import { Injectable } from '@angular/core';
import { KeyDef, Clef, ClefDef, RegularMeterDef, ClefType, ScoreDef, JMusic, StaffDef, FlexibleSequence } from 'jmusic-model/model';
import { MeterDialogComponent } from './dialogs/meter-dialog/meter-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ClefDialogComponent } from './dialogs/clef-dialog/clef-dialog.component';
import { KeyDialogComponent } from './dialogs/key-dialog/key-dialog.component';

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
    const scoreStr = prompt('Input score def in format Meter Key, clef1 noVoices1, clef2 noVoices2,...()');
    if (!scoreStr) return Promise.reject();
    const [meterKeyDef, ...stavesDef] = scoreStr.split(',');
    const [meterDef, ...keyDef] = meterKeyDef.split(' ');
    const meter = JMusic.makeMeter(meterDef.trim());
    const key = JMusic.makeKey(keyDef.join(' ').trim());

    return Promise.resolve({
        staves: stavesDef.map(sd => {
            const [clefStr, voiceNo] = sd.split(' ');

            return {
                voices: new Array(+voiceNo).map(() => ({ content: new FlexibleSequence('') })),
                initialClef: JMusic.makeClef(clefStr),
                initialKey: key,
                initialMeter: meter
            } as StaffDef;
        })
    });
  }
}

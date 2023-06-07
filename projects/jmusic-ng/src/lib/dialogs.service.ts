import { Injectable } from '@angular/core';
import { KeyDef, ClefDef, RegularMeterDef } from 'jmusic-model/model';
import { MeterDialogComponent } from './dialogs/meter-dialog/meter-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(public dialog: MatDialog) { }

  getKey(): Promise<KeyDef> {
    throw new Error('Method not implemented.');
  }
  getClef(): Promise<ClefDef> {
    throw new Error('Method not implemented.');
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
}

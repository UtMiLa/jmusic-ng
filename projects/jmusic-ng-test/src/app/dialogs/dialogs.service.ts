import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProvider } from 'jmusic-model/dialog/dialog-provider';
import { KeyDef, ClefDef, RegularMeterDef } from 'jmusic-model/model';
import { MeterDialogComponent } from './meter-dialog/meter-dialog.component';

@Injectable()
export class DialogsService implements DialogProvider{

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
        console.log('The dialog was closed');
        if (result && result.meterDef)
          resolve(result.meterDef);
        else
          reject();
      });

    });

  }

}

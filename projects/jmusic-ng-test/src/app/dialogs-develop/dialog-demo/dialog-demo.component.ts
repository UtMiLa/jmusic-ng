import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Clef, ClefDef, ClefType, KeyDef, RegularMeterDef } from 'jmusic-model/model';
import { DialogsService } from 'projects/jmusic-ng/src/lib/dialogs.service';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss'],
})
export class DialogDemoComponent {
  constructor(public dialog: MatDialog, public diaServ: DialogsService) { }

  answer: any;

  demo?: RegularMeterDef;
  clefDemo: ClefDef = Clef.clefTreble.def; //{ clefType: ClefType.G, line: 2 };
  clefDemos: ClefDef[] = [
    Clef.clefTreble.def,
    Clef.clefAlto.def,
    Clef.clefTenor.def,
    Clef.clefTenorC.def,
    Clef.clefBass.def
  ]; //{ clefType: ClefType.G, line: 2 };

  keyDemos: KeyDef[] = [
    { accidental: 1, count: 2 },
    { accidental: 0, count: 0 },
    { accidental: -1, count: 7 },
    { accidental: 1, count: 7 },
  ];

  async openMeterDialog() {
    const meter = await this.diaServ.getMeter();

    if (meter) {
      this.answer = meter;
    }
  }
  async openClefDialog() {
    const meter = await this.diaServ.getClef();

    if (meter) {
      this.answer = meter;
    }
  }
  async openKeyDialog() {
    const meter = await this.diaServ.getKey();

    if (meter) {
      this.answer = meter;
    }
  }
  async openScoreDialog() {
    const score = await this.diaServ.getNewScore();

    if (score) {
      this.answer = score;
    }
  }
}

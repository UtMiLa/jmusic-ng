import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Clef, ClefDef, ClefType, RegularMeterDef } from 'jmusic-model/model';
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

  async openDialog() {
    const meter = await this.diaServ.getMeter();

    if (meter) {
      this.answer = meter;
    }
  }
}

import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { Component, OnInit } from '@angular/core';
import { JMusic, VariableDef, FlexibleItem } from 'jmusic-model/model';
import { tuplets, tupletVars } from '../../demodata/tuplets';
import { MidiInService } from '../midi/midi-in.service';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss']
})
export class WorkbenchComponent implements OnInit {

  constructor(private midiIn: MidiInService) {
    console.log(
     midiIn.midiEventEmitter.subscribe(event => {
      //console.log('MIDI in', event);

     })
     );
  }

  model: JMusic = new JMusic(tuplets, tupletVars);
  insertionPoint = new InsertionPoint(this.model);

  previewModel: JMusic = this.model;

  currentVar?: VariableDef;

  ngOnInit() {
  }

  setSelection(event: VariableDef) {
    if (event) {
      this.currentVar = event;
      if (this.currentVar) this.previewModel = new JMusic({content: [[this.currentVar.value as FlexibleItem]]});
    } else {
      this.currentVar = undefined;
      this.previewModel = this.model;
    }
  //console.log(this.currentVar);
  }

  varChanged(event: VariableDef) {
    //console.log('varChanged', event.id, event.value);

    this.model.vars.setVar(event.id, event.value);
    this.currentVar = (this.model.vars as any).vars.find((v: VariableDef) => v.id === event.id);
    if (this.currentVar) this.previewModel = new JMusic({content: [[this.currentVar.value as FlexibleItem]]});
  }

}

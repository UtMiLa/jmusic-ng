import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JMusic, VariableDef, FlexibleItem } from 'jmusic-model/model';
import { tuplets, tupletVars } from '../../demodata/tuplets';
import { MidiInService } from '../midi/midi-in.service';
import { FinaleSmartEntry } from 'jmusic-model/entry/finale-entry';
import { BaseCommandFactory } from 'jmusic-model/editor/command-factory';
import { Command } from 'jmusic-model/editor/commands';
import { DialogsService } from 'projects/jmusic-ng/src/lib/dialogs.service';
import { koral41 } from '../../demodata/koral41';
import { variablesAndFunctions, variablesAndFunctionsVars } from '../../demodata/variables-and-functions';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss']
})
export class WorkbenchComponent implements OnInit {

  constructor(private midiIn: MidiInService, private cd: ChangeDetectorRef, private dialogSrv: DialogsService) {

    this.midiIn.midiEventEmitter.subscribe(event => {
    console.log('MIDI in', event);

    if (this.eventHandler) {
      if (event.note) {
        if (event.velocity) {
          this.eventHandler.noteDown(event.note);
        } else {
          this.eventHandler.noteUp(event.note);
        }
        //console.log('PIANO note', event);

        //this.pressed[event.note] = !! event.velocity;
        this.cd.detectChanges();
      }
    }

    })

  }

  model: JMusic = new JMusic(variablesAndFunctions, variablesAndFunctionsVars); /*new JMusic(koral41);/*/ //new JMusic(tuplets, tupletVars);
  insertionPoint = new InsertionPoint(this.model);
  eventHandler = new FinaleSmartEntry(new BaseCommandFactory(), { // todo: this should be initialised every time model changes
    execute: (command: Command) => {
      command.execute(this.model);
    }
  }, this.insertionPoint);

  previewModel: JMusic = this.model;

  currentVar?: VariableDef;

  ngOnInit() {
    this.eventHandler.registerDialogProvider(this.dialogSrv);
  }

  setSelection(event: VariableDef) {
    if (event) {
      this.currentVar = event;
      if (this.currentVar) this.previewModel = this.model.getView(this.currentVar.id);// new JMusic({content: [[this.currentVar.value as FlexibleItem]]});
    } else {
      this.currentVar = undefined;
      this.previewModel = this.model;
    }
  //console.log(this.currentVar);
  }

  varChanged(event: VariableDef) {
    //console.log('varChanged', event.id, event.value);

    this.model.setVar(event.id, event.value);
    this.currentVar = (this.model.vars as any).vars.find((v: VariableDef) => v.id === event.id);
    if (this.currentVar) this.previewModel = this.model.getView(this.currentVar.id);//new JMusic({content: [[this.currentVar.value as FlexibleItem]]});
  }

}

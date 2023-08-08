import { contrapunctusVars } from './../../demodata/contrapunctus';
import { longDeco } from './../../demodata/longdeco';
import { meterModel } from './../../demodata/time-changes';
import { stateChanges } from './../../demodata/state-changes';
import { Component, OnInit } from '@angular/core';
//import { NoteType, ClefType, NoteDirection, SimpleSequence, TupletSequence, Rational, RetrogradeSequence, CompositeSequence, JMusic, Score } from 'jmusic-model/model';
//import { ClefType } from 'jmusic-model/src/model/states/clef';

import { NoteType,  NoteDirection, SimpleSequence, TupletSequence, RetrogradeSequence, CompositeSequence, Score, StaffDef, ClefType, Rational, VarDict, Time, AbsoluteTime, JMusic, JMusicSettings, isNote, getDuration } from 'jmusic-model/model';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { MidiPerformer } from 'jmusic-model/midi';
import { accidentalTest } from '../../demodata/accidentalDisplacement';
import { beamModel } from '../../demodata/beaming';
import { koral41 } from '../../demodata/koral41';
import { physBasics } from '../../demodata/physical-basics';
import { physBeaming } from '../../demodata/physical-beaming';
import { tuplets, tupletVars } from '../../demodata/tuplets';
import { repeats } from '../../demodata/repeats';
import { expressions } from '../../demodata/expressions';
import { lyrics } from '../../demodata/lyrics';
import { grace } from '../../demodata/grace';
import { contrapunctus } from '../../demodata/contrapunctus';
import { MidiOutService } from '../midi/midi-out.service';
import { FileIoService } from '../services/file-io.service';
import { ScoreDef } from 'jmusic-model/model';
import { ProjectDef } from 'jmusic-model/model';
import { variablesAndFunctions, variablesAndFunctionsVars } from '../../demodata/variables-and-functions';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private midiOut: MidiOutService, private fileIo: FileIoService) { }

  ngOnInit(): void {
    this.fileIo.listFiles().subscribe(res => this.files = ['', ...res]);
  }

  demos: [string, JMusicSettings | ScoreDef | ProjectDef, VarDict?][] = [
    ['Accidentals', accidentalTest],
    ['Beaming model', beamModel],
    ['Contrapunctus', contrapunctus, contrapunctusVars],
    ['Expressions', expressions],
    ['Grace notes', grace],
    ['Hymn', koral41],
    ['Long decorations', longDeco],
    ['Lyrics', lyrics],
    ['Repeats', repeats],
    ['State changes', stateChanges],
    ['Time model', meterModel],
    ['Tuplets', tuplets, tupletVars],
    ['Variables', variablesAndFunctions, variablesAndFunctionsVars],
  ];

  currentVars?: VarDict;

  setVal(ev: any) {
    console.log(ev, ev.target.value);
    this.currentVars = this.demos.filter(d => d[0] === ev.target.value)[0][2];
    this.tuplets = new JMusic(this.demos.filter(d => d[0] === ev.target.value)[0][1], this.currentVars);
    this.tuplets.onChanged(() => {this.invalidate()});
    this.model = this.tuplets;// === longdeco ? longdeco : undefined;
    this.insertionPoint = new InsertionPoint(this.tuplets);
  }

  private _splitPointNum = 37;
  public get splitPointNum() {
    return this._splitPointNum;
  }
  public set splitPointNum(value) {
    this._splitPointNum = value;
    this.restrictionsBefore.endTime = Time.newAbsolute(this.splitPointNum, this.splitPointDen);
    this.restrictionsAfter.startTime = Time.newAbsolute(this.splitPointNum, this.splitPointDen);
    this.invalidate();
    this.insertionPoint = new InsertionPoint(this.tuplets);
  }

  private _splitPointDen = 8;
  public get splitPointDen() {
    return this._splitPointDen;
  }
  public set splitPointDen(value) {
    this._splitPointDen = value;
    this.restrictionsBefore.endTime = Time.newAbsolute(this.splitPointNum, this.splitPointDen);
    this.restrictionsAfter.startTime = Time.newAbsolute(this.splitPointNum, this.splitPointDen);
    this.invalidate();
    this.insertionPoint = new InsertionPoint(this.tuplets);
  }


  restrictionsBefore = { startTime: Time.StartTime, endTime: Time.newAbsolute(this.splitPointNum, this.splitPointDen) };
  restrictionsAfter = { startTime: Time.newAbsolute(this.splitPointNum, this.splitPointDen), endTime: Time.EternityTime };



  files: string[] = [];
  currentFileName?: string;

  invalidate() {
    this.tuplets = new JMusic(this.tuplets.project); //{...this.tuplets};
  }

  tuplets: JMusic = new JMusic(tuplets, tupletVars);
  model: JMusic | undefined;

   insertionPoint = new InsertionPoint(this.tuplets);



  selectFile(event: Event) {
    this.fileIo.loadFile((event.target as any).value).subscribe((content: any) => {
      console.log(event, content);
      this.model = new JMusic(content, content.variables);
      this.tuplets = this.model;
      this.insertionPoint = new InsertionPoint(this.model);
      this.invalidate();
    });
  }

  saveFile() {
    /*if (this.currentFileName)
    this.fileIo.saveFile(this.currentFileName, this.lyText);*/
  }


   moveRight() {
    this.insertionPoint.moveRight();
    this.invalidate();
   }

   moveLeft() {
    this.insertionPoint.moveLeft();
    this.invalidate();
   }

   moveUp() {
    this.insertionPoint.position++;
    this.invalidate();
   }

   moveDown() {
    this.insertionPoint.position--;
    this.invalidate();
   }

   playMidi() {
    if (this.model) {
      const performer: MidiPerformer = new MidiPerformer();
      (performer.moveCursor as any).subscribe((time: AbsoluteTime) => {
        this.insertionPoint.time = time;
        this.invalidate();
      });
      performer.perform(this.model, this.midiOut);
    }
   }
}

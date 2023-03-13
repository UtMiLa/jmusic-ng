import { longdeco } from './../../demodata/longdeco';
import { meterModel } from './../../demodata/time-changes';
import { stateChanges } from './../../demodata/state-changes';
import { Component, OnInit } from '@angular/core';
//import { NoteType, ClefType, NoteDirection, SimpleSequence, TupletSequence, Rational, RetrogradeSequence, CompositeSequence, JMusic } from 'jmusic-model/model';
//import { ClefType } from 'jmusic-model/src/model/states/clef';

const { NoteType,  NoteDirection, SimpleSequence, TupletSequence, Rational, RetrogradeSequence, CompositeSequence } = require('jmusic-model/model');
import { ScoreDef, StaffDef, ClefType, Time, JMusic, JMusicVars, JMusicSettings } from 'jmusic-model/model';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
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

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  demos: [string, ScoreDef | JMusicSettings, JMusicVars?][] = [
    ['Accidentals', accidentalTest],
    ['Beaming model', beamModel],
    ['Expressions', expressions],
    ['Grace notes', grace],
    ['Hymn', koral41],
    ['Long decorations', longdeco],
    ['Lyrics', lyrics],
    ['Repeats', repeats],
    ['State changes', stateChanges],
    ['Time model', meterModel],
    ['Tuplets', tuplets, tupletVars],
  ];

  currentVars?: JMusicVars;

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

  invalidate() {
    this.tuplets = new JMusic(this.tuplets, this.currentVars); //{...this.tuplets};
  }

  tuplets: JMusic = new JMusic(tuplets, tupletVars);
  model: JMusic | undefined;

   insertionPoint = new InsertionPoint(this.tuplets);

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

}

import { contrapunctusVars } from './../../demodata/contrapunctus';
import { longdeco } from './../../demodata/longdeco';
import { meterModel } from './../../demodata/time-changes';
import { stateChanges } from './../../demodata/state-changes';
import { Component, OnInit } from '@angular/core';
//import { NoteType, ClefType, NoteDirection, SimpleSequence, TupletSequence, Rational, RetrogradeSequence, CompositeSequence, JMusic } from 'jmusic-model/model';
//import { ClefType } from 'jmusic-model/src/model/states/clef';

import { NoteType,  NoteDirection, SimpleSequence, TupletSequence, RetrogradeSequence, CompositeSequence, ScoreDef, StaffDef, ClefType, Rational, Time, JMusic, JMusicVars, JMusicSettings, isNote, getDuration } from 'jmusic-model/model';
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

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private midiOut: MidiOutService) { }

  ngOnInit(): void {

  }

  demos: [string, ScoreDef | JMusicSettings, JMusicVars?][] = [
    ['Accidentals', accidentalTest],
    ['Beaming model', beamModel],
    ['Contrapunctus', contrapunctus, contrapunctusVars],
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

   playMidi() {
    /*this.midiOut.playNote(0, 100, [70, 74], 0, 1000);
    this.midiOut.playNote(0, 100, [58, 65], 0, 2000);
    this.midiOut.playNote(0, 100, [72, 75], 1000, 1000);
    this.midiOut.playNote(0, 100, [74, 77], 2000, 2000);
    this.midiOut.playNote(0, 100, [57, 65], 2000, 2000);*/
    /*const tempo = 2700;
    const percent = 0.9;
    this.model?.staves.forEach(staff => {
      staff.voices.forEach(voice => {
        let startTime = Time.StartTime;
        voice.content.elements.forEach(element => {
          if (isNote(element)) {
            const pitches = element.pitches.map(pitch => pitch.midi);
            this.midiOut.playNote(0, 100, pitches, Rational.value(startTime) * tempo, Rational.value(getDuration(element)) * tempo * percent);
            startTime = Time.addTime(startTime, getDuration(element));
          }
        });
      });
    });*/

    if (this.model) new MidiPerformer().perform(this.model, this.midiOut);

   }
}

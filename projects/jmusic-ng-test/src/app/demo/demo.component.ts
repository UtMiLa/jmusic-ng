import { meterModel } from './../../demodata/time-changes';
import { stateChanges } from './../../demodata/state-changes';
import { Component, OnInit } from '@angular/core';
//import { NoteType,  ClefType, NoteDirection, SimpleSequence, TupletSequence, Rational, RetrogradeSequence, CompositeSequence } from 'jmusic-model/model';
//import { ClefType } from 'jmusic-model/src/model/states/clef';

const { NoteType,  NoteDirection, SimpleSequence, TupletSequence, Rational, RetrogradeSequence, CompositeSequence } = require('jmusic-model/model');
import { ScoreDef, StaffDef, ClefType, Time } from 'jmusic-model/model';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { accidentalTest } from '../../demodata/accidentalDisplacement';
import { beamModel } from '../../demodata/beaming';
import { koral41 } from '../../demodata/koral41';
import { physBasics } from '../../demodata/physical-basics';
import { physBeaming } from '../../demodata/physical-beaming';
import { tuplets } from '../../demodata/tuplets';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  demos: [string, ScoreDef][] = [
    ['Accidentals', accidentalTest],
    ['Beaming model', beamModel],
    ['Hymn', koral41],
    /*['Basic physical', physBasics],
    ['Beaming physical', physBeaming],*/
    ['State changes', stateChanges],
    ['Time model', meterModel],
    ['Tuplets', tuplets],
  ];

  setVal(ev: any) {
    console.log(ev, ev.target.value);
    this.tuplets = this.demos.filter(d => d[0] === ev.target.value)[0][1];
  }

  private _splitPointNum = 37;
  public get splitPointNum() {
    return this._splitPointNum;
  }
  public set splitPointNum(value) {
    this._splitPointNum = value;
    this.restrictionsBefore.endTime = Time.newAbsolute(this.splitPointNum, this.splitPointDen);
    this.restrictionsAfter.startTime = Time.newAbsolute(this.splitPointNum, this.splitPointDen);
    this.tuplets = {...this.tuplets};
  }

  private _splitPointDen = 8;
  public get splitPointDen() {
    return this._splitPointDen;
  }
  public set splitPointDen(value) {
    this._splitPointDen = value;
    this.restrictionsBefore.endTime = Time.newAbsolute(this.splitPointNum, this.splitPointDen);
    this.restrictionsAfter.startTime = Time.newAbsolute(this.splitPointNum, this.splitPointDen);
    this.tuplets = {...this.tuplets};
  }


  restrictionsBefore = { startTime: Time.StartTime, endTime: Time.newAbsolute(this.splitPointNum, this.splitPointDen) };
  restrictionsAfter = { startTime: Time.newAbsolute(this.splitPointNum, this.splitPointDen), endTime: Time.EternityTime };

  tuplets = {
    staves: [{
           initialClef: { clefType: ClefType.G, line: -2 },
           initialMeter: { count: 4, value: 4 },
           initialKey: { accidental: -1, count: 3 },
           voices:[
             {
               noteDirection: NoteDirection.Up,
               content: /*new TupletSequence(
                new SimpleSequence( "c''8 c''8 c''8 c''8 c''8"
                //new SimpleSequence( "c''4 c''4 c''4 c''4 c''4"
               )
               ,
               { numerator: 4, denominator: 5 }
               )*/

               new SimpleSequence( "c\'\'4 c\'\'4 cis\'\'4 c\'\'4")
              },
               {
               noteDirection: NoteDirection.Down,
               content:
               /*new CompositeSequence(
                new RetrogradeSequence(
                  new TupletSequence( new SimpleSequence("c'8 d'8 e'8 f'8 g'8 a'8"), { numerator: 2, denominator: 3 })),
                new SimpleSequence("c'8 d'8 e'8 f'8 g'8 a'8")
              )*/
              new SimpleSequence("c\'8 c\'4 c\'4 c\'4 c\'8")

               //content: new SimpleSequence( "c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8")
           },
           ]
       } as StaffDef,
       {
         initialClef: { clefType: ClefType.F, line: 2 },
         initialMeter: { count: 4, value: 4 },
         initialKey: { accidental: -1, count: 3 },
         voices:[
           {
             noteDirection: NoteDirection.Up,
             //content: new SimpleSequence( "c4 c4 c4 c4 c4 c4 c4 c4 c4 c4"
             content: new SimpleSequence( "c2 c4 c4"
           )}
         ]
     } as StaffDef
     ]
   } as ScoreDef;

   insertionPoint = new InsertionPoint(this.tuplets);

   moveRight() {
    this.insertionPoint.moveRight();
    this.tuplets = {...this.tuplets};
   }

   moveLeft() {
    this.insertionPoint.moveLeft();
    this.tuplets = {...this.tuplets};
   }

}

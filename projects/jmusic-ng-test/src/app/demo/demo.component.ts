import { Component, OnInit } from '@angular/core';
import { NoteType,  ClefType, NoteDirection, SimpleSequence, TupletSequence, Rational, RetrogradeSequence, CompositeSequence } from 'jmusic-model/model';
//import { ClefType } from 'jmusic-model/src/model/states/clef';

//const { NoteType,  ClefType, NoteDirection, SimpleSequence, TupletSequence, Rational, RetrogradeSequence, CompositeSequence } = require('jmusic-model/model');
import { ScoreDef, StaffDef, Time } from 'jmusic-model/model';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tuplets = {
    staves: [{
           initialClef: { clefType: ClefType.G, line: -2 },
           initialMeter: { count: 4, value: 4 },
           initialKey: { accidental: -1, count: 3 },
           voices:[
             {
               noteDirection: NoteDirection.Up,
               content: new TupletSequence(
                new SimpleSequence( "c''8 c''8 c''8 c''8 c''8"
                //new SimpleSequence( "c''4 c''4 c''4 c''4 c''4"
               ),
               { numerator: 4, denominator: 5 }
             )},
               {
               noteDirection: NoteDirection.Down,
               content:
               new CompositeSequence(
                new RetrogradeSequence(
                  new TupletSequence( new SimpleSequence("c'8 d'8 e'8 f'8 g'8 a'8"), { numerator: 2, denominator: 3 })),
                new SimpleSequence("c'8 d'8 e'8 f'8 g'8 a'8")
              )

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
             content: new SimpleSequence( "c4 c4 c4 c4 c4 c4 c4 c4 c4 c4"
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

import { Component, OnInit } from '@angular/core';
import { NoteType, NoteDirection, StaffDef, ClefType, Time, SimpleSequence, TupletSequence, Rational, RetrogradeSequence, CompositeSequence } from '../../../../../../jmusic-model/src/model';
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
   };

}

import { NoteType, NoteDirection, StaffDef, ClefType, Time, SimpleSequence } from 'jmusic-model/model';


export const stateChanges = {
  staves: [{
         initialClef: { clefType: ClefType.G, line: -2 },
         initialMeter: { count: 4, value: 4 },
         initialKey: { accidental: -1, count: 3 },
         voices:[
           {
             noteDirection: NoteDirection.Up,
             content:  "c''1 \\key b \\major c''1 c''1 c''1 \\meter 3/4 c''4 c''4 c''4 d''4 d''4 d''4 e''4 e''4 e''4"
           },
             {
             noteDirection: NoteDirection.Down,
             content:  "c'4 \\clef alto c'4 c'4 c'4 c'1 c'4 \\clef bass c'4 \\clef alto c'4 \\clef treble c'4 c'1 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8"
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
           content:  "c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 \\key f \\major c4 c4 c'1 c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8"
         },
           {
           noteDirection: NoteDirection.Down,
           content: "c,1 c,1 c,1 c,1 c,2. c,2."},
       ]
   } as StaffDef
   ]
 };

import { NoteType, NoteDirection, StaffDef, ClefType, Time, SimpleSequence, TupletSequence, Rational, RetrogradeSequence, CompositeSequence, FlexibleSequence, JMusic, JMusicSettings } from 'jmusic-model/model';

export const tupletVars = {
  scale: ["c'8 d'8 e'8 f'8 g'8 a'8"]
};

export const tuplets = {
  content: [
    [
      [{ function: 'Tuplet', args: ["c''8 c''8 c''8 c''8 c''8"], extraArgs: [{ numerator: 4, denominator: 5 }] }],
      [
        { function: 'Reverse', args: [
          { function: 'Tuplet', args: {variable: 'scale'}, extraArgs: [{ numerator: 2, denominator: 3 }] }
        ] },
        {variable: 'scale'}
      ]
    ],
    ["c4 c4 c4 c4 c4 c4 c4 c4 c4 c4"]
  ],
  clefs: ['treble', 'bass'],
  meter: '4/4',
  key: 'ees \\major'

 } as JMusicSettings;

/*
 export const tuplets = {
  staves: [{
         initialClef: { clefType: ClefType.G, line: -2 },
         initialMeter: { count: 4, value: 4 },
         initialKey: { accidental: -1, count: 3 },
         voices:[
           {
             noteDirection: NoteDirection.Up,
             content: new FlexibleSequence([{ function: 'Tuplet', args: ["c''8 c''8 c''8 c''8 c''8"], extraArgs: [{ numerator: 4, denominator: 5 }] }])
           },
             {
             noteDirection: NoteDirection.Down,
             content:
             new FlexibleSequence([
              { function: 'Reverse', args: [
                { function: 'Tuplet', args: ["c'8 d'8 e'8 f'8 g'8 a'8"], extraArgs: [{ numerator: 2, denominator: 3 }] }
              ] },
              "c'8 d'8 e'8 f'8 g'8 a'8"
            ])
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
           content: new FlexibleSequence( "c4 c4 c4 c4 c4 c4 c4 c4 c4 c4"
         )}
       ]
   } as StaffDef
   ]
 };
*/

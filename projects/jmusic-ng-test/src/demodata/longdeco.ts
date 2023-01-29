import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { NoteType, NoteDirection, StaffDef, ClefType, Time, SimpleSequence, JMusic } from 'jmusic-model/model';
import { LongDecorationType } from 'jmusic-model/model/decorations/decoration-type';


export const longdeco = new JMusic({
  content: [["c'8 d'16 e'16 f'4 g'4 c''8 d''16 e''16 f''4 g''4 f''4 f''4"]],
  meter: '4/4'
});
const ins = new InsertionPoint(longdeco);
ins.time = Time.fromStart(Time.QuarterTime);
longdeco.addLongDecoration(LongDecorationType.Crescendo, ins, Time.newSpan(3, 4));
longdeco.addLongDecoration(LongDecorationType.Slur, ins, Time.newSpan(1, 1));

ins.time = Time.fromStart(Time.WholeTime);
longdeco.addLongDecoration(LongDecorationType.Decrescendo, ins, Time.HalfTime);

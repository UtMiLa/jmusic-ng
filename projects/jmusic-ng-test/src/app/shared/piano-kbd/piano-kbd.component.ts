import { MidiService } from './../../midi/midi.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pitch } from 'jmusic-model/model';
import { MidiInService } from '../../midi/midi-in.service';

@Component({
  selector: 'app-piano-kbd',
  templateUrl: './piano-kbd.component.html',
  styleUrls: ['./piano-kbd.component.scss']
})
export class PianoKbdComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef, private midi: MidiInService) { }


  items = [] as any[];
  tgWidth = 30;
  chords = [] as any[];
  currentLength = 0;
  pressed = [] as boolean[];

  // @Input() status: ScoreStatusManager = new ScoreStatusManager(this.globalContext);
  /*get status(): ScoreStatusManager {
    return this.musicIoService.status;
  }*/

  chordToString(chord: Pitch[]) {
    return '<' + chord.map(p => JSON.stringify(p)).join(' ') + '>';
  }

  lengthToString(length: number): string {
    switch (length) {
      case 0:
        return '4';
      case 1:
        return '2';
      case 2:
        return '2.';
      case 3:
        return '1';
      default:
        return '1.';
    }
  }

  tap() {
    this.currentLength++;
    // console.log("tapping", this.currentLength);
  }

  ngOnInit() {
    this.midi.midiEventEmitter.subscribe(event => {
      //console.log('PIANO msg', event);
      if (event.note) {
        //console.log('PIANO note', event);

        this.pressed[event.note] = !! event.velocity;
        this.cd.detectChanges();
      }
    });
    /*this.musicIoService.chordReleased.subscribe((event) => {
      // console.log(event);
      this.chords.push({
        chord: event.sort().map(n => Pitch.createFromMidi(n)),
        length: this.currentLength
      });
      this.currentLength = 0;
      this.cd.detectChanges();
    });


    this.musicIoService.musicChanged.subscribe((event) => {
      if (event.velocity > 0 && this.currentLength && this.musicIoService.status.notesPressed.length === 1) {
        this.chords.push({ chord: [], length: this.currentLength });
        this.currentLength = 0;
        this.cd.detectChanges();
      }
    });

    this.musicIoService.controlChanged.subscribe((event) => {
      // console.log('controlChanged', event);
      if (event.controller === 64) {
        // left pedal
        if (event.value === 0) {
          this.tap();
          this.cd.detectChanges();
        }
      } else if (event.controller === 67) {
        // right pedal
      }
    });*/

    const tgSpacing = this.tgWidth * 7 / 12;
    for (let i = 21; i < 109; i++) {
        const det = ((i + 7) * 7) % 12;
        const className = 'bw' + det;
        const left = (det < 7) ? (i - 21 - det / 7) * tgSpacing : (i - 21 - (det - 8) / 7) * tgSpacing;
        const bw = det >= 7 ? 'bw-black' : 'bw-white';

        this.items.push({det, className, left: left + 'px', bw, i});
        this.pressed.push(false);
    }
  }
  upDown(item: any) {
    const up = !this.pressed[item.i]; // !this.status.notesPressed.some((value) => item.i === value.toMidi() );
    return up ? 'up' : 'down';
  }

  notePressed(i: number) {
    //this.status.pressNoteKey(Pitch.createFromMidi(i));
  }
  noteReleased(i: number) {
    //this.status.releaseNoteKey(Pitch.createFromMidi(i));
  }

}

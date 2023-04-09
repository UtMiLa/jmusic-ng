import { EventEmitter, Injectable } from '@angular/core';
import { IMidiEvent } from './midi-in.service';

@Injectable({
  providedIn: 'root'
})
export class MidiOutService {

  outputs?: WebMidi.MIDIOutputMap;

  constructor() {
    this.midiEventEmitter = new EventEmitter<IMidiEvent>();
    this.midiSysEventEmitter = new EventEmitter<IMidiEvent>();
    this.midiMessageEventEmitter = new EventEmitter<IMidiEvent>();
    this.midiCtlEventEmitter = new EventEmitter<IMidiEvent>();

    if (navigator.requestMIDIAccess) {
      console.log('This browser supports WebMIDI!');


      navigator.requestMIDIAccess()
    .then(
      (midiAccess) => {
        //console.log(midiAccess);

        //const outputs = midiAccess.outputs;
        this.outputs = midiAccess.outputs;

        /*outputs.forEach((element: WebMidi.MIDIOutput) => {
          //console.log(element);
          const output = new easymidi.Output(element);
          this.outputs..push({id: element, dev: output});
        });*/

      },
      () => {
        console.log('Could not access your MIDI devices.');
      });

} else {
    console.log('WebMIDI is not supported in this browser.');
    return;
}

}


// outputs = [];

midiEventEmitter: EventEmitter<IMidiEvent>;

midiSysEventEmitter: EventEmitter<IMidiEvent>;

midiMessageEventEmitter: EventEmitter<IMidiEvent>;

midiCtlEventEmitter: EventEmitter<IMidiEvent>;


sendMidi(cmd: string, data: IMidiEvent & {command: number, note: number, velocity: number}, timestamp?: number) {
  const packedData = new Uint8Array([data.channel | data.command, data.note, data.velocity]);
  this.outputs?.forEach((output: WebMidi.MIDIOutput, key: string) => {
    console.log('sending to ' + output.name, packedData,  timestamp);

    output.send([data.channel | data.command, data.note, data.velocity], timestamp);
  });
}

playNote(channel: number, velocity: number, notes: number[], startTime: number, duration: number) {
  const timeNow = window.performance.now() + startTime;
  notes.forEach(note => this.sendMidi('', {command: 0x90, channel, velocity, note}, timeNow));
  notes.forEach(note => this.sendMidi('', {command: 0x90, channel, velocity: 0, note}, timeNow + duration) );

}

getOutputs() {
  return this.outputs;
}

}

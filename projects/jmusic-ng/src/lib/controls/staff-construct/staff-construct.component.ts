import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StaffDef, ClefDef, Clef, FlexibleSequence, VoiceDef } from 'jmusic-model/model';

@Component({
  selector: 'mus-staff-construct',
  templateUrl: './staff-construct.component.html',
  styleUrls: ['./staff-construct.component.scss']
})
export class StaffConstructComponent implements OnInit {

  constructor() { }

  @Input()
  staffDef: StaffDef = { voices: [], initialClef: Clef.clefTreble.def, initialKey: { accidental:0, count: 0} };

  @Output()
  staffDefChange = new EventEmitter<StaffDef>();


  voices: VoiceDef[] = [];

  ngOnInit(): void {
  }

  addVoice() {
    this.voices.push({contentDef: 'c4'});
    //this.voices = [...this.voices, ({content: new FlexibleSequence('c4')})];
  }
}

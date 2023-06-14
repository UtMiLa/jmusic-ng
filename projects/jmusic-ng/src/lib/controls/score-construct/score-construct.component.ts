import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Clef, ScoreDef, StaffDef } from 'jmusic-model/model';


@Component({
  selector: 'mus-score-construct',
  templateUrl: './score-construct.component.html',
  styleUrls: ['./score-construct.component.scss']
})
export class ScoreConstructComponent implements OnInit {

  constructor() { }

  @Input()
  scoreDef?: ScoreDef;

  @Output()
  scoreDefChange = new EventEmitter<ScoreDef>;

  staves: StaffDef[] = [];

  ngOnInit(): void {
  }

  addStaff() {
    this.staves.push({ voices: [], initialClef: Clef.clefTreble.def, initialKey: { count: 0, accidental: 0 } });
  }
}

import { Clef, FlexibleSequence, KeyDef, Score, scoreDefToScore } from 'jmusic-model/model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ControlsModule } from '../../controls/controls.module';

@Component({
  selector: 'mus-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, ControlsModule]
})
export class ScoreDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ScoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public keyDef: KeyDef) { }

  ngOnInit(): void {
  }

  scoreDef: Score = scoreDefToScore({
    staves: [
      {
        voices: [{
          contentDef: 'c\'\'4.'
        }],
        initialClef: Clef.clefTreble.def,
        initialKey: { accidental: 0, count: 0 },
        initialMeter: { count: 6, value: 8 }
      }
    ]
  })

  isLegal(): boolean {
    return !!this.scoreDef;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}

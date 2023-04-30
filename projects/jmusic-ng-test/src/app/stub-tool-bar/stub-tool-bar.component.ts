import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { JMusic, Pitch } from 'jmusic-model/model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stub-tool-bar',
  templateUrl: './stub-tool-bar.component.html',
  styleUrls: ['./stub-tool-bar.component.scss']
})
export class StubToolBarComponent implements OnInit {

  constructor() { }

  @Input()
  model: JMusic | undefined;

  @Input()
  insertionPoint: InsertionPoint | undefined;

  ngOnInit(): void {
  }

  setPitch() {
    //console.log((this.model, this.insertionPoint));

    if (this.model && this.insertionPoint)
      this.model.addPitch(this.insertionPoint);
  }

  enharmonicPitch() {
    //console.log((this.model, this.insertionPoint));

    if (this.model && this.insertionPoint)
      this.model.changePitchEnharm(this.insertionPoint);
  }


  alterPitch(amount: number) {
    //console.log((this.model, this.insertionPoint));

    if (this.model && this.insertionPoint)
      this.model.alterPitch(this.insertionPoint, amount);
  }


  setMeter() {
    console.log((this.model, this.insertionPoint));
    if (this.model && this.insertionPoint) {

      const mDef = prompt('Input meter string (e.g. 3/4)');
      if (mDef) {
        this.model.addMeterChg(this.insertionPoint, mDef);
      }
    }
  }

}

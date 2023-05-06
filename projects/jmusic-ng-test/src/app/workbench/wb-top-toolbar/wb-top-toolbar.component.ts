import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { Component, Input, OnInit } from '@angular/core';
import { JMusic, Time, getDottedValue, getUndottedValue, getDotNumber, Rational } from 'jmusic-model/model';

@Component({
  selector: 'app-wb-top-toolbar',
  templateUrl: './wb-top-toolbar.component.html',
  styleUrls: ['./wb-top-toolbar.component.scss']
})
export class WbTopToolbarComponent implements OnInit {

  constructor() { }

  @Input()
  model: JMusic | undefined;

  @Input()
  insertionPoint: InsertionPoint | undefined;


  ngOnInit() {
  }

  deleteNote() {
    if (this.model && this.insertionPoint)
      this.model.deleteNote(this.insertionPoint);
  }

  setPitch() {
    //console.log((this.model, this.insertionPoint));

    if (this.model && this.insertionPoint)
      this.model.addPitch(this.insertionPoint);
  }

  removePitch() {
    //console.log((this.model, this.insertionPoint));

    if (this.model && this.insertionPoint)
      this.model.removePitch(this.insertionPoint);
  }

  setDuration(denominator: number) {
    if (this.model && this.insertionPoint)
      this.model.setNoteValue(this.insertionPoint, Time.newSpan(1, denominator));
  }

  setDot() {
    if (this.model && this.insertionPoint) {
      const note = this.model.noteFromInsertionPoint(this.insertionPoint);

      const dots = getDotNumber(note.nominalDuration);
      const undotted = getUndottedValue(note.nominalDuration);
      const newDuration = getDottedValue(undotted, (dots + 1) % 4);

      this.model.setNoteValue(this.insertionPoint, newDuration);
    }
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

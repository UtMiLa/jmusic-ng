import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { EventHandler, BaseEventHandler } from 'jmusic-model/editor/event-handler';
import { Component, Input, OnInit } from '@angular/core';
import { JMusic, Time, getDottedValue, getUndottedValue, getDotNumber, Rational } from 'jmusic-model/model';
import { BaseCommandFactory } from 'jmusic-model/editor/command-factory';
import { Command } from 'jmusic-model/editor/commands';

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

  @Input()
  eventHandler: EventHandler | undefined;

  ngOnInit() {
  }

  deleteNote() {
    if (this.eventHandler) {
      this.eventHandler.actionSelected('DeleteNote');
    }
  }

  setPitch() {
    //console.log((this.model, this.insertionPoint));

    if (this.model && this.insertionPoint)
      this.model.addPitch(this.insertionPoint);
  }

  removePitch() {
    if (this.eventHandler) {
      this.eventHandler.actionSelected('DeletePitch');
    }
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
    //console.log((this.model, this.insertionPoint));
    if (this.model && this.insertionPoint) {

      const mDef = prompt('Input meter string (e.g. 3/4)');
      if (mDef) {
        this.model.addMeterChg(this.insertionPoint, mDef);
      }
    }
  }

  setKey() {
    //console.log((this.model, this.insertionPoint));
    if (this.model && this.insertionPoint) {

      const kDef = prompt('Input key string (e.g. bes major)');
      if (kDef) {
        this.model.addKeyChg(this.insertionPoint, kDef);
      }
    }
  }

  setClef() {
    //console.log((this.model, this.insertionPoint));
    if (this.model && this.insertionPoint) {

      const cDef = prompt('Input clef string (e.g. treble or bass)');
      if (cDef) {
        this.model.addClefChg(this.insertionPoint, cDef);
      }
    }
  }


}

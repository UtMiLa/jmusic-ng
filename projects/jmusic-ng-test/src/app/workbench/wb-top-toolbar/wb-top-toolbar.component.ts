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
  eventHandler: EventHandler | undefined;

  ngOnInit() {
  }

  deleteNote() {
    if (this.eventHandler) {
      this.eventHandler.actionSelected('DeleteNote');
    }
  }

  setPitch() {
    if (this.eventHandler) {
      this.eventHandler.actionSelected('SetPitch');
    }
  }

  removePitch() {
    if (this.eventHandler) {
      this.eventHandler.actionSelected('DeletePitch');
    }
  }

  setDuration(denominator: number) {
    if (this.eventHandler) {
      this.eventHandler.actionSelected('SetDuration', [Time.newSpan(1, denominator)]);
    }
  }

  setDot() {
    if (this.eventHandler) {
      this.eventHandler.actionSelected('SetDot');
    }
  }

  enharmonicPitch() {
    if (this.eventHandler) {
      this.eventHandler.actionSelected('EnharmPitch');
    }
  }

  alterPitch(amount: number) {
    if (this.eventHandler) {
      this.eventHandler.actionSelected('AlterPitch', [amount]);
    }
  }

  setMeter() {
    if (this.eventHandler) {
      const mDef = prompt('Input meter string (e.g. 3/4)');
      if (mDef) {
        this.eventHandler.actionSelected('SetMeter', [mDef]);
      }
    }
  }

  setKey() {
    if (this.eventHandler) {
      const kDef = prompt('Input key string (e.g. bes major)');
      if (kDef) {
        this.eventHandler.actionSelected('SetKey', [kDef]);
      }
    }
  }

  setClef() {
    if (this.eventHandler) {
      const cDef = prompt('Input clef string (e.g. treble or bass)');
      if (cDef) {
        this.eventHandler.actionSelected('SetClef', [cDef]);
      }
    }
  }


}

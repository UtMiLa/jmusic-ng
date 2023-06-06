import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { EventHandler } from 'jmusic-model/editor/event-handler';
import { Component, Input, OnInit } from '@angular/core';
import { JMusic, Time, getDottedValue, getUndottedValue, getDotNumber, Rational } from 'jmusic-model/model';
import { BaseCommandFactory } from 'jmusic-model/editor/command-factory';
import { Command } from 'jmusic-model/editor/commands';
import { DialogProvider } from 'jmusic-model/dialog/dialog-provider';
import { BrowserPromptDialogProvider } from 'jmusic-model/dialog/browser-prompt-dialog-provider';
import { DialogsService } from '../../dialogs/dialogs.service';

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
      this.eventHandler.actionSelected('SetMeter', [{ placeholder: 'meter' }]);
    }
  }

  setKey() {
    if (this.eventHandler) {
      this.eventHandler.actionSelected('SetKey', [{ placeholder: 'key' }]);
    }
  }

  setClef() {
    if (this.eventHandler) {
      this.eventHandler.actionSelected('SetClef', [{ placeholder: 'clef' }]);
    }
  }


  newFile() {
    this.eventHandler?.actionSelected('NewFile');
  }

  unsupported() {}
}

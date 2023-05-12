import { FlexibleItem, JMusic, VariableDef } from 'jmusic-model/model';
import { Component, Input, OnInit } from '@angular/core';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { EventHandler } from 'jmusic-model/editor/event-handler';

@Component({
  selector: 'app-wb-preview',
  templateUrl: './wb-preview.component.html',
  styleUrls: ['./wb-preview.component.scss']
})
export class WbPreviewComponent implements OnInit {

  constructor() { }

  @Input()
  eventHandler?: EventHandler;

  private _model?: JMusic | undefined;
  @Input()
  public get model(): JMusic | undefined {
    return this._model;
  }
  public set model(value: JMusic | undefined) {
    this._model = value;
    /*if (value)
      this.insertionPoint = new InsertionPoint(value);*/
    //if (value) this.score = new JMusic({content: [[value.value as FlexibleItem]]});
  }

  @Input()
  insertionPoint?: InsertionPoint;

  ngOnInit() {
  }

}

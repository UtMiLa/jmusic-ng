import { FlexibleItem, JMusic, VariableDef, EditableView } from 'jmusic-model/model';
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

  private _model?: EditableView | undefined;
  @Input()
  public get model(): EditableView | undefined {
    return this._model;
  }
  public set model(value: EditableView | undefined) {
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

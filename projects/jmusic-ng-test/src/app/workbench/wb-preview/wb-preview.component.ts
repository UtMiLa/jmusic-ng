import { FlexibleItem, JMusic, VariableDef } from 'jmusic-model/model';
import { Component, Input, OnInit } from '@angular/core';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';

@Component({
  selector: 'app-wb-preview',
  templateUrl: './wb-preview.component.html',
  styleUrls: ['./wb-preview.component.scss']
})
export class WbPreviewComponent implements OnInit {

  constructor() { }

  private _model?: VariableDef | undefined;
  @Input()
  public get model(): VariableDef | undefined {
    return this._model;
  }
  public set model(value: VariableDef | undefined) {
    this._model = value;
    if (value) this.score = new JMusic({content: [[value.value as FlexibleItem]]});
  }

  score?: JMusic;

  insertionPoint?: InsertionPoint;

  ngOnInit() {
  }

}

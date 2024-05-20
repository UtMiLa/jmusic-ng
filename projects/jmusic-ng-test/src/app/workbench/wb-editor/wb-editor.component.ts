import { EventHandler } from 'jmusic-model/editor/event-handler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlexibleSequence, VariableDef, FlexibleItem, SequenceDef } from 'jmusic-model/model';
import { TextCommandEngine } from 'jmusic-model/editor/text-command-engine';

@Component({
  selector: 'app-wb-editor',
  templateUrl: './wb-editor.component.html',
  styleUrls: ['./wb-editor.component.scss']
})
export class WbEditorComponent implements OnInit {

  constructor() { }

  private _model?: VariableDef | undefined;
  @Input()
  public get model(): VariableDef | undefined {
    return this._model;
  }
  public set model(value: VariableDef | undefined) {
    this._model = value;
    if (value?.value) {
      this._value = JSON.stringify(value.value);
    } else {
      this._value = '';
    }
  }

  @Input()
  eventHandler?: EventHandler;

  private _value: string = '';
  public get value(): string {
    return this._value;
  }
  public set value(value: string) {
    //console.log('set', this.model, this.value, value);
    if (this._value !== value) {
      this._value = value;
      //console.log(this.model, this.value);
      this.changed();
    }
  }

  @Output()
  varChange = new EventEmitter<VariableDef>();

  ngOnInit() {
  }

  changed() {
    //console.log(this.model, this.value);

    try {
      const obj = JSON.parse(this.value) as FlexibleItem[];
      const test = new FlexibleSequence(obj);
      //this.model = {id: this.model?.id as string, value: obj};

      this.varChange.emit({id: this.model?.id as string, value: obj as SequenceDef});//todo: check this
    } catch (_) {
      console.log(_);
    }
  }

}

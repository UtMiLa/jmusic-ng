import { JMusic, VariableDef } from 'jmusic-model/model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wb-var-list',
  templateUrl: './wb-var-list.component.html',
  styleUrls: ['./wb-var-list.component.scss']
})
export class WbVarListComponent implements OnInit {

  constructor() { }

  @Input()
  model?: JMusic;

  @Output()
  selected = new EventEmitter<VariableDef>;

  _selected?: VariableDef;

  ngOnInit() {
  }

  get variables(): VariableDef[] {
    return (this.model?.vars as any).vars;
  }


  select(v: VariableDef | undefined) {
    this.selected.emit(v);
    this._selected = v;
  }
}

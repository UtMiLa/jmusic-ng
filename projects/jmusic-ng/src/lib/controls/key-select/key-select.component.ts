import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiatonicKeyDef } from 'jmusic-model/model';

@Component({
  selector: 'mus-key-select',
  templateUrl: './key-select.component.html',
  styleUrls: ['./key-select.component.scss'],
})
export class KeySelectComponent {
  keys: DiatonicKeyDef[] = [
    {accidental: 0, count: 0},
    {accidental: 1, count: 1},
    {accidental: 1, count: 2},
    {accidental: 1, count: 3},
    {accidental: 1, count: 4},
    {accidental: 1, count: 5},
    {accidental: 1, count: 6},
    {accidental: 1, count: 7},
    {accidental: -1, count: 1},
    {accidental: -1, count: 2},
    {accidental: -1, count: 3},
    {accidental: -1, count: 4},
    {accidental: -1, count: 5},
    {accidental: -1, count: 6},
    {accidental: -1, count: 7},
  ];


  @Input()
  selected: DiatonicKeyDef = this.keys[0];

  @Output()
  selectedChange = new EventEmitter<DiatonicKeyDef>();

  ngOnInit(): void {
  }

  selChange() {
    this.selectedChange.emit(this.selected);
  }
}

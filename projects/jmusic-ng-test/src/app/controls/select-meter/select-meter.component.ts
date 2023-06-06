import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegularMeterDef } from 'jmusic-model/model';

@Component({
  selector: 'app-select-meter',
  templateUrl: './select-meter.component.html',
  styleUrls: ['./select-meter.component.css']
})
export class SelectMeterComponent implements OnInit {

  constructor() { }

  private _selected?: RegularMeterDef | undefined;
  @Input()
  public get selected(): RegularMeterDef | undefined {
    return this._selected;
  }
  public set selected(value: RegularMeterDef | undefined) {
    this._selected = value;
    console.log('selected', value);

    this.selectedString = value ? this.meterDefToString(value) : '';
  }

  private _selectedString = 'undefined';
  public get selectedString(): string {
    return this._selectedString;
  }
  public set selectedString(value: string) {
    if (this._selectedString !== value) {
      console.log('selectedString', value);
      this._selected = value ? JSON.parse(value) : undefined;
      this.selectedChange.emit(this._selected);
    }
    this._selectedString = value;
  }

  @Output()
  selectedChange = new EventEmitter<RegularMeterDef>();

  meterDefs: RegularMeterDef[] = [
    { count: 2, value: 2 },
    { count: 2, value: 4 },
    { count: 3, value: 4 },
    { count: 4, value: 4 },
    { count: 6, value: 8 },
  ];

  ngOnInit() {
  }

  meterDefToString(meterDef: RegularMeterDef): string {
    return JSON.stringify(meterDef);
  }

}

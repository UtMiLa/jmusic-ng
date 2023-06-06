import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegularMeterDef } from 'jmusic-model/model';

@Component({
  selector: 'app-construct-regular-meter',
  templateUrl: './construct-regular-meter.component.html',
  styleUrls: ['./construct-regular-meter.component.scss']
})
export class ConstructRegularMeterComponent implements OnInit {

  constructor() { }

  private _meterDef?: RegularMeterDef | undefined;
  @Input()
  public get meterDef(): RegularMeterDef | undefined {
    return this._meterDef;
  }
  public set meterDef(value: RegularMeterDef | undefined) {
    this._meterDef = value;
    if (value) {
      this._denominator = ''+value?.value;
      this._numerator = ''+value?.count;
    } else {
      this._denominator = '';
      this._numerator = '';
    }
  }

  @Output()
  public meterDefChange = new EventEmitter<RegularMeterDef>();

  private _denominator?: string;
  public get denominator() {
    return this._denominator;
  }
  public set denominator(value) {
    this._denominator = value;
    if (value) {
      if (this.meterDef) {
        this.meterDef.value = +value;
      } else {
        this.meterDef =  {count: +value, value: +value};
      }
      this.meterDefChange.emit({count: this.meterDef.count, value: this.meterDef.value});
    }
    //if (this._denominator && this._numerator) this._selected = `${this._numerator}/${this._denominator}`;
  }
  private _numerator?: string;
  public get numerator() {
    return this._numerator;
  }
  public set numerator(value) {
    this._numerator = value;
    if (value) {
      if (this.meterDef) {
      this.meterDef.count = +value;
      } else {
        this.meterDef =  {count: +value, value: 4};
      }
      this.meterDefChange.emit({count: this.meterDef.count, value: this.meterDef.value});
    }
    //if (this._denominator && this._numerator) this._selected = `${this._numerator}/${this._denominator}`;
  }

  ngOnInit() {
  }

}

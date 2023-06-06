import { Component, Input, OnInit } from '@angular/core';
import { RegularMeterDef } from 'jmusic-model/model';

@Component({
  selector: 'mus-meter-display',
  templateUrl: './meter-display.component.html',
  styleUrls: ['./meter-display.component.scss']
})
export class MeterDisplayComponent implements OnInit {

  constructor() { }

  @Input()
  meterDef?: RegularMeterDef;

  ngOnInit() {
  }

}

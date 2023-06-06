import { Component, Input, OnInit } from '@angular/core';
import { RegularMeterDef } from 'jmusic-model/model';

@Component({
  selector: 'app-display-meter',
  templateUrl: './display-meter.component.html',
  styleUrls: ['./display-meter.component.scss']
})
export class DisplayMeterComponent implements OnInit {

  constructor() { }

  @Input()
  meterDef?: RegularMeterDef;

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Clef, ClefDef } from 'jmusic-model/model';

@Component({
  selector: 'mus-clef-select',
  templateUrl: './clef-select.component.html',
  styleUrls: ['./clef-select.component.scss']
})
export class ClefSelectComponent implements OnInit {

  constructor() { }


  clefs: ClefDef[] = [
    Clef.clefTreble.def,
    Clef.clefAlto.def,
    Clef.clefTenor.def,
    Clef.clefTenorC.def,
    Clef.clefBass.def
  ];

  @Input()
  selected: ClefDef = this.clefs[0];

  @Output()
  selectedChange = new EventEmitter<ClefDef>();

  ngOnInit(): void {
  }

  selChange() {
    this.selectedChange.emit(this.selected);
  }
}

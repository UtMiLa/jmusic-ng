import { Component, OnInit } from '@angular/core';
import { Clef, ClefDef } from 'jmusic-model/model';

@Component({
  selector: 'mus-clef-select',
  templateUrl: './clef-select.component.html',
  styleUrls: ['./clef-select.component.css']
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

  selectedString: string = '';

  ngOnInit(): void {
  }

}

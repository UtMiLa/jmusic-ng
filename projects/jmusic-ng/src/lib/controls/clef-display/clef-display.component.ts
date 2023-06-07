import { Component, Input } from '@angular/core';
import { ClefDef, ClefType } from 'jmusic-model/model';

@Component({
  selector: 'mus-clef-display',
  templateUrl: './clef-display.component.html',
  styleUrls: ['./clef-display.component.css'],
})
export class ClefDisplayComponent {



  private _clefDef: ClefDef = { clefType: ClefType.G, line: 2 };
  @Input()
  public get clefDef(): ClefDef {
    return this._clefDef;
  }
  public set clefDef(value: ClefDef) {
    this._clefDef = value;
    this.phys.elements[5] = {
      "position": {
        "x": 8,
        "y": -18 + 3 * value.line
      },
      "glyph": "clefs.G"
    };

    switch(value.clefType) {
      case ClefType.C: this.phys.elements[5].glyph = 'clefs.C'; break;
      case ClefType.F: this.phys.elements[5].glyph = 'clefs.F'; break;
      case ClefType.G: this.phys.elements[5].glyph = 'clefs.G'; break;
      case ClefType.G8: this.phys.elements[5].glyph = 'clefs.G'; break;
    }
  }

  phys = {elements: [

    {
      "element": 1,
      "position": {
        "x": 0,
        "y": -6
      },
      "length": 30
    },
    {
      "element": 1,
      "position": {
        "x": 0,
        "y": -12
      },
      "length": 30
    },
    {
      "element": 1,
      "position": {
        "x": 0,
        "y": -18
      },
      "length": 30
    },
    {
      "element": 1,
      "position": {
        "x": 0,
        "y": -24
      },
      "length": 30
    },
    {
      "element": 1,
      "position": {
        "x": 0,
        "y": -30
      },
      "length": 30
    },
    {
      "position": {
        "x": 8,
        "y": -24
      },
      "glyph": "clefs.G"
    },
  ]};


}

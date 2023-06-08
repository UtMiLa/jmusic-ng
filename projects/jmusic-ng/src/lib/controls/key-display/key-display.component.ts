import { Component, Input } from '@angular/core';
import { keyToView } from 'jmusic-model/logical-view';
import { Clef, Key, KeyDef } from 'jmusic-model/model';

@Component({
  selector: 'mus-key-display',
  templateUrl: './key-display.component.html',
  styleUrls: ['./key-display.component.scss'],
})
export class KeyDisplayComponent {

  private _keyDef: KeyDef = { accidental: 1, count: 1 };
  @Input()
  public get keyDef(): KeyDef {
    return this._keyDef;
  }
  public set keyDef(value: KeyDef) {
    this._keyDef = value;
    this.setPhys();

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





  private setPhys() {
    const key = new Key(this._keyDef);
    const clef = Clef.clefTreble;
    const keyView = keyToView(key, clef);
    this.phys = { elements: [] };


    const glyph = this._keyDef.accidental > 0 ? "accidentals.2" : "accidentals.M2";
    const startPitch = this._keyDef.accidental > 0 ? -6 : -18;
    const pitchStep = -this._keyDef.accidental * 9;
    for (let i = 0; i < 5; i++) {
      this.phys.elements[i] = {
        "element": 1,
        "position": {
          "x": 0,
          "y": -6 - 6 * i
        },
        "length": 12 + 6 * this._keyDef.count
      };

    }

    keyView.keyPositions.forEach((kp, i) => {
      this.phys.elements[5 + i] = {
        "glyph": glyph,
        "position": {
          "x": 6 + i * 6,
          "y": kp.position * 3 - 18//startPitch + i * pitchStep
        }
      };

    });

  }
}

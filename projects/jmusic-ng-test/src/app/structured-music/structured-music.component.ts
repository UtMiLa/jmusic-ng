import { Score } from 'jmusic-model/model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-structured-music',
  templateUrl: './structured-music.component.html',
  styleUrls: ['./structured-music.component.scss']
})
export class StructuredMusicComponent implements OnInit {

  constructor() { }

  private _scoreDef: Score | undefined;
  @Input()
  public get scoreDef(): Score | undefined {
    return this._scoreDef;
  }
  public set scoreDef(value: Score | undefined) {
    this._scoreDef = value;
    //this.render();
  }

  ngOnInit(): void {
  }

}

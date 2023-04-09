import { koral41 } from './../../../demodata/koral41';
import { JMusic } from 'jmusic-model/model';
import { Component, OnInit } from '@angular/core';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { lilypondToJMusic } from 'jmusic-lilypond/import-lilypond';

@Component({
  selector: 'app-ly-page',
  templateUrl: './ly-page.component.html',
  styleUrls: ['./ly-page.component.scss']
})
export class LyPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model?: JMusic;

  insertionPoint?: InsertionPoint;

  private _lyText = '';
  public get lyText() {
    return this._lyText;
  }
  public set lyText(value) {
    if (this._lyText !== value) {
      this._lyText = value;
      try {
        const score = lilypondToJMusic(this.lyText);
        //console.log(score);
        this.model = new JMusic(score);
        this.insertionPoint = new InsertionPoint(this.model);
        //this.invalidate();
      } catch (e) {
        console.log(e);
      }
    }
  }

  invalidate() {
    //
  }
}

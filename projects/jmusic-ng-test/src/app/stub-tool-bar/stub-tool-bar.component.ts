import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { JMusic, Pitch } from 'jmusic-model/model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stub-tool-bar',
  templateUrl: './stub-tool-bar.component.html',
  styleUrls: ['./stub-tool-bar.component.scss']
})
export class StubToolBarComponent implements OnInit {

  constructor() { }

  @Input()
  model: JMusic | undefined;

  @Input()
  insertionPoint: InsertionPoint | undefined;

  ngOnInit(): void {
  }

  setPitch() {
    console.log((this.model, this.insertionPoint));

    if (this.model && this.insertionPoint)
      this.model.addPitch(this.insertionPoint);
  }

}

import { Component, OnInit } from '@angular/core';
import { JMusic, VariableDef } from 'jmusic-model/model';
import { tuplets, tupletVars } from '../../demodata/tuplets';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss']
})
export class WorkbenchComponent implements OnInit {

  constructor() { }

  model: JMusic = new JMusic(tuplets, tupletVars);

  currentVar?: VariableDef;

  ngOnInit() {
  }

  setSelection(event: VariableDef) {
    this.currentVar = event;
    console.log(this.currentVar);

  }

}

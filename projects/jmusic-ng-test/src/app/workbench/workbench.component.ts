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
    //console.log(this.currentVar);
  }

  varChanged(event: VariableDef) {
    //console.log('varChanged', event.id, event.value);

    this.model.vars.setVar(event.id, event.value);
    this.currentVar = (this.model.vars as any).vars.find((v: VariableDef) => v.id === event.id);
  }

}

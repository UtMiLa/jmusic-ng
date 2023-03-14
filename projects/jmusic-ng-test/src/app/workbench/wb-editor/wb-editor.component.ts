import { Component, Input, OnInit } from '@angular/core';
import { VariableDef } from 'jmusic-model/model';

@Component({
  selector: 'app-wb-editor',
  templateUrl: './wb-editor.component.html',
  styleUrls: ['./wb-editor.component.scss']
})
export class WbEditorComponent implements OnInit {

  constructor() { }

  @Input()
  model?: VariableDef;

  ngOnInit() {
  }

}

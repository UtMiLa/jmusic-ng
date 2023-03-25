import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar-button',
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.scss']
})
export class ToolbarButtonComponent implements OnInit {

  constructor() { }

  @Output()
  clicked = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

}

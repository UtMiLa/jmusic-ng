import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ly-editor',
  templateUrl: './ly-editor.component.html',
  styleUrls: ['./ly-editor.component.css'],
})
export class LyEditorComponent {

  private _lyText?: string | undefined;
  @Input()
  public get lyText(): string | undefined {
    return this._lyText;
  }
  public set lyText(value: string | undefined) {
    if (value !== this.changedText) {
      this._lyText = value;
    }
  }

  changedText?: string;

  @Output()
  lyTextChange = new EventEmitter<string>();

  setDivCaret(element: HTMLElement) {
    //var el = document.getElementById("editable")
    var range = document.createRange()
    var sel = window.getSelection()

    range.setStart(element.childNodes[0], 5)
    range.collapse(true)

    if (sel) {
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }

  divText: string = '';

  editableChanged(event: Event) {
    console.log(event);
    this.changedText = (event.target as HTMLPreElement).textContent ?? '';
    this.lyTextChange.emit(this.changedText);
    setTimeout(() => {
      //this.setDivCaret(event.target as HTMLPreElement);
    }, 100);

  }

}

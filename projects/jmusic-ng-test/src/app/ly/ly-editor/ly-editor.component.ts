import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ly-editor',
  templateUrl: './ly-editor.component.html',
  styleUrls: ['./ly-editor.component.scss'],
})
export class LyEditorComponent {


  @ViewChild('editor')
  editor?: any;

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

  private _error: any;
  @Input()
  public get error(): any {
    return this._error;
  }
  public set error(value: any) {
    this._error = value;
    if (!this._error) {
      this.errorText = '';
    } else if (this._error.message) {
      this.errorText = this._error.message;
    } else {
      this.errorText = JSON.stringify(this._error);
    }

    console.log(this._error?.location, this.editor);
    if (this._error && this._error.location && this.editor) {

      setTimeout(() => {
        var range = document.createRange();
        var sel = window.getSelection();

        range.setStart(this.editor.nativeElement.childNodes[0], this._error.location.start.offset);
        range.setEnd(this.editor.nativeElement.childNodes[0], this._error.location.end.offset);
        //range.collapse(true);

        if (sel) {
          sel.removeAllRanges()
          sel.addRange(range)
        }

      }, 200);
    }
  }

  errorText = '';

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

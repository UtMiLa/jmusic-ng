import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

//todo: still cannot set caret correctly when changing error status
// inspiration: https://codemirror.net/examples/lang-package/

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
      this.updateLyTextLines(value ?? '');
    }
  }


  lyTextLines?: {before: string; after: string; marked: string}[];


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

    //console.log(this._error?.location, this.editor);
    if (this._error && this._error.location && this.editor) {



      this.updateLyTextLines(this.lyText ?? '');
    }
  }

  updateLyTextLines(text: string) {
    const errorLine = this._error?.location?.start?.line ?? Infinity;
    const errorFrom = this._error?.location?.start?.column ?? 0;
    const errorTo = this._error?.location?.end?.column ?? 0;
    this.lyTextLines = text.split('\n').map((line, idx) => (
      errorLine === idx + 1
      ? {before: line.substring(0, errorFrom - 1), marked: line.substring(errorFrom - 1, errorTo - 1), after: line.substring(errorTo - 1) }
      : {before: line, marked: '', after: ''}
    ));
    console.log(this.lyTextLines);
  }

  errorText = '';

  changedText?: string;

  @Output()
  lyTextChange = new EventEmitter<string>();

  setDivCaret(element: Node, line: number, position: number) {
    //var el = document.getElementById("editable")
    if (!line || !this.lyTextLines || this.lyTextLines.length <= line) {
      throw 'incompatible line';
    }
    const theLine = this.lyTextLines[line];
    let elementId = 0;
    if (position > theLine.before.length) {
      position -= theLine.before.length
      elementId = 1;
      if (position > theLine.marked.length) {
        position -= theLine.marked.length
        elementId = 2;
      }
    }
    element = element.childNodes.item(line).childNodes.item(elementId).childNodes.item(0);
    console.log('element', element);
    /*while (indexes.length) {
      const index = indexes.pop() as number;
      element = element.childNodes.item(index);
    }*/
    var range = document.createRange()
    var sel = window.getSelection()

    if (element.textContent)
      position = Math.min(position, element.textContent.length);

    //console.log('range.setStart(element, position)', element, position);
    range.setStart(element, position);
    range.setEnd(element, position);
    range.collapse(true)

    if (sel) {
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }

  divText: string = '';

  getPos(line: number, element: number, pos: number) {
    if (!line || !this.lyTextLines || this.lyTextLines.length <= line) {
      console.error('incompatible line', line, this.lyTextLines);
      return 0;
    }
    if (element === 0) return pos;
    pos += this.lyTextLines[line].before.length;
    if (element === 1) return pos;
    pos += this.lyTextLines[line].marked.length;
    return pos;
  }

  editableChanged(event: Event) {
    //console.log(event);

    var sel = window.getSelection();
    //console.log('sel', sel);
    let caretLine = 0;
    let caretPos = 0;
    const elms = [];
    const indexes: number[] = [];

    if (sel && sel.rangeCount) {
      const range = sel.getRangeAt(0);
      if (range.startContainer === range.endContainer) {
        //console.log('which line?', range, sel, event);
        //console.log('planning caret', caretLine, caretPos, range.startOffset, range.startContainer);

        let elm: Node | null = range.startContainer;
        while (elm && elm !== event.target) {
          elms.push(elm);
          var index = Array.prototype.indexOf.call(elm.parentElement?.childNodes, elm);
          indexes.push(index);
          elm = elm.parentElement;
        }
        console.log('planning caret', elms, indexes);
        caretLine = indexes[indexes.length - 1];
        /*if (elm && (elm as HTMLElement).tagName === 'DIV') {
          //caretLine = indexes[0];
          caretPos = this.lyTextLines ? this.lyTextLines[caretLine].before.length : 0;
        } else */{
          //caretLine = indexes[2];
          caretPos = this.getPos(caretLine, indexes[1], range.startOffset);
        }
        console.log('pos', caretPos);
      }
    }

    const children = (event.target as HTMLElement).children;
    if (children && children.length) {
      let textLines = [] as string[];
      for(let i = 0; i < children.length; i++) {
        textLines.push(children.item(i)?.textContent ?? '');
      }
      this.changedText = textLines.join('\n');

    } else {
      this.changedText = '';
    }
    //console.log(children, this.changedText);
    this.lyTextChange.emit(this.changedText);

    setTimeout(() => {

      //this.setDivCaret(event.target as HTMLPreElement);
      this.updateLyTextLines(this.changedText ?? '');

      setTimeout(() => {
        if (indexes.length) {
          //console.log('setting caret', caretLine, caretPos, indexes);
          this.setDivCaret(event.target as HTMLElement, caretLine, caretPos);
        }
      }, 1);

    }, 1);

  }

}

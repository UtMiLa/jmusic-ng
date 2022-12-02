import { Component, Input, OnInit } from '@angular/core';
import { ISequence, LyricsSequence, SimpleSequence } from 'jmusic-model/model';

@Component({
  selector: 'app-structured-sequence',
  templateUrl: './structured-sequence.component.html',
  styleUrls: ['./structured-sequence.component.scss']
})
export class StructuredSequenceComponent implements OnInit {

  constructor() { }

  @Input()
  sequence: ISequence | undefined;

  get seqAny(): any { return this.sequence as any; }

  get type() {
    return (this.sequence as object)?.constructor?.name;
  }

  ngOnInit(): void {
  }


  updateSeq(seq: SimpleSequence) {
    seq.def = seq.def;
    //console.log(seq.elements);
  }

  updateLyrics(seq: LyricsSequence) {
    seq.lyricsText = seq.lyricsText;
    //console.log(seq.elements);
  }

}

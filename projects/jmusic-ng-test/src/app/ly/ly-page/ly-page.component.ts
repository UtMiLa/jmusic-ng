import { AbsoluteTime, JMusic } from 'jmusic-model/model';
import { Component, OnInit } from '@angular/core';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { lilypondToJMusic } from 'jmusic-lilypond/import-lilypond';
import { MidiPerformer } from 'jmusic-model/midi';
import { MidiOutService } from '../../midi/midi-out.service';
import { FileIoService } from '../../services/file-io.service';

@Component({
  selector: 'app-ly-page',
  templateUrl: './ly-page.component.html',
  styleUrls: ['./ly-page.component.scss']
})
export class LyPageComponent implements OnInit {

  constructor(private midiOut: MidiOutService, private fileIo: FileIoService) { }


  files: string[] = [];
  currentFileName?: string;

  ngOnInit(): void {
    this.fileIo.listLyFiles().subscribe(res => this.files = ['', ...res]);
  }

  model?: JMusic;
  error: any;

  insertionPoint?: InsertionPoint;

  private _lyText = '';
  public get lyText() {
    return this._lyText;
  }
  public set lyText(value) {
    if (this._lyText !== value) {
      this._lyText = value;
      try {
        this.error = '';
        const score = lilypondToJMusic(this.lyText);
        console.log('score', score);
        this.model = new JMusic(score);
        this.insertionPoint = new InsertionPoint(this.model);
        //this.invalidate();
      } catch (e) {
        console.log(e);
        this.error = e;
      }
    }
  }

  invalidate() {
    //
  }

  selectFile(event: Event) {
    this.fileIo.loadLyFile((event.target as any).value).subscribe(content => {
      //console.log(event, content);
      this.lyText = content;
    });
  }

  saveFile() {
    if (this.currentFileName)
    this.fileIo.saveFile(this.currentFileName, this.lyText);
  }

  playMidi() {
    if (this.model) {
      const performer: MidiPerformer = new MidiPerformer();
      (performer.moveCursor as any).subscribe((time: AbsoluteTime) => {
        if (this.insertionPoint) this.insertionPoint.time = time;
        this.invalidate();
      });
      performer.perform(this.model, this.midiOut);
    }
   }
}

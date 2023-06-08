import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
import { SubsetDef, scoreModelToViewModel, ScoreViewModel } from 'jmusic-model/logical-view';
import { ScoreDef, Time } from 'jmusic-model/model';
import { StandardMetrics, viewModelToPhysical, Metrics, renderOnCanvas, getPhysicalRect, generateMeasureMap, PhysicalModel } from 'jmusic-model/physical-view';
import { Cursor } from 'jmusic-model/physical-view/physical/cursor';

@Component({
  selector: 'mus-jmusic-physical-view',
  templateUrl: './jmusic-physical-view.component.html',
  styleUrls: ['./jmusic-physical-view.component.scss']
})
export class JmusicPhysicalViewComponent implements OnInit {

  constructor() { }

  @ViewChild('scoreCanvas')
  scoreCanvas: ElementRef<HTMLCanvasElement> | undefined;



  private _model: PhysicalModel | undefined;
  @Input()
  public get model(): PhysicalModel | undefined {
    return this._model;
  }
  public set model(value: PhysicalModel | undefined) {
    /*if (JSON.stringify(value) === JSON.stringify(this._model)) {
      console.log('same value');

      return;
    }*/
    this._model = value;
    if (value) {
      const rect = getPhysicalRect(value);
      this.staffCount = (50 + rect.yMax - rect.yMin) / 80;
      console.log('staffc', this.staffCount);

    }
    this.render();
  }

  @Output()
  onOverElement = new EventEmitter();

  @Output()
  onClickElement = new EventEmitter();

  @Input()
  restrictions: SubsetDef = { startTime: Time.StartTime, endTime: Time.EternityTime };
  @Input()
  scale = 2;
  staffCount = 2;

  settings = new StandardMetrics({
    staffLineWidth: 6,
  });;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    //console.log(this.scoreCanvas);

    setTimeout(() => { // otherwise does not load font in Chrome
      this.render();
    }, 10);

  }

  render() {
    if (!this.scoreCanvas) return;
    if (this.model) {
    renderOnCanvas(this.model, this.scoreCanvas.nativeElement, {
        offsetX: 10,
        offsetY: 40,
        scaleX: this.scale,
        scaleY: this.scale
      });
    } else {
      renderOnCanvas({elements: []}, this.scoreCanvas.nativeElement, {
        offsetX: 10,
        offsetY: 40,
        scaleX: this.scale,
        scaleY: this.scale
      });
    }
  }

  get canvasHeight(): number {
    return 100 * this.scale * this.staffCount;
  }


  mouseMove($event: MouseEvent) {
    const rect = ($event.target as any).getBoundingClientRect();

    this.onOverElement.next({
      clientX: $event.clientX - rect.left, clientY: $event.clientY - rect.top, startTime: this.restrictions.startTime});
  }

  click($event: MouseEvent) {
    const rect = ($event.target as any).getBoundingClientRect();

    this.onClickElement.next({
      clientX: $event.clientX - rect.left, clientY: $event.clientY - rect.top,
      startTime: this.restrictions.startTime,
      model: this.model
    });
  }

}

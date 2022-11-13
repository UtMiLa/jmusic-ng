import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ScoreDef, Time } from 'jmusic-model/model';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
const { ScoreViewModel, scoreModelToViewModel } = require('jmusic-model/logical-view');
const { PhysicalModel, generateMeasureMap, viewModelToPhysical, StandardMetrics, renderOnCanvas, Metrics } = require('jmusic-model/physical-view');
//import { PhysicalModel, viewModelToPhysical, StandardMetrics, renderOnCanvas, Metrics } from 'jmusic-model/physical-view';
import { Metrics } from 'jmusic-model/physical-view';
import { Cursor } from 'jmusic-model/physical-view/physical/cursor';
import { ScoreViewModel } from 'jmusic-model/logical-view';

//console.log(Component, scoreModelToViewModel, viewModelToPhysical, StandardMetrics);
@Component({
  selector: 'mus-jmusic-ng',

  template: `<div style="font-family: Emmentaler;">
              <canvas id="scoreCanvas" #scoreCanvas width="1000px" [height]="canvasHeight" (mousemove)="mouseMove($event)"></canvas>
            </div> {{mouseDebug}}`,

  styles: [`@font-face {
    font-family: 'Emmentaler';
    font-style: normal;
    font-weight: 400;
    src: local('Emmentaler'), url(./Emmentaler-20.woff) format('woff');
  }`
  ]
})
export class JmusicNgComponent implements OnInit {

  constructor() {
  }

  @ViewChild('scoreCanvas')
  scoreCanvas: ElementRef<HTMLCanvasElement> | undefined;


  private _insertionPoint: InsertionPoint | undefined;
  @Input()
  public get insertionPoint(): InsertionPoint | undefined {
    return this._insertionPoint;
  }
  public set insertionPoint(value: InsertionPoint | undefined) {
    this._insertionPoint = value;
  }

  private _scoreDef: ScoreDef | undefined;
  @Input()
  public get scoreDef(): ScoreDef | undefined {
    return this._scoreDef;
  }
  public set scoreDef(value: ScoreDef | undefined) {
    this._scoreDef = value;
    this.render();
    /*if (!this.scoreCanvas) {
      return;
    }
    if (value && this.scoreCanvas) {
      const logicalModel = scoreModelToViewModel(value);
      const physicalModel = viewModelToPhysical(logicalModel, this.settings);
      renderOnCanvas(physicalModel, this.scoreCanvas.nativeElement, {
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
    }*/
  }

  scale = 1.2;
  staffCount = 2;

  settings = {}/* as Metrics*/;
  /*new StandardMetrics({
      staffLineWidth: 6,
  });*/

  ngOnInit(): void {
    this.settings = new StandardMetrics({
      staffLineWidth: 6,
    });
  }

  ngAfterViewInit() {
    //console.log(this.scoreCanvas);

    setTimeout(() => { // otherwise does not load fint in Chrome
      this.render();
    }, 10);

  }

  render() {
    if (!this.scoreCanvas) return;
    if (this._scoreDef) {
      const cursor = {absTime: this.insertionPoint?.time, staff: this.insertionPoint?.staffNo, position: 0} as Cursor;
      const logicalModel = scoreModelToViewModel(this._scoreDef);
      this.logicalModel = logicalModel;
      const physicalModel = viewModelToPhysical(logicalModel, this.settings as Metrics, cursor);
      renderOnCanvas(physicalModel, this.scoreCanvas.nativeElement, {
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
    //
    if (!this.logicalModel) return;
    const map = generateMeasureMap(this.logicalModel, this.settings);
    //console.log(map);

    const localized = map.localize(($event.clientX - 10) / this.scale, $event.clientY / this.scale);
    if (!localized) {
      this.mouseDebug = '';
      return;
    }
    this.mouseDebug = JSON.stringify($event.clientX) + ',' + JSON.stringify($event.clientY) + ' ' + JSON.stringify(localized);
    //_insertionPoint = new InsertionPoint(this.scoreDef);
    if (!this.insertionPoint) return;
    this.insertionPoint.time = localized.time;
    this.render();
  }


  logicalModel: ScoreViewModel | undefined;
  mouseDebug: string = '';

}

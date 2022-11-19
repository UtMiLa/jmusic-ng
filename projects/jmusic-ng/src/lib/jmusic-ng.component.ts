import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ScoreDef, Time } from 'jmusic-model/model';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
const { ScoreViewModel } = require('jmusic-model/logical-view');
const { PhysicalModel, viewModelToPhysical, renderOnCanvas, Metrics } = require('jmusic-model/physical-view');
//import { PhysicalModel, viewModelToPhysical, StandardMetrics, renderOnCanvas, Metrics } from 'jmusic-model/physical-view';
import { generateMeasureMap, Metrics, PhysicalModel, StandardMetrics } from 'jmusic-model/physical-view';
import { Cursor } from 'jmusic-model/physical-view/physical/cursor';
import { scoreModelToViewModel, ScoreViewModel, SubsetDef } from 'jmusic-model/logical-view';

//console.log(Component, scoreModelToViewModel, viewModelToPhysical, StandardMetrics);
@Component({
  selector: 'mus-jmusic-ng',

  template: `<div style="font-family: Emmentaler;" *ngFor="let model of physicalModel">
              <mus-jmusic-physical-view [model]="model" [scale]="scale" (onOverElement)="mouseMove($event)"></mus-jmusic-physical-view>
            </div>`,

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
  }

  @Input()
  restrictions: SubsetDef = { startTime: Time.StartTime, endTime: Time.EternityTime };
  @Input()
  scale = 2;

  settings = new StandardMetrics({
    staffLineWidth: 6,
  });;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.render();
  }

  physicalModel: PhysicalModel[] = [];

  render() {
    if (this._scoreDef) {
      const cursor = {
        absTime: this.insertionPoint?.time,
        staff: this.insertionPoint?.staffNo,
        position: this.insertionPoint?.position
      } as Cursor;
      let logicalModel = scoreModelToViewModel(this._scoreDef, this.restrictions);
      this.logicalModel = logicalModel;
      let map = generateMeasureMap(this.logicalModel, this.settings);
      const maxWidth = 200;
      this.physicalModel = [];
      let restriction = this.restrictions;
      for(let i = 0; i < 3; i++) {
      //while (map.totalWidth() > 150) {
        console.log(restriction, map.totalWidth());

        if (map.totalWidth() > maxWidth) {
          restriction = { endTime: Time.addTime(restriction.startTime, Time.newSpan(4, 1)), startTime: restriction.startTime };
        }
        logicalModel = scoreModelToViewModel(this._scoreDef, restriction);
        this.physicalModel.push(viewModelToPhysical(logicalModel, this.settings as Metrics, cursor));
        map = generateMeasureMap(this.logicalModel, this.settings);

        restriction = { endTime: restriction.endTime, startTime: Time.addTime(restriction.startTime, Time.newSpan(4, 1)) };
        //if (Time.sortComparison(restriction.endTime, restriction.startTime) <= 0) break;
      }

    }
  }


  mouseMove($event: MouseEvent) {
    //console.log('log mm', $event);

    if (!this.logicalModel) return;
    const map = generateMeasureMap(this.logicalModel, this.settings);
    //console.log(map);
    //console.log('log map', map);
    const localized = map.localize(($event.clientX) / this.scale, ($event.clientY*2 - 12) / this.scale, this.settings);
    if (!localized) {
      this.mouseDebug = '';
      return;
    }

    this.mouseDebug = JSON.stringify($event.clientX) + ',' + JSON.stringify($event.clientY) + ' ' + JSON.stringify(localized);
    //console.log('log loc', this.mouseDebug);
    //_insertionPoint = new InsertionPoint(this.scoreDef);
    if (!this.insertionPoint) return;


    if (Time.sortComparison(this.insertionPoint.time, localized.time) !==0 || this.insertionPoint.position !== 15-localized.pitch) {
      this.insertionPoint.time = localized.time;
      this.insertionPoint.staffNo = localized.staff;
      this.insertionPoint.position = 15-localized.pitch;
      //this.render();
    }
  }


  logicalModel: ScoreViewModel | undefined;
  mouseDebug: string = '';

}

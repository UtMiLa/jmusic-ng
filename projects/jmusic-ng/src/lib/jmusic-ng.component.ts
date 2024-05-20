import { EventHandler } from 'jmusic-model/editor/event-handler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbsoluteTime, Score, Time } from 'jmusic-model/model';
import { InsertionPoint } from 'jmusic-model/editor/insertion-point';
//const { ScoreViewModel } = require('jmusic-model/logical-view');
import { viewModelToPhysical, renderOnCanvas } from 'jmusic-model/physical-view';
import { generateMeasureMap, findSystemSplits, Metrics, PhysicalModel, StandardMetrics } from 'jmusic-model/physical-view';
import { Cursor } from 'jmusic-model/physical-view/physical/cursor';
import { scoreModelToViewModel, ScoreViewModel, SubsetDef } from 'jmusic-model/logical-view';
import { PhysicalElementBase } from 'jmusic-model/physical-view';
import { Some, none } from 'fp-ts/Option'

//console.log(Component, scoreModelToViewModel, viewModelToPhysical, StandardMetrics);
@Component({
  selector: 'mus-jmusic-ng',

  template: `<div tabindex="-1" #div (keydown)="keyDown($event)"><div style="font-family: Emmentaler;" *ngFor="let model of physicalModel; let i=index; trackBy:tracker">
              <mus-jmusic-physical-view [model]="model" [scale]="scale" (onOverElement)="mouseMove(i, $event)" (onClickElement)="clickElement(i, $event)"></mus-jmusic-physical-view>
            </div></div>`,

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

  @ViewChild('div')
  div: ElementRef<HTMLDivElement> | undefined;

  @Input()
  eventHandler?: EventHandler;

  private _insertionPoint: InsertionPoint | undefined;
  @Input()
  public get insertionPoint(): InsertionPoint | undefined {
    return this._insertionPoint;
  }
  public set insertionPoint(value: InsertionPoint | undefined) {
    this._insertionPoint = value;
  }

  private _scoreDef: Score | undefined;
  @Input()
  public get scoreDef(): Score | undefined {
    return this._scoreDef;
  }
  public set scoreDef(value: Score | undefined) {
    this._scoreDef = value;

    //console.log('set scoredef', value);
    if (value && (value as any).onChanged) {
      //console.log('onChanged');
      (value as any).onChanged(() => this.render())
    }
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
    this.div?.nativeElement.focus();
  }

  physicalModel: PhysicalModel[] = [];

  private splits: AbsoluteTime[] = [];

  render() {
    if (this._scoreDef) {
      const cursor = {
        absTime: this.insertionPoint?.time,
        staff: this.insertionPoint?.staffNo,
        position: this.insertionPoint?.position
      } as Cursor;
      let logicalModel = scoreModelToViewModel(this._scoreDef, none, this.restrictions);
      this.logicalModel = logicalModel;
      let map = generateMeasureMap(this.logicalModel, this.settings);

      const maxWidth = 1000;

      const splits = findSystemSplits(map, maxWidth);
      //console.log(splits);
      const physicalModel = [];
      for(let i = 0; i < splits.length; i++) {
        const restriction = { startTime: splits[i], endTime: i === splits.length - 1 ? this.restrictions.endTime : splits[i+1] };
        logicalModel = scoreModelToViewModel(this._scoreDef, none, restriction);

        const phv = viewModelToPhysical(logicalModel, this.settings as Metrics, cursor);

        if (this.physicalModel.length > i && JSON.stringify(phv) === JSON.stringify(this.physicalModel[i])) {
          physicalModel.push(this.physicalModel[i]);
        } else {
          physicalModel.push(phv);
        }
      }
      this.physicalModel = physicalModel;
      this.splits = splits;

      console.log('render', this._scoreDef, this.insertionPoint, logicalModel, physicalModel);

    }
  }


  mouseMove(i: number, $event: MouseEvent) {
    //console.log('log mm', $event);
    if (i >= this.splits.length) return;

    if (!this._scoreDef) return;
    const restrictions = { startTime: this.splits[i], endTime: i === this.splits.length - 1 ? this.restrictions.endTime : this.splits[i+1] };
    const restrictedLogicalModel = scoreModelToViewModel(this._scoreDef, none, restrictions)

    const map = generateMeasureMap(restrictedLogicalModel, this.settings);

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
    /*if (!this.insertionPoint) return;


    if (Time.sortComparison(this.insertionPoint.time, localized.time) !==0 || this.insertionPoint.position !== 15-localized.pitch) {
      this.insertionPoint.time = localized.time;
      this.insertionPoint.staffNo = localized.staff;
      this.insertionPoint.position = 15-localized.pitch;
      //this.render();
    }*/
  }



  clickElement(i: number, $event: MouseEvent) {
    //console.log('log mm', $event);
    if (i >= this.splits.length) return;

    if (!this._scoreDef) return;
    const restrictions = { startTime: this.splits[i], endTime: i === this.splits.length - 1 ? this.restrictions.endTime : this.splits[i+1] };
    const restrictedLogicalModel = scoreModelToViewModel(this._scoreDef, none, restrictions)

    const map = generateMeasureMap(restrictedLogicalModel, this.settings);
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
      console.log(this.insertionPoint, $event);

      this.render();
    }
  }

  tracker(index: number, item: PhysicalModel) {
    return JSON.stringify(item.elements.filter((element: PhysicalElementBase) => element.element !== 106));//;//.length + '_' + index.toString();
  }

  logicalModel: ScoreViewModel | undefined;
  mouseDebug: string = '';


  keyDown($event: KeyboardEvent) {
    console.log($event);

    if (this.eventHandler) {
      if (this.eventHandler.keyDown($event.key)) {
        $event.preventDefault(); // todo: this should be handled otherwise
        $event.stopPropagation(); // todo: this should be handled otherwise
        this.render(); // todo: this should be handled otherwise
      }
    }
  }
}

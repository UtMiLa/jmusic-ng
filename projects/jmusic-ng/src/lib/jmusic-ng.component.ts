import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ScoreDef } from '../../../../../jmusic-model/src/model';
import { ScoreViewModel, scoreModelToViewModel } from '../../../../../jmusic-model/src/logical-view';
import { PhysicalModel, viewModelToPhysical, StandardMetrics, renderOnCanvas, Metrics } from '../../../../../jmusic-model/src/physical-view';

console.log(Component, scoreModelToViewModel, viewModelToPhysical, StandardMetrics);
@Component({
  selector: 'mus-jmusic-ng',
  template: `<div style="font-family: Emmentaler;">
<canvas id="scoreCanvas" #scoreCanvas width="1000px"
  [height]="canvasHeight"></canvas>
  </div>
  `,
  styles: [
  ]
})
export class JmusicNgComponent implements OnInit {

  constructor() {
  }

  @ViewChild('scoreCanvas')
  scoreCanvas: ElementRef<HTMLCanvasElement> | undefined;

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

  settings = {} as Metrics;
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
      const logicalModel = scoreModelToViewModel(this._scoreDef);
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
    }
  }

  get canvasHeight(): number {
    return 100 * this.scale * this.staffCount;
  }

}

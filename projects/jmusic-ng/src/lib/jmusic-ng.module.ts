import { NgModule } from '@angular/core';
import { JmusicNgComponent } from './jmusic-ng.component';
import { JmusicPhysicalViewComponent } from './jmusic-physical-view/jmusic-physical-view.component';



@NgModule({
  declarations: [
    JmusicNgComponent,
    JmusicPhysicalViewComponent
  ],
  imports: [
  ],
  exports: [
    JmusicNgComponent,
    JmusicPhysicalViewComponent
  ]
})
export class JmusicNgModule { }

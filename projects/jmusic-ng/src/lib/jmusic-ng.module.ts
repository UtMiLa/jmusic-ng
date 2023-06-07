import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JmusicNgComponent } from './jmusic-ng.component';
import { JmusicPhysicalViewComponent } from './jmusic-physical-view/jmusic-physical-view.component';
import { KeyDialogComponent } from './dialogs/key-dialog/key-dialog.component';
import { ClefDialogComponent } from './dialogs/clef-dialog/clef-dialog.component';

@NgModule({
  declarations: [
    JmusicNgComponent,
    JmusicPhysicalViewComponent,
  ],
  imports: [BrowserModule],
  exports: [JmusicNgComponent, JmusicPhysicalViewComponent],
})
export class JmusicNgModule {}

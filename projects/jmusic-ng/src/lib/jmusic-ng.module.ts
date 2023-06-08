import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JmusicNgComponent } from './jmusic-ng.component';
import { JmusicPhysicalViewComponent } from './jmusic-physical-view/jmusic-physical-view.component';
import { KeyDialogComponent } from './dialogs/key-dialog/key-dialog.component';
import { ClefDialogComponent } from './dialogs/clef-dialog/clef-dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    JmusicNgComponent,
    JmusicPhysicalViewComponent,
  ],
  imports: [CommonModule],
  exports: [JmusicNgComponent, JmusicPhysicalViewComponent],
})
export class JmusicNgModule {}

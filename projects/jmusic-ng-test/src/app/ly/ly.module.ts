import { FormsModule } from '@angular/forms';
import { JmusicNgModule } from 'jmusic-ng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyPageComponent } from './ly-page/ly-page.component';
import { LyEditorComponent } from './ly-editor/ly-editor.component';

@NgModule({
  declarations: [LyPageComponent, LyEditorComponent],
  imports: [CommonModule, FormsModule, JmusicNgModule],
})
export class LyModule {}

import { FormsModule } from '@angular/forms';
import { JmusicNgModule } from 'jmusic-ng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyPageComponent } from './ly-page/ly-page.component';



@NgModule({
  declarations: [
    LyPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    JmusicNgModule
  ]
})
export class LyModule { }

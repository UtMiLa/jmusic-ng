import { LyModule } from './ly/ly.module';
import { JmusicNgModule } from 'projects/jmusic-ng/src/lib/jmusic-ng.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { StructuredMusicComponent } from './structured-music/structured-music.component';
import { StructuredSequenceComponent } from './structured-music/structured-sequence/structured-sequence.component';
import { StubToolBarComponent } from './stub-tool-bar/stub-tool-bar.component';
import { WorkbenchModule } from './workbench/workbench.module';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsModule } from './dialogs-develop/dialogs.module';
import { DialogsService } from 'projects/jmusic-ng/src/lib/dialogs.service';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    StructuredMusicComponent,
    StructuredSequenceComponent,
    StubToolBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JmusicNgModule,
    LyModule,
    DialogsModule,
    WorkbenchModule,
    NoopAnimationsModule
  ],
  providers: [DialogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

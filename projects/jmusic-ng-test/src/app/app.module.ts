import { JmusicNgModule } from './../../../jmusic-ng/src/lib/jmusic-ng.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { StructuredMusicComponent } from './structured-music/structured-music.component';
import { StructuredSequenceComponent } from './structured-music/structured-sequence/structured-sequence.component';
import { StubToolBarComponent } from './stub-tool-bar/stub-tool-bar.component';

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
    JmusicNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

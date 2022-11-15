import { JmusicNgModule } from './../../../jmusic-ng/src/lib/jmusic-ng.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
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

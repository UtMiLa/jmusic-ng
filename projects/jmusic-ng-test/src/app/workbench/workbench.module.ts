import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WbEditorComponent } from './wb-editor/wb-editor.component';
import { WbMainMenuComponent } from './wb-main-menu/wb-main-menu.component';
import { WbPreviewComponent } from './wb-preview/wb-preview.component';
import { WbTopToolbarComponent } from './wb-top-toolbar/wb-top-toolbar.component';
import { WbVarListComponent } from './wb-var-list/wb-var-list.component';
import { WorkbenchComponent } from './workbench.component';



@NgModule({
  declarations: [
    WbEditorComponent,
    WbMainMenuComponent,
    WbPreviewComponent,
    WbTopToolbarComponent,
    WbVarListComponent,
    WorkbenchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WorkbenchComponent
  ]
})
export class WorkbenchModule { }

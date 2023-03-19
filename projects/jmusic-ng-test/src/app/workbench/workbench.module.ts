import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WbEditorComponent } from './wb-editor/wb-editor.component';
import { WbMainMenuComponent } from './wb-main-menu/wb-main-menu.component';
import { WbPreviewComponent } from './wb-preview/wb-preview.component';
import { WbTopToolbarComponent } from './wb-top-toolbar/wb-top-toolbar.component';
import { WbVarListComponent } from './wb-var-list/wb-var-list.component';
import { WorkbenchComponent } from './workbench.component';
import { JmusicNgModule } from 'jmusic-ng';
import { ToolbarButtonComponent } from './toolbar-button/toolbar-button.component';
import { ToolbarToggleButtonComponent } from './toolbar-toggle-button/toolbar-toggle-button.component';
import { ToolbarRadioButtonGroupComponent } from './toolbar-radio-button-group/toolbar-radio-button-group.component';



@NgModule({
  declarations: [
    WbEditorComponent,
    WbMainMenuComponent,
    WbPreviewComponent,
    WbTopToolbarComponent,
    WbVarListComponent,
    WorkbenchComponent,
    ToolbarButtonComponent,
    ToolbarToggleButtonComponent,
    ToolbarRadioButtonGroupComponent
  ],
  imports: [
    CommonModule,
    JmusicNgModule,
    FormsModule
  ],
  exports: [
    WorkbenchComponent
  ]
})
export class WorkbenchModule { }

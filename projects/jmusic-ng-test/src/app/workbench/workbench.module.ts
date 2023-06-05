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
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { DialogsService } from '../dialogs/dialogs.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


/************************************** /


//import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkListboxModule} from '@angular/cdk/listbox';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
//import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
import {DialogModule} from '@angular/cdk/dialog';
 /* **************************************************/




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
    SharedModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    WorkbenchComponent
  ],
  providers: [DialogsService]
})
export class WorkbenchModule { }

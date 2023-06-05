import { DemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkbenchComponent } from './workbench/workbench.component';
import { LyPageComponent } from './ly/ly-page/ly-page.component';
import { DialogsComponent } from './dialogs/dialogs.component';

const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'wb', component: WorkbenchComponent },
  { path: 'dlg', component: DialogsComponent },
  { path: 'ly', component: LyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

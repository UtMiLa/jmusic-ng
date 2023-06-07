import { DemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkbenchComponent } from './workbench/workbench.component';
import { LyPageComponent } from './ly/ly-page/ly-page.component';
import { DialogDemoComponent } from './dialogs-develop/dialog-demo/dialog-demo.component';
import { DialogsModule } from './dialogs-develop/dialogs.module';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'wb', component: WorkbenchComponent },
  { path: '', component: DialogDemoComponent },
  { path: 'ly', component: LyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

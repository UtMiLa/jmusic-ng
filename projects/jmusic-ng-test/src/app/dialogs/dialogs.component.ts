import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ClefDialogComponent } from './clef-dialog/clef-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MeterDialogComponent } from './meter-dialog/meter-dialog.component';
import { DialogsService } from './dialogs.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule, NgIf, JsonPipe],
  providers: [DialogsService]
})
export class DialogsComponent implements OnInit {

  constructor(public dialog: MatDialog, public diaServ: DialogsService) { }

  answer: any;

  async openDialog() {
    /*const dialogRef = this.dialog.open(MeterDialogComponent, {
      data: {meterDef: { count: 4, value: 4 }},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });*/

    const meter = await this.diaServ.getMeter();

    if (meter) {
      this.answer = meter;
    }
  }

  ngOnInit() {
  }

}

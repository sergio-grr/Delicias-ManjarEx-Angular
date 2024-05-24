import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColdModalComponent } from '../../components/cold-modal/cold-modal.component';

@Component({
  selector: 'app-cold-page',
  templateUrl: './cold-page.component.html',
  styleUrls: ['./cold-page.component.css']
})
export class ColdPageComponent {


  constructor(
    public dialog: MatDialog,
  ) { }

  openDialog(playerData: {  name: string; ingredients: string }): void {
    this.dialog.open( ColdModalComponent , {
      data: playerData
    });
  }
}

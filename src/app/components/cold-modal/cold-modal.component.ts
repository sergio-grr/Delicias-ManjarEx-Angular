import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-cold-modal',
  templateUrl: './cold-modal.component.html',
  styleUrls: ['./cold-modal.component.css']
})
export class ColdModalComponent  {

    constructor(
      public dialogRef: MatDialogRef<ColdModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { name: string; ingredients: string;  }
    ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
  }

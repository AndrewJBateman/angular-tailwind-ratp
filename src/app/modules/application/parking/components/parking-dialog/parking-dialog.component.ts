import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-parking-dialog',
  templateUrl: './parking-dialog.component.html'
})
export class ParkingDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ParkingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onCloseDialog = () => {
    this.dialogRef.close();
  };
}

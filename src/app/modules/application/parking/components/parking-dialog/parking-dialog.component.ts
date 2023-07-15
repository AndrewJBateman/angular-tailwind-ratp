import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-parking-dialog',
	templateUrl: './parking-dialog.component.html',
})
export class ParkingDialogComponent {
	constructor(
		private dialogRef: MatDialogRef<ParkingDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	onCloseDialog = () => {
		this.dialogRef.close();
	};
}

import { Component, Inject } from '@angular/core';
import {
	MAT_DIALOG_DATA,
	MatDialogRef,
	MatDialogTitle,
	MatDialogContent,
	MatDialogActions,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ParkingData } from '../../models/parking-data';

@Component({
	selector: 'app-parking-dialog',
	templateUrl: './parking-dialog.component.html',
	standalone: true,
	imports: [
		MatDialogTitle,
		MatDialogContent,
		MatDialogActions,
		MatButtonModule,
		MatIconModule,
	],
})
export class ParkingDialogComponent {
	constructor(
		private dialogRef: MatDialogRef<ParkingDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: ParkingData
	) {}

	onCloseDialog() {
		this.dialogRef.close();
	}
}

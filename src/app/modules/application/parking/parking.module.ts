import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ParkingRoutingModule } from './parking-routing.module';
import { ParkingComponent } from './parking.component';
import { ParkingDialogComponent } from './components/parking-dialog/parking-dialog.component';

@NgModule({
	declarations: [ParkingComponent, ParkingDialogComponent],
	imports: [
		CommonModule,
		ParkingRoutingModule,
		LeafletModule,
		LeafletMarkerClusterModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatTooltipModule,
	],
	exports: [ParkingComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ParkingModule {}

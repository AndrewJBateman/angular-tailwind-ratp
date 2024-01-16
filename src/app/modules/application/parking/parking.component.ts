/**
 * ParkingComponent class represents a component for displaying parking information on a map.
 * It uses the Leaflet library for map rendering and marker clustering.
 * The component allows zooming in and out, changing the map layer, and displaying a
 * popup dialog with parking information.
 *
 * Properties:
 * - map: The Leaflet map object.
 * - zoom: The current zoom level of the map.
 * - zoomMax: The maximum allowed zoom level.
 * - zoomMin: The minimum allowed zoom level.
 * - center: The center coordinates of the map.
 * - layer_OpenStreetMap: The OpenStreetMap tile layer.
 * - layer_ArcGISStreets: The ArcGIS Streets tile layer.
 * - layer_ArcGISSatellite: The ArcGIS Satellite tile layer.
 * - currentLayer: The currently selected tile layer.
 * - layers: An array of tile layers to be displayed on the map.
 * - options: Additional options for the map.
 * - markerClusterData: An array of marker cluster data.
 * - markerClusterOptions: Options for the marker clustering.
 *
 * Methods:
 * - ngOnInit(): Initializes the component and sets up the marker cluster data.
 * - onMapReady(map: L.Map): Callback function when the map is ready.
 * - zoomIn(): Increases the zoom level of the map.
 * - zoomOut(): Decreases the zoom level of the map.
 * - nextLayer(): Switches to the next tile layer.
 * - popupInfo(): Opens a popup dialog with parking information.
 * - _updateLayers(): Updates the layers array with the current tile layer.
 */
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ParkingDialogComponent } from './components/parking-dialog/parking-dialog.component';
import { parisData } from './paris.data';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@Component({
	selector: 'app-parking',
	templateUrl: './parking.component.html',
	styleUrls: ['./parking.component.css'],
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatDialogModule,
		ParkingComponent,
		ParkingDialogComponent,
		LeafletModule,
		LeafletMarkerClusterModule,
		MatTooltipModule,
		MatIconModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ParkingComponent implements OnInit {
	map: L.Map;
	zoom = 13;
	zoomMax = 20;
	zoomMin = 11;
	center = L.latLng(48.83907736542451, 2.2505893409978333);

	layer_OpenStreetMap = L.tileLayer(
		'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		{
			maxZoom: this.zoomMax,
			attribution:
				'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}
	);

	layer_ArcGISStreets = L.tileLayer(
		'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}/',
		{
			maxZoom: this.zoomMax,
			attribution: '© ArcGIS',
		}
	);

	layer_ArcGISSatellite = L.tileLayer(
		'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}/',
		{
			maxZoom: this.zoomMax,
			attribution: '© ArcGIS',
		}
	);

	currentLayer = this.layer_OpenStreetMap;
	layers: L.Layer[] = [this.currentLayer];

	options = {
		zoomControl: false,
		minZoom: this.zoomMin,
		maxZoom: this.zoomMax,
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	markerClusterData: any[] = [];

	markerClusterOptions: L.MarkerClusterGroupOptions = {
		animate: true,
		disableClusteringAtZoom: 15,
		maxClusterRadius: 80,
		spiderfyOnMaxZoom: false,
	};

	constructor(private dialog: MatDialog) {}

	ngOnInit(): void {
		const icon = L.icon({
			iconSize: [25, 41],
			iconAnchor: [13, 41],
			iconUrl: 'assets/icons/marker-icon.png',
			shadowUrl: 'assets/icons/marker-shadow.png',
		});

		parisData.map(item => {
			const markerText =
				`<br><span>Street Name: <span class="text-blue-900">${item.fields.localisation}</b></span></span>` +
				(item.fields.comp_loc
					? `<br><span>Info.: <span class="text-blue-900">${item.fields.comp_loc}</b></span></span>`
					: '') +
				`<span>Commune: <span class="text-blue-900">${item.fields.commune}</span></span>` +
				`<br><span>INSEE Code: <span class="text-blue-900">${item.fields.code_insee}</span></span>`;

			this.markerClusterData.push(
				L.marker([item.geometry.coordinates[1], item.geometry.coordinates[0]], {
					icon: icon,
				}).bindPopup(markerText)
			);
		});
	}
	onMapReady(map: L.Map) {
		this.map = map;
	}

	zoomIn(): void {
		this.zoom = this.zoom >= this.zoomMax ? this.zoomMax : this.zoom + 1;
	}

	zoomOut(): void {
		this.zoom = this.zoom <= this.zoomMin ? this.zoomMin : this.zoom - 1;
	}

	nextLayer(): void {
		switch (this.currentLayer) {
			case this.layer_OpenStreetMap: {
				this.currentLayer = this.layer_ArcGISSatellite;
				break;
			}
			case this.layer_ArcGISSatellite: {
				this.currentLayer = this.layer_ArcGISStreets;
				break;
			}
			case this.layer_ArcGISStreets: {
				this.currentLayer = this.layer_OpenStreetMap;
				break;
			}
		}
		this._updateLayers();
	}

	popupInfo() {
		this.dialog.open(ParkingDialogComponent, {
			data: {
				spaces: parisData.length,
			},
		});
	}

	_updateLayers() {
		this.layers = [this.currentLayer];
	}
}

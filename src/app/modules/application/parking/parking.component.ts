import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { MatDialog } from '@angular/material/dialog';

import { ParkingDialogComponent } from './components/parking-dialog/parking-dialog.component';
import { parisData } from './paris.data';

@Component({
	selector: 'app-parking',
	templateUrl: './parking.component.html',
	styleUrls: ['./parking.component.css'],
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
		console.log('markerClusterData: ', this.markerClusterData);
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

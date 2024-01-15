/**
 * RatpComponent class represents a component in an Angular application that displays RATP traffic information.
 * It implements the OnInit interface to handle initialization logic.
 * The component has the following properties:
 * - ratpTraffic$: An Observable of type RatpTrafficApiResponse that holds the RATP traffic data.
 * - traffic: An array of RatpTraffic objects that represents the traffic information.
 * - id: A string or null value that holds the ID parameter from the activated route.
 * - trafficArray: An array of RatpTraffic objects used to store the traffic data.
 * - loading: A boolean flag indicating whether the component is in a loading state.
 * - defaultRatpMessage: A string representing the default message for normal traffic.
 *
 * The RatpComponent class has the following methods:
 * - ngOnInit(): A method that is called when the component is initialized. It subscribes to the paramMap of the activated route to get the ID parameter,
 *   calls the getRatpTraffic method, and sets the loading flag to false.
 * - getRatpTraffic(): An async method that calls the getRatpTrafficData method of the TrafficService to fetch the RATP traffic data and assigns it to the ratpTraffic$ property.
 * - trackByLine(index: string, ratp: RatpTraffic): A method used as a trackBy function for ngFor directive to track the RatpTraffic objects by their line property.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { RatpTraffic, RatpTrafficApiResponse } from './models/ratp-traffic';
import { TrafficService } from './services/traffic.service';
import { RatpCardComponent } from './ratp-card/ratp-card.component';
import { SpinnerComponent } from '../../common/spinner/spinner.component';

@Component({
	selector: 'app-ratp',
	templateUrl: './ratp.component.html',
	styleUrls: ['./ratp.component.css'],
	standalone: true,
	imports: [AsyncPipe, CommonModule, RatpCardComponent, SpinnerComponent],
})
export class RatpComponent implements OnInit {
	public ratpTraffic$: Observable<RatpTrafficApiResponse>;
	public traffic: RatpTraffic[];
	public id: string | null;
	public trafficArray: RatpTraffic[] = [];

	public loading = true;
	defaultRatpMessage = "Trafic normal sur l'ensemble de la ligne.";

	constructor(
		private trafficService: TrafficService,
		private activatedroute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.activatedroute.paramMap.subscribe(params => {
			this.id = params.get('id');
		});
		this.getRatpTraffic();
		this.loading = false;
	}

	private getRatpTraffic = async () => {
		this.ratpTraffic$ = await this.trafficService.getRatpTrafficData();
	};

	public trackByLine(index: string, ratp: RatpTraffic) {
		return ratp.line;
	}
}

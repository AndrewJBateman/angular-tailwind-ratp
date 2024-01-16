/**
 * Represents the HomeComponent class.
 *
 * This component is responsible for handling the home page functionality.
 * It includes methods for submitting a form, searching data, clearing the search, and tracking data.
 * The component also manages status variables for displaying data, loading indicators, and form submission.
 * It interacts with the CommerceService to retrieve data from the API.
 *
 * @constructor
 * Creates an instance of HomeComponent.
 *
 * @param {CommerceService} commerceService - The service for retrieving data from the API.
 */
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

import { environment } from '../../../../environments/environment';
import { CommerceService } from './services/commerce.service';
import { RatpResponse, Record } from './models/ratp-commerce';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	standalone: true,
	imports: [FormsModule, DatePipe],
})
export class HomeComponent {
	@ViewChild('form') form: NgForm;
	formSubmitted = false;
	name = environment.application.name;

	// status variables
	initialState = true;
	dataToShow = false;
	displayCleared = false;
	showLoadingIndicator = false;

	// API data variables
	ratpData: Record[] = [];
	postalCode = '';
	ville = '';
	dataLength = 0;
	date = '';

	constructor(private commerceService: CommerceService) {}

	onSubmitForm(postCodeSearch: NgForm): void {
		this.onSearchData(postCodeSearch.value.search);
		this.formSubmitted = true;
	}

	onSearchData(postCode: string): void {
		// Reset displayCleared variables. Set showLoadingIndicator to true
		this.displayCleared = false;
		this.showLoadingIndicator = true;

		this.commerceService
			.getRatpCommerceData(postCode)
			.subscribe((data: RatpResponse) => {
				this.postalCode = data.parameters.q;
				this.ratpData = data.records;
				this.initialState = false;
				if (this.ratpData.length > 0) {
					this.dataToShow = true;

					this.ville = this.ratpData[0].fields.dea_commune_livraison;
					this.dataLength = this.ratpData.length;
					this.date = this.ratpData[0].record_timestamp;
				} else {
					this.dataToShow = false;
				}
				this.showLoadingIndicator = false; // Hide loading indicator
			});
	}

	trackByFn(index: number, data: Record): string {
		return data.datasetid;
	}

	clearSearch(): void {
		this.displayCleared = true;
		this.formSubmitted = false;
		this.form.reset();
		this.initialState = true;
		this.dataToShow = false;
		this.ratpData = [];
		this.postalCode = '';
		this.ville = '';
		this.dataLength = 0;
		this.date = '';
	}
}

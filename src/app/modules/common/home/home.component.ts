import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { environment } from '../../../../environments/environment';
import { CommerceService } from './services/commerce.service';
import { RatpResponse, Record } from './models/ratp-commerce';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
})
export class HomeComponent {
	@ViewChild('form') form: NgForm;
	formSubmitted = false;
	name = environment.application.name;

	// status variables
	initialState = true;
	dataToShow = false;
	displayCleared = false;

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
			});
	}

	trackByFn(index: number, data: Record): string {
		return data.recordid;
	}

	clearSearch(): void {
		this.displayCleared = true;
		this.formSubmitted = false;
	}
}

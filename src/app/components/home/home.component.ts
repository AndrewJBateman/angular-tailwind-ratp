import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { CommerceService } from './services/commerce.service';
import { RatpResponse, Record } from './models/ratp-commerce';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  formSubmitted = false;
  name = environment.application.name;

  // status variables
  initialState = true;
  dataToShow = false;
  displayCleared = false;

  // API data variables
  ratpData: Record[] = [];
  postalCode: number = 0;
  ville: string = '';
  dataLength: number = 0;
  date: string = '';

  constructor(private commerceService: CommerceService) {}

  ngOnInit(): void {}

  onSubmitForm(postCodeSearch: NgForm): void {
    this.onSearchData(postCodeSearch.value.search);
    this.formSubmitted = true;
  }

  onSearchData(postCode: string): void {
    this.commerceService.getRatpCommerceData(postCode).subscribe((data: RatpResponse) => {
      this.ratpData = data.records;
      this.initialState = false;
      if (this.ratpData.length > 0) {
        this.dataToShow = true;
        this.postalCode = this.ratpData[0].fields.code_postal;
        this.ville = this.ratpData[0].fields.ville;
        this.dataLength = this.ratpData.length;
        this.date = this.ratpData[0].record_timestamp;
      } else {
        this.dataToShow = false;
      }
    });
  }

  trackByFn(index: number, data: any): number {
    return data;
  }

  clearSearch(): void {
    this.displayCleared = true;
    this.formSubmitted = false;
  }
}

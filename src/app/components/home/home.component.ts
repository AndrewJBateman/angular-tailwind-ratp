import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { environment } from '../../../environments/environment';
import { RatpService } from '../../services/ratp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = environment.application.name;
  form: NgForm;

  // status variables
  initialState = true;
  dataToShow = false;
  displayCleared = false;

  // API data variables
  ratpData: any;
  postalCode: string;
  ville: string;
  dataLength: number;
  date: string;

  constructor(private ratpService: RatpService) {}

  ngOnInit(): void {
  }

  submitForm(postCodeSearch: any) {
    this.onSearchData(postCodeSearch.value.search);
  }

  onSearchData(postCode: string): void {
    this.ratpService.getRatpData(postCode).subscribe((data: any) => {
      this.ratpData = data.records;
      if (this.ratpData.length > 0) {
        this.initialState = false;
        this.dataToShow = true;
        this.postalCode = this.ratpData[0].fields.code_postal;
        this.ville = this.ratpData[0].fields.ville;
        this.dataLength = this.ratpData.length;
        this.date = this.ratpData[0].record_timestamp;
      } else if (this.ratpData = []) {
        this.dataToShow = false;
      }
    });
  }

  clearSearch() {
    this.displayCleared = true;
  }
}

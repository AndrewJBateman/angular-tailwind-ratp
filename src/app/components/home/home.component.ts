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
  ratpData: any;
  postalCode: string;
  ville: string;
  form: NgForm;
  displayCleared = false;

  constructor(private ratpService: RatpService) {}

  ngOnInit(): void {
  }

  submitForm(postCodeSearch: any) {
    console.log('submitForm using postCodeSearch.value.search:', postCodeSearch.value.search);
    this.onSearchData(postCodeSearch.value.search);
  }

  onSearchData(postCode: string): void {
    this.ratpService.getRatpData(postCode).subscribe((data: any) => {
      this.ratpData = data.records;
      this.postalCode = this.ratpData[0].fields.code_postal;
      this.ville = this.ratpData[0].fields.ville;
    });
  }

  clearSearch() {
    this.displayCleared = true;
  }
}

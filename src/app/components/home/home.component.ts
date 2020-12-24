import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { RatpService } from '../../services/ratp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = environment.application.name;
  ratpData;

  constructor(private ratpService: RatpService) {}

  ngOnInit(): void {
    this.ratpService.getRatpData('95870').subscribe((data: any) => {
      this.ratpData = data.records;
      console.log('ratpData: ', this.ratpData);
    });
  }
}

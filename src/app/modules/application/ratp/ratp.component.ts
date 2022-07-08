import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { RatpTraffic } from './models/ratp-traffic';
import { TrafficService } from './services/traffic.service';

@Component({
  selector: 'app-ratp',
  templateUrl: './ratp.component.html',
  styleUrls: ['./ratp.component.css'],
})
export class RatpComponent implements OnInit {
  public ratpTraffic$: Observable<any>;
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
    this.activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getRatpTraffic();
    this.loading = false;
  }

  private getRatpTraffic = () => {
    try {
      this.ratpTraffic$ = this.trafficService.getRatpTrafficData();
    } catch (error) {
      throw error;
    }
  };

  onOpenCardDetail = () => {
    console.log('clicked');
  };
}

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
  public tramwayTraffic: RatpTraffic[];
  public metroTraffic: RatpTraffic[];
  public rerTraffic: RatpTraffic[];
  public id: string | null;

  public loading = true;
  defaultRatpMessage = "Trafic normal sur l'ensemble de la ligne.";

  constructor(
    private trafficService: TrafficService,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('id:', this.id, 'type', typeof this.id);
    });
    this.getRatpTraffic();
    this.loading = false;
  }

  private getRatpTraffic = () => {
    try {
      const trafficId = this.id;
      console.log('traffic: ', trafficId);
      this.trafficService.getRatpTrafficData().subscribe((dataTraffic) => {
        this.traffic = dataTraffic.result.trafficId;
        this.metroTraffic = dataTraffic.result.metros;
        this.rerTraffic = dataTraffic.result.rers;
        this.tramwayTraffic = dataTraffic.result.tramways;
      });
    } catch (error) {
      throw error;
    }
  };

  onOpenCardDetail = () => {
    console.log('clicked');
  };
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RatpTraffic } from './models/ratp-traffic';
import { TrafficService } from './services/traffic.service';

@Component({
  selector: 'app-ratp',
  templateUrl: './ratp.component.html',
  styleUrls: ['./ratp.component.css']
})
export class RatpComponent implements OnInit {
  public ratpTraffic$: Observable<any>
  public tramwayTraffic: RatpTraffic[];
  public metroTraffic: RatpTraffic[];
  public rerTraffic: RatpTraffic[];

  public loading = true;
  defaultRatpMessage = "Trafic normal sur l'ensemble de la ligne.";

  constructor(private trafficService: TrafficService) { }

  ngOnInit(): void {
    this.getRatpTraffic()
    this.loading = false;
  }

  private getRatpTraffic = () => {
    try {
      this.trafficService
      .getRatpTrafficData().subscribe(
        dataTraffic => {
          this.metroTraffic = dataTraffic.result.metros
          this.rerTraffic = dataTraffic.result.rers
          this.tramwayTraffic = dataTraffic.result.tramways
        }
      )
    } catch (error) {
      throw error;
    }
  };

  onOpenCardDetail = () => {
    console.log('clicked')
  }
}

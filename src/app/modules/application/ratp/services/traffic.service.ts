import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { RatpTrafficApiResponse } from '../models/ratp-traffic';

const trafficSearchUrl = 'https://api-ratp.pierre-grimaud.fr/v4/traffic';

@Injectable({
  providedIn: 'root',
})
export class TrafficService {
  private ratpTrafficData: Observable<RatpTrafficApiResponse>;

  constructor(private http: HttpClient) {}

  getRatpTrafficData(): Observable<RatpTrafficApiResponse> {
    return (this.ratpTrafficData = this.http
      .get<RatpTrafficApiResponse>(trafficSearchUrl)
      .pipe(
        tap((response: any) => console.log('traffic response: ', response)),
        take(1),
        catchError((err) => {
          throw 'error in getting API data. Details: ' + err;
        })
      ));
  }
}

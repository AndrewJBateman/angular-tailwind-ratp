import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

import { RatpResponse } from '../../../common/home/models/ratp-commerce';

const baseUrl = 'https://data.ratp.fr/api/records/1.0/search/?';
const trafficSearchUrl = 'https://api-ratp.pierre-grimaud.fr/v4/traffic';

@Injectable({
  providedIn: 'root',
})
export class CommerceService {
  private ratpCommerceData: Observable<RatpResponse>;
  private ratpTrafficData: Observable<any>;
  private ratpTrafficResponseData: Observable<any>;

  constructor(private http: HttpClient) {}

  getRatpCommerceData(query: string): Observable<RatpResponse> {
    const userSearchUrl = `${baseUrl}dataset=commerces-de-proximite-agrees-ratp&q=${query}&rows=1052&sort=-code_postal&facet=tco_libelle&facet=code_postal`;
    this.ratpCommerceData = this.http.get<RatpResponse>(userSearchUrl).pipe(
      take(1),
      catchError((err) => {
        throw 'error in getting API data. Details: ' + err;
      })
    );
    return this.ratpCommerceData;
  }

  getRatpTrafficData(): Observable<any> {
    return (this.ratpTrafficData = this.http.get<any>(trafficSearchUrl).pipe(
      tap((response: any) => console.log('traffic response: ', response)),
      take(1),
      catchError((err) => {
        throw 'error in getting API data. Details: ' + err;
      })
    ));
  }
}

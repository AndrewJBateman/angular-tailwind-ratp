import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { RatpResponse } from '../models/ratp';

const baseUrl = 'https://data.ratp.fr/api/records/1.0/search/?';

@Injectable({
  providedIn: 'root',
})
export class RatpService {
  constructor(private http: HttpClient) {}

  getRatpData(query: string): Observable<RatpResponse> {
    const userSearchUrl = `${baseUrl}dataset=liste-des-commerces-de-proximite-agrees-ratp&q=${query}&rows=1052&sort=-code_postal&facet=tco_libelle&facet=code_postal`;
    return this.http.get<RatpResponse>(userSearchUrl).pipe(
      tap((data: RatpResponse) => console.log('RATP service data: ', data)),
      map((data: RatpResponse) => data),
      catchError((err) => {
        return throwError(
          'There was a problem fetching data from the RATP API, error: ',
          err
        );
      })
    );
  }
}

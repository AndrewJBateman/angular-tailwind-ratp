/**
 * TrafficService class, responsible for fetching RATP traffic data from an API.
 * It uses the HttpClient module from Angular to make HTTP requests.
 * The getRatpTrafficData method sends a GET request to the specified API URL and
 * returns an Observable of type RatpTrafficApiResponse.
 * It applies the first operator to take only the first emitted value, catchError
 * operator to handle any errors that occur during the request,
 * and map operator to transform the response into the desired type.
 * If the response is invalid or empty, an error is thrown.
 */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';
import { RatpTrafficApiResponse } from '../models/ratp-traffic';
import { environment } from '../../../../../environments/environment';

const trafficSearchUrl = environment.ratp.apiUrl;

@Injectable({
	providedIn: 'root',
})
export class TrafficService {
	private http = inject(HttpClient);

	getRatpTrafficData(): Observable<RatpTrafficApiResponse> {
		return this.http.get<RatpTrafficApiResponse>(trafficSearchUrl).pipe(
			first(),
			catchError(err => {
				return throwError(`Error in getting API data: ${err}`);
			}),
			map((response: RatpTrafficApiResponse) => {
				if (!response) {
					throw new Error('Invalid API response');
				}
				return response;
			})
		);
	}
}

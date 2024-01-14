/**
 * CommerceService class responsible for fetching RATP commerce data from an API.
 *
 * @class
 * @name CommerceService
 * @public
 */
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RatpResponse } from '../../../common/home/models/ratp-commerce';

@Injectable({
	providedIn: 'root',
})
export class CommerceService {
	private http = inject(HttpClient);
	private readonly baseUrl = 'https://data.ratp.fr/api/records/1.0/search/?';
	private ratpCommerceData: Observable<RatpResponse>;

	getRatpCommerceData(query: string): Observable<RatpResponse> {
		const params = new HttpParams()
			.set('dataset', 'commerces-de-proximite-agrees-ratp')
			.set('q', query)
			.set('rows', '10')
			.set('refine.sort', '-code_postal');

		const userSearchUrl = `${this.baseUrl}${params.toString()}`;

		this.ratpCommerceData = this.http.get<RatpResponse>(userSearchUrl).pipe(
			catchError(err => {
				throw new Error('Error in getting API data. Details: ' + err);
			})
		);

		return this.ratpCommerceData;
	}
}

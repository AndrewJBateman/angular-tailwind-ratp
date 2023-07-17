import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

import { RatpResponse } from '../../../common/home/models/ratp-commerce';

const baseUrl = 'https://data.ratp.fr/api/records/1.0/search/?';

@Injectable({
	providedIn: 'root',
})
export class CommerceService {
	private ratpCommerceData: Observable<RatpResponse>;

	constructor(private http: HttpClient) {}

	getRatpCommerceData(query: string): Observable<RatpResponse> {
		const userSearchUrl = `${baseUrl}dataset=commerces-de-proximite-agrees-ratp&q=${query}&rows=10&refine.sort=-code_postal`;
		this.ratpCommerceData = this.http.get<RatpResponse>(userSearchUrl).pipe(
			tap(data => console.log(data)),
			take(1),
			catchError(err => {
				throw 'error in getting API data. Details: ' + err;
			})
		);
		return this.ratpCommerceData;
	}
}

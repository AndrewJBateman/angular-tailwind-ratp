import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { User } from '../models/user';

const baseUrl = 'https://api.github.com/users/';

@Injectable({
	providedIn: 'root',
})
export class GithubService {
	constructor(private http: HttpClient) {}

	getUser(user: string): Observable<User> {
		const userSearchUrl = `${baseUrl + user}`;
		return this.http.get<User>(userSearchUrl).pipe(
			take(1),
			catchError(err => {
				throw 'error in getting API data. Details: ' + err;
			})
		);
	}
}

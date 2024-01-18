/**
 * This is a TypeScript class called GithubService.
 * It is an Angular service that interacts with the GitHub API to retrieve user data.
 * The class has a constructor that injects the HttpClient dependency.
 * The class has a method called getUser that takes a string parameter representing
 * the username of the user to retrieve.
 * The method sends an HTTP GET request to the GitHub API with the provided username
 * as a query parameter.
 * It returns an Observable of type User, which represents the user data retrieved
 * from the API.
 * The method also includes error handling logic using the catchError operator from
 * the RxJS library.
 * If an error occurs during the API request, it throws an error with a specific message.
 * The class is decorated with the @Injectable decorator, indicating that it can be injected
 * as a dependency in other Angular components.
 * The providedIn property of the decorator is set to 'root', meaning that a single instance
 * of the service will be created and shared across the entire application.
 * The class also imports various dependencies from the Angular and RxJS libraries, including
 * Injectable, HttpClient, HttpParams, Observable, throwError, catchError, take, and retry.
 * It also imports a User model from a separate file.
 * The class defines a constant variable called baseUrl, which represents the base URL of the GitHub API.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take, retry } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

import { User } from '../models/user';

@Injectable({
	providedIn: 'root',
})
export class GithubService {
	constructor(private http: HttpClient) {}

	getUser(user: string): Observable<User> {
		const baseUrl = environment.github.apiUrl;
		const userSearchUrl = `${baseUrl}${user}`;
		return this.http.get<User>(userSearchUrl).pipe(
			take(1),
			retry(3),
			catchError(err => {
				return throwError('error in getting API data. Details: ' + err);
			})
		);
	}
}

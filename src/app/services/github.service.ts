import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { User } from '../models/user';

const baseUrl = "https://api.github.com/users/";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUser(user: string): Observable<User> {
    const userSearchUrl = `${baseUrl + user}`;
    return this.http
      .get<User>(userSearchUrl)
      .pipe(
        map((data: User) => data),
        catchError((err) => {
          return throwError(
            "There was a problem fetching data from Github API, error: ",
            err
          );
        })
      );
  }
}

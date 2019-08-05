import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserInterface } from '../../../interfaces';
import { PaginationApiService } from './pagination-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: Http,
    private paginationApiService: PaginationApiService
  ) {}

  fetchPaginationInfo(page: number): Observable<any> {
    return this.paginationApiService.fetchPaginationInfo(page);
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http
      .get(`https://reqres.in/api/users/${id}`)
      .pipe(map(response => response.json().data));
  }
}

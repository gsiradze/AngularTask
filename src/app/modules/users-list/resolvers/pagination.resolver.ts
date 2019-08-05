import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { ApiService } from '../../core/services';

@Injectable()
export class PaginationResolver {
  constructor(private apiService: ApiService) {}

  resolve(activatedRoute: ActivatedRouteSnapshot) {
    const page: number = activatedRoute.queryParams['page'] || 1;
    return this.apiService.fetchPaginationInfo(page);
  }
}

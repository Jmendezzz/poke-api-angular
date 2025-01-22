import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Pagination } from '../models/pagination.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_PAGINATION_LIMIT, DEFAULT_PAGINATION_OFFSET } from '../constants/PaginationConstant';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private readonly $paginationParams: Observable<Pagination>;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {
    this.$paginationParams = this.route.queryParamMap.pipe(
      map((params) => ({
        limit: Number(params.get('limit')) || DEFAULT_PAGINATION_LIMIT,
        offset: Number(params.get('offset')) || DEFAULT_PAGINATION_OFFSET
      }))
    ), shareReplay(1);
  }

  get paginationParams(): Observable<Pagination> {
    return this.$paginationParams;
  }

  updatePaginationParams(pagination: Pagination): void {
    this.router.navigate([], {
      queryParams: {
        limit: pagination.limit,
        offset: pagination.offset
      },
      queryParamsHandling: 'merge'
    })
  }
}

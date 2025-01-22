import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Pagination } from '../../models/pagination.model';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss']
})
export abstract class FetchDataComponent<T> implements OnInit, OnDestroy {
  data: T | undefined;
  isLoading = true;

  private readonly destroy$ = new Subject<void>(); 

  constructor(private readonly paginationService?: PaginationService) {}

  abstract fetchData(pagination?: Pagination): Observable<T>;

  loadInitialData() {
    this.isLoading = true;
    
    if(this.paginationService) {
    this.paginationService.paginationParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((pagination) => {
        this.fetchData(pagination)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (data) => {
              this.data = data;
              this.isLoading = false;
            },
            error: (error) => {
              console.error(error);
              this.isLoading = false;
            }
          });
      });
    }else{
      this.fetchData()
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (data) => {
              this.data = data;
              this.isLoading = false;
            },
            error: (error) => {
              console.error(error);
              this.isLoading = false;
            }
          });
    }
  }
  
  ngOnInit() {
    this.loadInitialData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

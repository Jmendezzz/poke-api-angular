import { Component, Input, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number = 0;
  @Input() itemsPerPageOptions: number[] = [10, 20, 50];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 0;
  maxPagesToShow: number = 5;

  constructor(private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.paginationService.paginationParams.subscribe((pagination: Pagination) => {
      this.itemsPerPage = pagination.limit;
      this.currentPage = Math.floor(pagination.offset / pagination.limit) + 1;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.paginationService.updatePaginationParams({ limit: this.itemsPerPage, offset: this.getOffset() });
    this.scrollToTop();
  }

  changeItemsPerPage(limit: number): void {
    this.itemsPerPage = limit;
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.paginationService.updatePaginationParams({ limit: this.itemsPerPage, offset: this.getOffset() });
    this.scrollToTop();
  }

  private getOffset(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get pages(): number[] {
    const pages = [];
    const half = Math.floor(this.maxPagesToShow / 2);
    let start = Math.max(1, this.currentPage - half);
    let end = Math.min(this.totalPages, this.currentPage + half);

    if (this.currentPage - half < 1) {
      end = Math.min(this.totalPages, end + (half - (this.currentPage - 1)));
    }

    if (this.currentPage + half > this.totalPages) {
      start = Math.max(1, start - (this.currentPage + half - this.totalPages));
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
import md5 from 'crypto-js/md5';
import { PaginationParams } from '../models/pagination.model';
import { PaginationService } from './pagination.service';
import { getTestBed, inject, TestBed } from '@angular/core/testing';

describe('Service: PaginationService', () => {
  let injector: any;
  let paginationServ: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationService]
    });

    injector = getTestBed();

    paginationServ = injector.get(PaginationService);
  });

  it('#getPager', () => {
    let paginationParams: PaginationParams = {
      currentPage: 1,
      limit: 20,
      offset: 0,
      total: 1000
    };

    expect(paginationServ.getPager(paginationParams).pagesTotal).toBe(50);
    expect(paginationServ.getPager(paginationParams).text).toBe('1 of 50');
  });
});

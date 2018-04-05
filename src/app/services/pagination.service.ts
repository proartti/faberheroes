import { PaginationParams } from '../models/pagination.model';

export class PaginationService {
  getPager(params: PaginationParams): PaginationParams {
    // calculate total pages
    let pagesTotal = Math.ceil(params.total / params.limit);
    // calculate offset
    let offset = (params.currentPage - 1) * params.limit;

    let paginationText = params.currentPage + ' of ' + pagesTotal;

    // return object with all pager properties required by the view
    return {
      total: params.total,
      currentPage: params.currentPage,
      limit: params.limit,
      offset: offset,
      pagesTotal: pagesTotal,
      text: paginationText
    };
  }
}

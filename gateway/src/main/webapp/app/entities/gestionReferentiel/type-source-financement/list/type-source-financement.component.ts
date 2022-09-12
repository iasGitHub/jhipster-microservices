import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';
import { combineLatest, filter, Observable, switchMap, tap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ITypeSourceFinancement } from '../type-source-financement.model';

import { ITEMS_PER_PAGE, PAGE_HEADER, TOTAL_COUNT_RESPONSE_HEADER } from 'app/config/pagination.constants';
import { ASC, DESC, SORT, ITEM_DELETED_EVENT, DEFAULT_SORT_DATA } from 'app/config/navigation.constants';
import { EntityArrayResponseType, TypeSourceFinancementService } from '../service/type-source-financement.service';
import { TypeSourceFinancementDeleteDialogComponent } from '../delete/type-source-financement-delete-dialog.component';

@Component({
  selector: 'jhi-type-source-financement',
  templateUrl: './type-source-financement.component.html',
})
export class TypeSourceFinancementComponent implements OnInit {
  typeSourceFinancements?: ITypeSourceFinancement[];
  isLoading = false;

  predicate = 'id';
  ascending = true;

  itemsPerPage = 10;
  totalItems = 0;
  page = 1;

  motCleRecherche: string = '';

  constructor(
    protected typeSourceFinancementService: TypeSourceFinancementService,
    protected activatedRoute: ActivatedRoute,
    public router: Router,
    protected modalService: NgbModal
  ) {}

  trackId = (_index: number, item: ITypeSourceFinancement): number =>
    this.typeSourceFinancementService.getTypeSourceFinancementIdentifier(item);

  ngOnInit(): void {
    this.load();
  }

  delete(typeSourceFinancement: ITypeSourceFinancement): void {
    const modalRef = this.modalService.open(TypeSourceFinancementDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.typeSourceFinancement = typeSourceFinancement;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed
      .pipe(
        filter(reason => reason === ITEM_DELETED_EVENT),
        switchMap(() => this.loadFromBackendWithRouteInformations())
      )
      .subscribe({
        next: (res: EntityArrayResponseType) => {
          this.onResponseSuccess(res);
        },
      });
  }

  load(): void {
    this.loadFromBackendWithRouteInformations().subscribe({
      next: (res: EntityArrayResponseType) => {
        this.onResponseSuccess(res);
      },
    });
  }

  navigateToWithComponentValues(): void {
    this.handleNavigation(this.page, this.predicate, this.ascending);
  }

  navigateToPage(page = this.page): void {
    this.handleNavigation(page, this.predicate, this.ascending);
  }

  protected loadFromBackendWithRouteInformations(): Observable<EntityArrayResponseType> {
    return combineLatest([this.activatedRoute.queryParamMap, this.activatedRoute.data]).pipe(
      tap(([params, data]) => this.fillComponentAttributeFromRoute(params, data)),
      switchMap(() => this.queryBackend(this.page, this.predicate, this.ascending))
    );
  }

  protected fillComponentAttributeFromRoute(params: ParamMap, data: Data): void {
    const page = params.get(PAGE_HEADER);
    this.page = +(page ?? 1);
    const sort = (params.get(SORT) ?? data[DEFAULT_SORT_DATA]).split(',');
    this.predicate = sort[0];
    this.ascending = sort[1] === ASC;
  }

  protected onResponseSuccess(response: EntityArrayResponseType): void {
    this.fillComponentAttributesFromResponseHeader(response.headers);
    const dataFromBody = this.fillComponentAttributesFromResponseBody(response.body);
    this.typeSourceFinancements = dataFromBody;
  }

  protected fillComponentAttributesFromResponseBody(data: ITypeSourceFinancement[] | null): ITypeSourceFinancement[] {
    return data ?? [];
  }

  protected fillComponentAttributesFromResponseHeader(headers: HttpHeaders): void {
    this.totalItems = Number(headers.get(TOTAL_COUNT_RESPONSE_HEADER));
  }

  protected queryBackend(page?: number, predicate?: string, ascending?: boolean): Observable<EntityArrayResponseType> {
    this.isLoading = true;
    const pageToLoad: number = page ?? 1;
    const queryObject = {
      page: pageToLoad - 1,
      size: this.itemsPerPage,
      sort: this.getSortQueryParam(predicate, ascending),
    };
    return this.typeSourceFinancementService.query(queryObject).pipe(tap(() => (this.isLoading = false)));
  }

  protected handleNavigation(page = this.page, predicate?: string, ascending?: boolean): void {
    const queryParamsObj = {
      page,
      size: this.itemsPerPage,
      sort: this.getSortQueryParam(predicate, ascending),
    };

    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      queryParams: queryParamsObj,
    });
  }

  protected getSortQueryParam(predicate = this.predicate, ascending = this.ascending): string[] {
    const ascendingQueryParam = ascending ? ASC : DESC;
    if (predicate === '') {
      return [];
    } else {
      return [predicate + ',' + ascendingQueryParam];
    }
  }

  Search() {
    if (this.motCleRecherche == "") {
      this.ngOnInit();
    } else {
      // @ts-ignore
      this.typeSourceFinancements = this.typeSourceFinancements.filter(res => {
        // @ts-ignore
        return res.libelle.toLocaleLowerCase().match(this.motCleRecherche.toLocaleLowerCase());
      })
    }
  }

}

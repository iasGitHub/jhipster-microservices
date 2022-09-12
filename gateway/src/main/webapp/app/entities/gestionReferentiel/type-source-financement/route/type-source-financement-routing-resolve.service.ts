import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITypeSourceFinancement } from '../type-source-financement.model';
import { TypeSourceFinancementService } from '../service/type-source-financement.service';

@Injectable({ providedIn: 'root' })
export class TypeSourceFinancementRoutingResolveService implements Resolve<ITypeSourceFinancement | null> {
  constructor(protected service: TypeSourceFinancementService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITypeSourceFinancement | null | never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((typeSourceFinancement: HttpResponse<ITypeSourceFinancement>) => {
          if (typeSourceFinancement.body) {
            return of(typeSourceFinancement.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(null);
  }
}

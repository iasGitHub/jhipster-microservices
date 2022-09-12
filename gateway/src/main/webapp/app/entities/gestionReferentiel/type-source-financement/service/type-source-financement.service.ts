import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITypeSourceFinancement, NewTypeSourceFinancement } from '../type-source-financement.model';

export type PartialUpdateTypeSourceFinancement = Partial<ITypeSourceFinancement> & Pick<ITypeSourceFinancement, 'id'>;

export type EntityResponseType = HttpResponse<ITypeSourceFinancement>;
export type EntityArrayResponseType = HttpResponse<ITypeSourceFinancement[]>;

@Injectable({ providedIn: 'root' })
export class TypeSourceFinancementService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/type-source-financements', 'gestionreferentiel');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(typeSourceFinancement: NewTypeSourceFinancement): Observable<EntityResponseType> {
    return this.http.post<ITypeSourceFinancement>(this.resourceUrl, typeSourceFinancement, { observe: 'response' });
  }

  update(typeSourceFinancement: ITypeSourceFinancement): Observable<EntityResponseType> {
    return this.http.put<ITypeSourceFinancement>(
      `${this.resourceUrl}/${this.getTypeSourceFinancementIdentifier(typeSourceFinancement)}`,
      typeSourceFinancement,
      { observe: 'response' }
    );
  }

  partialUpdate(typeSourceFinancement: PartialUpdateTypeSourceFinancement): Observable<EntityResponseType> {
    return this.http.patch<ITypeSourceFinancement>(
      `${this.resourceUrl}/${this.getTypeSourceFinancementIdentifier(typeSourceFinancement)}`,
      typeSourceFinancement,
      { observe: 'response' }
    );
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITypeSourceFinancement>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITypeSourceFinancement[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTypeSourceFinancementIdentifier(typeSourceFinancement: Pick<ITypeSourceFinancement, 'id'>): number {
    return typeSourceFinancement.id;
  }

  compareTypeSourceFinancement(o1: Pick<ITypeSourceFinancement, 'id'> | null, o2: Pick<ITypeSourceFinancement, 'id'> | null): boolean {
    return o1 && o2 ? this.getTypeSourceFinancementIdentifier(o1) === this.getTypeSourceFinancementIdentifier(o2) : o1 === o2;
  }

  addTypeSourceFinancementToCollectionIfMissing<Type extends Pick<ITypeSourceFinancement, 'id'>>(
    typeSourceFinancementCollection: Type[],
    ...typeSourceFinancementsToCheck: (Type | null | undefined)[]
  ): Type[] {
    const typeSourceFinancements: Type[] = typeSourceFinancementsToCheck.filter(isPresent);
    if (typeSourceFinancements.length > 0) {
      const typeSourceFinancementCollectionIdentifiers = typeSourceFinancementCollection.map(
        typeSourceFinancementItem => this.getTypeSourceFinancementIdentifier(typeSourceFinancementItem)!
      );
      const typeSourceFinancementsToAdd = typeSourceFinancements.filter(typeSourceFinancementItem => {
        const typeSourceFinancementIdentifier = this.getTypeSourceFinancementIdentifier(typeSourceFinancementItem);
        if (typeSourceFinancementCollectionIdentifiers.includes(typeSourceFinancementIdentifier)) {
          return false;
        }
        typeSourceFinancementCollectionIdentifiers.push(typeSourceFinancementIdentifier);
        return true;
      });
      return [...typeSourceFinancementsToAdd, ...typeSourceFinancementCollection];
    }
    return typeSourceFinancementCollection;
  }
}

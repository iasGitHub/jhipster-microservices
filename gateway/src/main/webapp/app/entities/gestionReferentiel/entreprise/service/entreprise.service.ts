import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IEntreprise, NewEntreprise } from '../entreprise.model';

export type PartialUpdateEntreprise = Partial<IEntreprise> & Pick<IEntreprise, 'id'>;

type RestOf<T extends IEntreprise | NewEntreprise> = Omit<T, 'dateCreation'> & {
  dateCreation?: string | null;
};

export type RestEntreprise = RestOf<IEntreprise>;

export type NewRestEntreprise = RestOf<NewEntreprise>;

export type PartialUpdateRestEntreprise = RestOf<PartialUpdateEntreprise>;

export type EntityResponseType = HttpResponse<IEntreprise>;
export type EntityArrayResponseType = HttpResponse<IEntreprise[]>;

@Injectable({ providedIn: 'root' })
export class EntrepriseService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/entreprises', 'gestionreferentiel');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(entreprise: NewEntreprise): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(entreprise);
    return this.http
      .post<RestEntreprise>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(entreprise: IEntreprise): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(entreprise);
    return this.http
      .put<RestEntreprise>(`${this.resourceUrl}/${this.getEntrepriseIdentifier(entreprise)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(entreprise: PartialUpdateEntreprise): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(entreprise);
    return this.http
      .patch<RestEntreprise>(`${this.resourceUrl}/${this.getEntrepriseIdentifier(entreprise)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestEntreprise>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestEntreprise[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getEntrepriseIdentifier(entreprise: Pick<IEntreprise, 'id'>): number {
    return entreprise.id;
  }

  compareEntreprise(o1: Pick<IEntreprise, 'id'> | null, o2: Pick<IEntreprise, 'id'> | null): boolean {
    return o1 && o2 ? this.getEntrepriseIdentifier(o1) === this.getEntrepriseIdentifier(o2) : o1 === o2;
  }

  addEntrepriseToCollectionIfMissing<Type extends Pick<IEntreprise, 'id'>>(
    entrepriseCollection: Type[],
    ...entreprisesToCheck: (Type | null | undefined)[]
  ): Type[] {
    const entreprises: Type[] = entreprisesToCheck.filter(isPresent);
    if (entreprises.length > 0) {
      const entrepriseCollectionIdentifiers = entrepriseCollection.map(entrepriseItem => this.getEntrepriseIdentifier(entrepriseItem)!);
      const entreprisesToAdd = entreprises.filter(entrepriseItem => {
        const entrepriseIdentifier = this.getEntrepriseIdentifier(entrepriseItem);
        if (entrepriseCollectionIdentifiers.includes(entrepriseIdentifier)) {
          return false;
        }
        entrepriseCollectionIdentifiers.push(entrepriseIdentifier);
        return true;
      });
      return [...entreprisesToAdd, ...entrepriseCollection];
    }
    return entrepriseCollection;
  }

  protected convertDateFromClient<T extends IEntreprise | NewEntreprise | PartialUpdateEntreprise>(entreprise: T): RestOf<T> {
    return {
      ...entreprise,
      dateCreation: entreprise.dateCreation?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restEntreprise: RestEntreprise): IEntreprise {
    return {
      ...restEntreprise,
      dateCreation: restEntreprise.dateCreation ? dayjs(restEntreprise.dateCreation) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestEntreprise>): HttpResponse<IEntreprise> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestEntreprise[]>): HttpResponse<IEntreprise[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}

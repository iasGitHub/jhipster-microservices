import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { TypeSourceFinancementFormService, TypeSourceFinancementFormGroup } from './type-source-financement-form.service';
import { ITypeSourceFinancement } from '../type-source-financement.model';
import { TypeSourceFinancementService } from '../service/type-source-financement.service';
import { IEntreprise } from 'app/entities/gestionReferentiel/entreprise/entreprise.model';
import { EntrepriseService } from 'app/entities/gestionReferentiel/entreprise/service/entreprise.service';

@Component({
  selector: 'jhi-type-source-financement-update',
  templateUrl: './type-source-financement-update.component.html',
})
export class TypeSourceFinancementUpdateComponent implements OnInit {
  isSaving = false;
  typeSourceFinancement: ITypeSourceFinancement | null = null;

  entreprisesSharedCollection: IEntreprise[] = [];

  editForm: TypeSourceFinancementFormGroup = this.typeSourceFinancementFormService.createTypeSourceFinancementFormGroup();

  constructor(
    protected typeSourceFinancementService: TypeSourceFinancementService,
    protected typeSourceFinancementFormService: TypeSourceFinancementFormService,
    protected entrepriseService: EntrepriseService,
    protected activatedRoute: ActivatedRoute
  ) {}

  compareEntreprise = (o1: IEntreprise | null, o2: IEntreprise | null): boolean => this.entrepriseService.compareEntreprise(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ typeSourceFinancement }) => {
      this.typeSourceFinancement = typeSourceFinancement;
      if (typeSourceFinancement) {
        this.updateForm(typeSourceFinancement);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const typeSourceFinancement = this.typeSourceFinancementFormService.getTypeSourceFinancement(this.editForm);
    if (typeSourceFinancement.id !== null) {
      this.subscribeToSaveResponse(this.typeSourceFinancementService.update(typeSourceFinancement));
    } else {
      this.subscribeToSaveResponse(this.typeSourceFinancementService.create(typeSourceFinancement));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITypeSourceFinancement>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(typeSourceFinancement: ITypeSourceFinancement): void {
    this.typeSourceFinancement = typeSourceFinancement;
    this.typeSourceFinancementFormService.resetForm(this.editForm, typeSourceFinancement);

    this.entreprisesSharedCollection = this.entrepriseService.addEntrepriseToCollectionIfMissing<IEntreprise>(
      this.entreprisesSharedCollection,
      typeSourceFinancement.entrepriseTypeSourceFinancement
    );
  }

  protected loadRelationshipsOptions(): void {
    this.entrepriseService
      .query()
      .pipe(map((res: HttpResponse<IEntreprise[]>) => res.body ?? []))
      .pipe(
        map((entreprises: IEntreprise[]) =>
          this.entrepriseService.addEntrepriseToCollectionIfMissing<IEntreprise>(
            entreprises,
            this.typeSourceFinancement?.entrepriseTypeSourceFinancement
          )
        )
      )
      .subscribe((entreprises: IEntreprise[]) => (this.entreprisesSharedCollection = entreprises));
  }
}

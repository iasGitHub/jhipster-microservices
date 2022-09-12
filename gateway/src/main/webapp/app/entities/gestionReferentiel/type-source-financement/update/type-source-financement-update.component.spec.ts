import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { TypeSourceFinancementFormService } from './type-source-financement-form.service';
import { TypeSourceFinancementService } from '../service/type-source-financement.service';
import { ITypeSourceFinancement } from '../type-source-financement.model';
import { IEntreprise } from 'app/entities/gestionReferentiel/entreprise/entreprise.model';
import { EntrepriseService } from 'app/entities/gestionReferentiel/entreprise/service/entreprise.service';

import { TypeSourceFinancementUpdateComponent } from './type-source-financement-update.component';

describe('TypeSourceFinancement Management Update Component', () => {
  let comp: TypeSourceFinancementUpdateComponent;
  let fixture: ComponentFixture<TypeSourceFinancementUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let typeSourceFinancementFormService: TypeSourceFinancementFormService;
  let typeSourceFinancementService: TypeSourceFinancementService;
  let entrepriseService: EntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [TypeSourceFinancementUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(TypeSourceFinancementUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(TypeSourceFinancementUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    typeSourceFinancementFormService = TestBed.inject(TypeSourceFinancementFormService);
    typeSourceFinancementService = TestBed.inject(TypeSourceFinancementService);
    entrepriseService = TestBed.inject(EntrepriseService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call Entreprise query and add missing value', () => {
      const typeSourceFinancement: ITypeSourceFinancement = { id: 456 };
      const entrepriseTypeSourceFinancement: IEntreprise = { id: 76502 };
      typeSourceFinancement.entrepriseTypeSourceFinancement = entrepriseTypeSourceFinancement;

      const entrepriseCollection: IEntreprise[] = [{ id: 83900 }];
      jest.spyOn(entrepriseService, 'query').mockReturnValue(of(new HttpResponse({ body: entrepriseCollection })));
      const additionalEntreprises = [entrepriseTypeSourceFinancement];
      const expectedCollection: IEntreprise[] = [...additionalEntreprises, ...entrepriseCollection];
      jest.spyOn(entrepriseService, 'addEntrepriseToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ typeSourceFinancement });
      comp.ngOnInit();

      expect(entrepriseService.query).toHaveBeenCalled();
      expect(entrepriseService.addEntrepriseToCollectionIfMissing).toHaveBeenCalledWith(
        entrepriseCollection,
        ...additionalEntreprises.map(expect.objectContaining)
      );
      expect(comp.entreprisesSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const typeSourceFinancement: ITypeSourceFinancement = { id: 456 };
      const entrepriseTypeSourceFinancement: IEntreprise = { id: 28965 };
      typeSourceFinancement.entrepriseTypeSourceFinancement = entrepriseTypeSourceFinancement;

      activatedRoute.data = of({ typeSourceFinancement });
      comp.ngOnInit();

      expect(comp.entreprisesSharedCollection).toContain(entrepriseTypeSourceFinancement);
      expect(comp.typeSourceFinancement).toEqual(typeSourceFinancement);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITypeSourceFinancement>>();
      const typeSourceFinancement = { id: 123 };
      jest.spyOn(typeSourceFinancementFormService, 'getTypeSourceFinancement').mockReturnValue(typeSourceFinancement);
      jest.spyOn(typeSourceFinancementService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ typeSourceFinancement });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: typeSourceFinancement }));
      saveSubject.complete();

      // THEN
      expect(typeSourceFinancementFormService.getTypeSourceFinancement).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(typeSourceFinancementService.update).toHaveBeenCalledWith(expect.objectContaining(typeSourceFinancement));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITypeSourceFinancement>>();
      const typeSourceFinancement = { id: 123 };
      jest.spyOn(typeSourceFinancementFormService, 'getTypeSourceFinancement').mockReturnValue({ id: null });
      jest.spyOn(typeSourceFinancementService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ typeSourceFinancement: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: typeSourceFinancement }));
      saveSubject.complete();

      // THEN
      expect(typeSourceFinancementFormService.getTypeSourceFinancement).toHaveBeenCalled();
      expect(typeSourceFinancementService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITypeSourceFinancement>>();
      const typeSourceFinancement = { id: 123 };
      jest.spyOn(typeSourceFinancementService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ typeSourceFinancement });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(typeSourceFinancementService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareEntreprise', () => {
      it('Should forward to entrepriseService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(entrepriseService, 'compareEntreprise');
        comp.compareEntreprise(entity, entity2);
        expect(entrepriseService.compareEntreprise).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});

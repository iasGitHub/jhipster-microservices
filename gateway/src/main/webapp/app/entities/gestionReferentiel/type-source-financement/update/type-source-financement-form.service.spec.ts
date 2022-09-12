import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../type-source-financement.test-samples';

import { TypeSourceFinancementFormService } from './type-source-financement-form.service';

describe('TypeSourceFinancement Form Service', () => {
  let service: TypeSourceFinancementFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeSourceFinancementFormService);
  });

  describe('Service methods', () => {
    describe('createTypeSourceFinancementFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createTypeSourceFinancementFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            code: expect.any(Object),
            libelle: expect.any(Object),
            entrepriseTypeSourceFinancement: expect.any(Object),
          })
        );
      });

      it('passing ITypeSourceFinancement should create a new form with FormGroup', () => {
        const formGroup = service.createTypeSourceFinancementFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            code: expect.any(Object),
            libelle: expect.any(Object),
            entrepriseTypeSourceFinancement: expect.any(Object),
          })
        );
      });
    });

    describe('getTypeSourceFinancement', () => {
      it('should return NewTypeSourceFinancement for default TypeSourceFinancement initial value', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const formGroup = service.createTypeSourceFinancementFormGroup(sampleWithNewData);

        const typeSourceFinancement = service.getTypeSourceFinancement(formGroup) as any;

        expect(typeSourceFinancement).toMatchObject(sampleWithNewData);
      });

      it('should return NewTypeSourceFinancement for empty TypeSourceFinancement initial value', () => {
        const formGroup = service.createTypeSourceFinancementFormGroup();

        const typeSourceFinancement = service.getTypeSourceFinancement(formGroup) as any;

        expect(typeSourceFinancement).toMatchObject({});
      });

      it('should return ITypeSourceFinancement', () => {
        const formGroup = service.createTypeSourceFinancementFormGroup(sampleWithRequiredData);

        const typeSourceFinancement = service.getTypeSourceFinancement(formGroup) as any;

        expect(typeSourceFinancement).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing ITypeSourceFinancement should not enable id FormControl', () => {
        const formGroup = service.createTypeSourceFinancementFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewTypeSourceFinancement should disable id FormControl', () => {
        const formGroup = service.createTypeSourceFinancementFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});

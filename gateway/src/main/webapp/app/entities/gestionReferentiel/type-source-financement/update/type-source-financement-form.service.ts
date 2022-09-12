import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITypeSourceFinancement, NewTypeSourceFinancement } from '../type-source-financement.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITypeSourceFinancement for edit and NewTypeSourceFinancementFormGroupInput for create.
 */
type TypeSourceFinancementFormGroupInput = ITypeSourceFinancement | PartialWithRequiredKeyOf<NewTypeSourceFinancement>;

type TypeSourceFinancementFormDefaults = Pick<NewTypeSourceFinancement, 'id'>;

type TypeSourceFinancementFormGroupContent = {
  id: FormControl<ITypeSourceFinancement['id'] | NewTypeSourceFinancement['id']>;
  code: FormControl<ITypeSourceFinancement['code']>;
  libelle: FormControl<ITypeSourceFinancement['libelle']>;
  entrepriseTypeSourceFinancement: FormControl<ITypeSourceFinancement['entrepriseTypeSourceFinancement']>;
};

export type TypeSourceFinancementFormGroup = FormGroup<TypeSourceFinancementFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class TypeSourceFinancementFormService {
  createTypeSourceFinancementFormGroup(
    typeSourceFinancement: TypeSourceFinancementFormGroupInput = { id: null }
  ): TypeSourceFinancementFormGroup {
    const typeSourceFinancementRawValue = {
      ...this.getFormDefaults(),
      ...typeSourceFinancement,
    };
    return new FormGroup<TypeSourceFinancementFormGroupContent>({
      id: new FormControl(
        { value: typeSourceFinancementRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      code: new FormControl(typeSourceFinancementRawValue.code),
      libelle: new FormControl(typeSourceFinancementRawValue.libelle),
      entrepriseTypeSourceFinancement: new FormControl(typeSourceFinancementRawValue.entrepriseTypeSourceFinancement),
    });
  }

  getTypeSourceFinancement(form: TypeSourceFinancementFormGroup): ITypeSourceFinancement | NewTypeSourceFinancement {
    return form.getRawValue() as ITypeSourceFinancement | NewTypeSourceFinancement;
  }

  resetForm(form: TypeSourceFinancementFormGroup, typeSourceFinancement: TypeSourceFinancementFormGroupInput): void {
    const typeSourceFinancementRawValue = { ...this.getFormDefaults(), ...typeSourceFinancement };
    form.reset(
      {
        ...typeSourceFinancementRawValue,
        id: { value: typeSourceFinancementRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): TypeSourceFinancementFormDefaults {
    return {
      id: null,
    };
  }
}

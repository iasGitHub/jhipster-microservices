import { ITypeSourceFinancement, NewTypeSourceFinancement } from './type-source-financement.model';

export const sampleWithRequiredData: ITypeSourceFinancement = {
  id: 81577,
};

export const sampleWithPartialData: ITypeSourceFinancement = {
  id: 5213,
  code: 'purple',
};

export const sampleWithFullData: ITypeSourceFinancement = {
  id: 46395,
  code: 'payment Émirats',
  libelle: 'Generic',
};

export const sampleWithNewData: NewTypeSourceFinancement = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

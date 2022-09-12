import dayjs from 'dayjs/esm';

import { IEntreprise, NewEntreprise } from './entreprise.model';

export const sampleWithRequiredData: IEntreprise = {
  id: 29492,
};

export const sampleWithPartialData: IEntreprise = {
  id: 46508,
};

export const sampleWithFullData: IEntreprise = {
  id: 55127,
  nom: 'Steel bus b',
  ninea: 'Manager',
  dateCreation: dayjs('2022-09-08'),
  nbreEmploye: 37090,
};

export const sampleWithNewData: NewEntreprise = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

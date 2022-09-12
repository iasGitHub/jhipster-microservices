import dayjs from 'dayjs/esm';

export interface IEntreprise {
  id: number;
  nom?: string | null;
  ninea?: string | null;
  dateCreation?: dayjs.Dayjs | null;
  nbreEmploye?: number | null;
}

export type NewEntreprise = Omit<IEntreprise, 'id'> & { id: null };

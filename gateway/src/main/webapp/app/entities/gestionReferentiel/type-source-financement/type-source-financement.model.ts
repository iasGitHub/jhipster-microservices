import { IEntreprise } from 'app/entities/gestionReferentiel/entreprise/entreprise.model';

export interface ITypeSourceFinancement {
  id: number;
  code?: string | null;
  libelle?: string | null;
  entrepriseTypeSourceFinancement?: Pick<IEntreprise, 'id'> | null;
}

export type NewTypeSourceFinancement = Omit<ITypeSourceFinancement, 'id'> & { id: null };

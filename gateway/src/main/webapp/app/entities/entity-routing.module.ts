import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'type-source-financement',
        data: { pageTitle: 'gatewayApp.gestionReferentielTypeSourceFinancement.home.title' },
        loadChildren: () =>
          import('./gestionReferentiel/type-source-financement/type-source-financement.module').then(
            m => m.GestionReferentielTypeSourceFinancementModule
          ),
      },
      {
        path: 'entreprise',
        data: { pageTitle: 'gatewayApp.gestionReferentielEntreprise.home.title' },
        loadChildren: () => import('./gestionReferentiel/entreprise/entreprise.module').then(m => m.GestionReferentielEntrepriseModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}

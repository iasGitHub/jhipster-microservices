import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { TypeSourceFinancementComponent } from './list/type-source-financement.component';
import { TypeSourceFinancementDetailComponent } from './detail/type-source-financement-detail.component';
import { TypeSourceFinancementUpdateComponent } from './update/type-source-financement-update.component';
import { TypeSourceFinancementDeleteDialogComponent } from './delete/type-source-financement-delete-dialog.component';
import { TypeSourceFinancementRoutingModule } from './route/type-source-financement-routing.module';

@NgModule({
  imports: [SharedModule, TypeSourceFinancementRoutingModule],
  declarations: [
    TypeSourceFinancementComponent,
    TypeSourceFinancementDetailComponent,
    TypeSourceFinancementUpdateComponent,
    TypeSourceFinancementDeleteDialogComponent,
  ],
})
export class GestionReferentielTypeSourceFinancementModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { TypeSourceFinancementComponent } from '../list/type-source-financement.component';
import { TypeSourceFinancementDetailComponent } from '../detail/type-source-financement-detail.component';
import { TypeSourceFinancementUpdateComponent } from '../update/type-source-financement-update.component';
import { TypeSourceFinancementRoutingResolveService } from './type-source-financement-routing-resolve.service';
import { ASC } from 'app/config/navigation.constants';

const typeSourceFinancementRoute: Routes = [
  {
    path: '',
    component: TypeSourceFinancementComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: TypeSourceFinancementDetailComponent,
    resolve: {
      typeSourceFinancement: TypeSourceFinancementRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: TypeSourceFinancementUpdateComponent,
    resolve: {
      typeSourceFinancement: TypeSourceFinancementRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: TypeSourceFinancementUpdateComponent,
    resolve: {
      typeSourceFinancement: TypeSourceFinancementRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(typeSourceFinancementRoute)],
  exports: [RouterModule],
})
export class TypeSourceFinancementRoutingModule {}

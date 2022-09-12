import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ITypeSourceFinancement } from '../type-source-financement.model';
import { TypeSourceFinancementService } from '../service/type-source-financement.service';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';

@Component({
  templateUrl: './type-source-financement-delete-dialog.component.html',
})
export class TypeSourceFinancementDeleteDialogComponent {
  typeSourceFinancement?: ITypeSourceFinancement;

  constructor(protected typeSourceFinancementService: TypeSourceFinancementService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.typeSourceFinancementService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}

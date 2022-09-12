jest.mock('@ng-bootstrap/ng-bootstrap');

import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TypeSourceFinancementService } from '../service/type-source-financement.service';

import { TypeSourceFinancementDeleteDialogComponent } from './type-source-financement-delete-dialog.component';

describe('TypeSourceFinancement Management Delete Component', () => {
  let comp: TypeSourceFinancementDeleteDialogComponent;
  let fixture: ComponentFixture<TypeSourceFinancementDeleteDialogComponent>;
  let service: TypeSourceFinancementService;
  let mockActiveModal: NgbActiveModal;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TypeSourceFinancementDeleteDialogComponent],
      providers: [NgbActiveModal],
    })
      .overrideTemplate(TypeSourceFinancementDeleteDialogComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(TypeSourceFinancementDeleteDialogComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(TypeSourceFinancementService);
    mockActiveModal = TestBed.inject(NgbActiveModal);
  });

  describe('confirmDelete', () => {
    it('Should call delete service on confirmDelete', inject(
      [],
      fakeAsync(() => {
        // GIVEN
        jest.spyOn(service, 'delete').mockReturnValue(of(new HttpResponse({ body: {} })));

        // WHEN
        comp.confirmDelete(123);
        tick();

        // THEN
        expect(service.delete).toHaveBeenCalledWith(123);
        expect(mockActiveModal.close).toHaveBeenCalledWith('deleted');
      })
    ));

    it('Should not call delete service on clear', () => {
      // GIVEN
      jest.spyOn(service, 'delete');

      // WHEN
      comp.cancel();

      // THEN
      expect(service.delete).not.toHaveBeenCalled();
      expect(mockActiveModal.close).not.toHaveBeenCalled();
      expect(mockActiveModal.dismiss).toHaveBeenCalled();
    });
  });
});

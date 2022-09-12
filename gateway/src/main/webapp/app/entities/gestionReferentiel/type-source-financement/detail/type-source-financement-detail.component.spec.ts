import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TypeSourceFinancementDetailComponent } from './type-source-financement-detail.component';

describe('TypeSourceFinancement Management Detail Component', () => {
  let comp: TypeSourceFinancementDetailComponent;
  let fixture: ComponentFixture<TypeSourceFinancementDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeSourceFinancementDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ typeSourceFinancement: { id: 123 } }) },
        },
      ],
    })
      .overrideTemplate(TypeSourceFinancementDetailComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(TypeSourceFinancementDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load typeSourceFinancement on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.typeSourceFinancement).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});

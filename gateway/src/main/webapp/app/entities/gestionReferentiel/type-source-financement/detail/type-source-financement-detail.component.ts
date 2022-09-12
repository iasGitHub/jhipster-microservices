import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITypeSourceFinancement } from '../type-source-financement.model';

@Component({
  selector: 'jhi-type-source-financement-detail',
  templateUrl: './type-source-financement-detail.component.html',
})
export class TypeSourceFinancementDetailComponent implements OnInit {
  typeSourceFinancement: ITypeSourceFinancement | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ typeSourceFinancement }) => {
      this.typeSourceFinancement = typeSourceFinancement;
    });
  }

  previousState(): void {
    window.history.back();
  }
}

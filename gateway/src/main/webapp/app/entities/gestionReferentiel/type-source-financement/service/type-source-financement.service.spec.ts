import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ITypeSourceFinancement } from '../type-source-financement.model';
import {
  sampleWithRequiredData,
  sampleWithNewData,
  sampleWithPartialData,
  sampleWithFullData,
} from '../type-source-financement.test-samples';

import { TypeSourceFinancementService } from './type-source-financement.service';

const requireRestSample: ITypeSourceFinancement = {
  ...sampleWithRequiredData,
};

describe('TypeSourceFinancement Service', () => {
  let service: TypeSourceFinancementService;
  let httpMock: HttpTestingController;
  let expectedResult: ITypeSourceFinancement | ITypeSourceFinancement[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(TypeSourceFinancementService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should create a TypeSourceFinancement', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typeSourceFinancement = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(typeSourceFinancement).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a TypeSourceFinancement', () => {
      const typeSourceFinancement = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(typeSourceFinancement).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a TypeSourceFinancement', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of TypeSourceFinancement', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a TypeSourceFinancement', () => {
      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addTypeSourceFinancementToCollectionIfMissing', () => {
      it('should add a TypeSourceFinancement to an empty array', () => {
        const typeSourceFinancement: ITypeSourceFinancement = sampleWithRequiredData;
        expectedResult = service.addTypeSourceFinancementToCollectionIfMissing([], typeSourceFinancement);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(typeSourceFinancement);
      });

      it('should not add a TypeSourceFinancement to an array that contains it', () => {
        const typeSourceFinancement: ITypeSourceFinancement = sampleWithRequiredData;
        const typeSourceFinancementCollection: ITypeSourceFinancement[] = [
          {
            ...typeSourceFinancement,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addTypeSourceFinancementToCollectionIfMissing(typeSourceFinancementCollection, typeSourceFinancement);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a TypeSourceFinancement to an array that doesn't contain it", () => {
        const typeSourceFinancement: ITypeSourceFinancement = sampleWithRequiredData;
        const typeSourceFinancementCollection: ITypeSourceFinancement[] = [sampleWithPartialData];
        expectedResult = service.addTypeSourceFinancementToCollectionIfMissing(typeSourceFinancementCollection, typeSourceFinancement);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(typeSourceFinancement);
      });

      it('should add only unique TypeSourceFinancement to an array', () => {
        const typeSourceFinancementArray: ITypeSourceFinancement[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const typeSourceFinancementCollection: ITypeSourceFinancement[] = [sampleWithRequiredData];
        expectedResult = service.addTypeSourceFinancementToCollectionIfMissing(
          typeSourceFinancementCollection,
          ...typeSourceFinancementArray
        );
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const typeSourceFinancement: ITypeSourceFinancement = sampleWithRequiredData;
        const typeSourceFinancement2: ITypeSourceFinancement = sampleWithPartialData;
        expectedResult = service.addTypeSourceFinancementToCollectionIfMissing([], typeSourceFinancement, typeSourceFinancement2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(typeSourceFinancement);
        expect(expectedResult).toContain(typeSourceFinancement2);
      });

      it('should accept null and undefined values', () => {
        const typeSourceFinancement: ITypeSourceFinancement = sampleWithRequiredData;
        expectedResult = service.addTypeSourceFinancementToCollectionIfMissing([], null, typeSourceFinancement, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(typeSourceFinancement);
      });

      it('should return initial array if no TypeSourceFinancement is added', () => {
        const typeSourceFinancementCollection: ITypeSourceFinancement[] = [sampleWithRequiredData];
        expectedResult = service.addTypeSourceFinancementToCollectionIfMissing(typeSourceFinancementCollection, undefined, null);
        expect(expectedResult).toEqual(typeSourceFinancementCollection);
      });
    });

    describe('compareTypeSourceFinancement', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareTypeSourceFinancement(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareTypeSourceFinancement(entity1, entity2);
        const compareResult2 = service.compareTypeSourceFinancement(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareTypeSourceFinancement(entity1, entity2);
        const compareResult2 = service.compareTypeSourceFinancement(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareTypeSourceFinancement(entity1, entity2);
        const compareResult2 = service.compareTypeSourceFinancement(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DATE_FORMAT } from 'app/config/input.constants';
import { IEntreprise } from '../entreprise.model';
import { sampleWithRequiredData, sampleWithNewData, sampleWithPartialData, sampleWithFullData } from '../entreprise.test-samples';

import { EntrepriseService, RestEntreprise } from './entreprise.service';

const requireRestSample: RestEntreprise = {
  ...sampleWithRequiredData,
  dateCreation: sampleWithRequiredData.dateCreation?.format(DATE_FORMAT),
};

describe('Entreprise Service', () => {
  let service: EntrepriseService;
  let httpMock: HttpTestingController;
  let expectedResult: IEntreprise | IEntreprise[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(EntrepriseService);
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

    it('should create a Entreprise', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const entreprise = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(entreprise).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Entreprise', () => {
      const entreprise = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(entreprise).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Entreprise', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Entreprise', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a Entreprise', () => {
      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addEntrepriseToCollectionIfMissing', () => {
      it('should add a Entreprise to an empty array', () => {
        const entreprise: IEntreprise = sampleWithRequiredData;
        expectedResult = service.addEntrepriseToCollectionIfMissing([], entreprise);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(entreprise);
      });

      it('should not add a Entreprise to an array that contains it', () => {
        const entreprise: IEntreprise = sampleWithRequiredData;
        const entrepriseCollection: IEntreprise[] = [
          {
            ...entreprise,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addEntrepriseToCollectionIfMissing(entrepriseCollection, entreprise);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Entreprise to an array that doesn't contain it", () => {
        const entreprise: IEntreprise = sampleWithRequiredData;
        const entrepriseCollection: IEntreprise[] = [sampleWithPartialData];
        expectedResult = service.addEntrepriseToCollectionIfMissing(entrepriseCollection, entreprise);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(entreprise);
      });

      it('should add only unique Entreprise to an array', () => {
        const entrepriseArray: IEntreprise[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const entrepriseCollection: IEntreprise[] = [sampleWithRequiredData];
        expectedResult = service.addEntrepriseToCollectionIfMissing(entrepriseCollection, ...entrepriseArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const entreprise: IEntreprise = sampleWithRequiredData;
        const entreprise2: IEntreprise = sampleWithPartialData;
        expectedResult = service.addEntrepriseToCollectionIfMissing([], entreprise, entreprise2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(entreprise);
        expect(expectedResult).toContain(entreprise2);
      });

      it('should accept null and undefined values', () => {
        const entreprise: IEntreprise = sampleWithRequiredData;
        expectedResult = service.addEntrepriseToCollectionIfMissing([], null, entreprise, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(entreprise);
      });

      it('should return initial array if no Entreprise is added', () => {
        const entrepriseCollection: IEntreprise[] = [sampleWithRequiredData];
        expectedResult = service.addEntrepriseToCollectionIfMissing(entrepriseCollection, undefined, null);
        expect(expectedResult).toEqual(entrepriseCollection);
      });
    });

    describe('compareEntreprise', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareEntreprise(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareEntreprise(entity1, entity2);
        const compareResult2 = service.compareEntreprise(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareEntreprise(entity1, entity2);
        const compareResult2 = service.compareEntreprise(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareEntreprise(entity1, entity2);
        const compareResult2 = service.compareEntreprise(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetCategoryService } from './get-category.service';

describe('Service: GetCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCategoryService]
    });
  });

  it('should ...', inject([GetCategoryService], (service: GetCategoryService) => {
    expect(service).toBeTruthy();
  }));
});

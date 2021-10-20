/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PortfolioServiceService } from './portfolioService.service';

describe('Service: PortfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioServiceService]
    });
  });

  it('should ...', inject([PortfolioServiceService], (service: PortfolioServiceService) => {
    expect(service).toBeTruthy();
  }));
});

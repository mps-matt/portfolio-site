import { TestBed } from '@angular/core/testing';
import { InMemoryPortfolioServiceService } from './in-memory-portfolio-service.service';

describe( 'InMemoryPortfolioServiceService', () => {
    let service: InMemoryPortfolioServiceService;

    beforeEach( () => {
        TestBed.configureTestingModule( {} );
        service = TestBed.inject( InMemoryPortfolioServiceService );
    } );

    it( 'should be created', () => {
        expect( service ).toBeTruthy();
    } );
} );

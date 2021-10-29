import { InMemoryPortfolioServiceService } from './in-memory-portfolio-service/in-memory-portfolio-service.service';
import { PortfolioServiceFactory } from './iportfolio-service.factory';
import { IPortfolioService } from './iportfolio-service.service';

describe( 'IPortfolioServiceFactory', () => {
    let factory: typeof PortfolioServiceFactory;

    beforeEach( () => {
        factory = PortfolioServiceFactory;
    } );

    it( 'should be created', () => {
        expect( factory ).toBeTruthy();
    } );

    it( 'should return InMemoryPortfolioServiceProvider', () => {
        const portfolioServiceProvider: IPortfolioService = factory();
        expect( portfolioServiceProvider instanceof InMemoryPortfolioServiceService ).toBeTrue();
    } )
} );

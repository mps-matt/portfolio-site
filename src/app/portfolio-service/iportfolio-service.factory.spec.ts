import { InMemoryPortfolioService } from './in-memory-portfolio-service/in-memory-portfolio.service';
import { PortfolioServiceFactory } from './iportfolio-service.factory';
import { IPortfolioService } from './iportfolio-service';

describe( 'IPortfolioServiceFactory', () => {
    let factory: typeof PortfolioServiceFactory;

    beforeEach( () => {
        factory = PortfolioServiceFactory;
    });

    it( 'should be created', () => {
        expect( factory ).toBeTruthy();
    });

    it( 'should return InMemoryPortfolioServiceProvider', () => {
        const portfolioServiceProvider: IPortfolioService = factory();
        expect( portfolioServiceProvider instanceof InMemoryPortfolioService ).toBeTrue();
    })
});

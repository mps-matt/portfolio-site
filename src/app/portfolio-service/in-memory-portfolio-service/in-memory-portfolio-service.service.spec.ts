import { TestBed, waitForAsync } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { InMemoryPortfolioServiceService } from './in-memory-portfolio-service.service';

describe( 'InMemoryPortfolioServiceService', () => {
    let service: InMemoryPortfolioServiceService;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            providers: [
                InMemoryPortfolioServiceService
            ]
        } ).compileComponents();

        TestBed.configureTestingModule( {} );
        service = TestBed.inject( InMemoryPortfolioServiceService );
    } );

    it( 'should be created', () => {
        expect( service ).toBeTruthy();
    } );

    describe( 'bannerImage', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.bannerImage;
        } )

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        } );

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( 'I AM TEST STRING' );
            } );
        } ) );

    } );

} );

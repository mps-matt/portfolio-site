import { TestBed, waitForAsync } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { InMemoryPortfolioService } from './in-memory-portfolio.service';

describe( 'InMemoryPortfolioService', () => {
    let service: InMemoryPortfolioService;

    beforeEach( async () => {
        await TestBed.configureTestingModule({
            providers: [
                InMemoryPortfolioService
            ]
        }).compileComponents();

        TestBed.configureTestingModule({});
        service = TestBed.inject( InMemoryPortfolioService );
    });

    it( 'should be created', () => {
        expect( service ).toBeTruthy();
    });

    describe( 'bannerImage', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.bannerImage;
        })

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        });

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( 'https://lh3.googleusercontent.com/qwHXqF8VeG-9H4wAzfKJEefuonmgqs7l6PEOugnxrx_-fLLmCNe5urhop3hsQh0X0rhb8qEfTVelxn6TIAxGDqb4TpPkrFfxkD3RQvw1XHWs6iep8li_TnfPIBnJHlPrYPrQ05jKqQ=w2400' );
            });
        }) );
    });

    describe( 'profilePicture', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.profilePicture;
        })

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        });

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( 'https://media-exp1.licdn.com/dms/image/C4D03AQHeZLymqaOgHA/profile-displayphoto-shrink_400_400/0/1562402618930?e=1640822400&v=beta&t=tEwdryrvhQPo1UOXSNZuluYC5KmHW0zHDJPAq5lR8zc' );
            });
        }) );
    });

    describe( 'fullName', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.fullName;
        })

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        });

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( 'Matthew P Stark' );
            });
        }) );
    });

    describe( 'pronouns', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.pronouns;
        })

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        });

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( 'He/Him' );
            });
        }) );
    });

    describe( 'smallDescription', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.smallDescription;
        })

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        });

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( 'Software Engineer at Microlise.' );
            });
        }) );
    });

    describe( 'linkedInUrl', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.linkedInUrl;
        })

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        });

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( 'https://www.linkedin.com/in/matthewpstark' );
            });
        }) );
    });
});

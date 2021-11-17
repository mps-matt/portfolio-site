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

    describe( 'email', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.email;
        })

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        });

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( 'mps.main+career@protonmail.com' );
            });
        }) );
    });

    describe( 'phone', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.phone;
        })

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        });

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( '+447580090555' );
            });
        }) );
    });


    describe( 'githubName', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.githubName;
        })

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        });

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( 'mps-matt' );
            });
        }) );
    });


    describe( 'githubUrl', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.githubUrl;
        })

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        });

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( 'https://github.com/mps-matt' );
            });
        }) );
    });

    describe( 'googleMapsUrl', () => {
        let stringObservable: Observable<string>;

        beforeEach( () => {
            stringObservable = service.googleMapsUrl;
        })

        it( 'should return as observable', () => {
            expect( stringObservable ).toBeTruthy();
            expect( stringObservable instanceof Observable ).toBeTrue();
        });

        it( 'should be expected string', waitForAsync( () => {
            stringObservable.subscribe( result => {
                expect( result ).toBe( 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152259.93722379298!2d-1.6395376627542657!3d53.395839406061235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790aa9fae8be15%3A0x3e2827f5af06b078!2sSheffield!5e0!3m2!1sen!2suk!4v1637079502151!5m2!1sen!2suk' );
            });
        }) );
    });
});

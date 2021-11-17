import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';
import { AboutMeModule } from './about-me.module';

describe( 'AboutMeComponent', () => {
    let component: AboutMeComponent;
    let fixture: ComponentFixture<AboutMeComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule({
            imports: [ AboutMeModule ]
        })
            .compileComponents();
    });

    beforeEach( () => {
        fixture = TestBed.createComponent( AboutMeComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    });
});

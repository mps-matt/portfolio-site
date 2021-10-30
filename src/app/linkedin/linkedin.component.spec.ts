import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinComponent } from './linkedin.component';
import { LinkedinModule } from './linkedin.module';

describe( 'LinkedinComponent', () => {
    let component: LinkedinComponent;
    let fixture: ComponentFixture<LinkedinComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule({
            imports: [ LinkedinModule ]
        })
            .compileComponents();
    });

    beforeEach( () => {
        fixture = TestBed.createComponent( LinkedinComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    });
});

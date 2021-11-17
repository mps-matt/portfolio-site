import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationsComponent } from './qualifications.component';
import { QualificationsModule } from './qualifications.module';

describe( 'QualificationsComponent', () => {
    let component: QualificationsComponent;
    let fixture: ComponentFixture<QualificationsComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule({
            imports: [ QualificationsModule ]
        })
            .compileComponents();
    });

    beforeEach( () => {
        fixture = TestBed.createComponent( QualificationsComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    });
});

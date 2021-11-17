import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterModule } from '../footer/footer.module';

import { HobbiesComponent } from './hobbies.component';

describe( 'HobbiesComponent', () => {
    let component: HobbiesComponent;
    let fixture: ComponentFixture<HobbiesComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule({
            imports: [ FooterModule ]
        })
            .compileComponents();
    });

    beforeEach( () => {
        fixture = TestBed.createComponent( HobbiesComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    });
});

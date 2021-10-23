import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

beforeEach(
	waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [AppModule],
			providers: []
		}).compileComponents();
	})
);

beforeEach(() => {
	fixture = TestBed.createComponent(AppComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
});

describe('app', () => {
	it('will create component', () => {
		expect(component).toBeTruthy();
	});
});

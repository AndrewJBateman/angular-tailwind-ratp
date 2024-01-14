import {
	fakeAsync,
	tick,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, NgForm } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	// async beforeEach
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeComponent],
			imports: [FormsModule, HttpClientTestingModule],
		}).compileComponents();
	});

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
	});

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	it('test form submit', fakeAsync((postCodeSearch: NgForm) => {
		fixture.detectChanges();
		tick();
		// component.onSubmitForm(postCodeSearch.value.search);
		expect(component.formSubmitted.valueOf());
	}));
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RatpCardComponent } from './ratp-card.component';
import { RatpTraffic } from '../models/ratp-traffic';

describe('RatpCardComponent', () => {
	let component: RatpCardComponent;
	let fixture: ComponentFixture<RatpComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RatpComponent, RatpCardComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RatpComponent);
		component = fixture.debugElement.children[0].componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

@Component({
	selector: 'app-ratp',
	template: '<app-ratp-card [ratp]="ratp"></app-ratp-card>',
})
class RatpComponent {
	ratp: RatpTraffic = { line: '', slug: '', title: '', message: '' };
}

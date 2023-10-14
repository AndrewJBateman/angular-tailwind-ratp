// import { RatpTrafficApiResponse } from './models/ratp-traffic';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrafficService } from './services/traffic.service';
import { RatpComponent } from './ratp.component';
import { RouterTestingModule } from '@angular/router/testing';
// import { Observable, of } from 'rxjs';

describe('RatpComponent', () => {
	let component: RatpComponent;
	let fixture: ComponentFixture<RatpComponent>;
	let trafficServiceStub: Partial<TrafficService>;

	// trafficServiceStub = {
	// 	getRatpTrafficData(): Observable<RatpTrafficApiResponse> {
	// 		let data: any = [];
	// 		return of(data);
	// 	},
	// };

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [RatpComponent],
			providers: [{ provide: TrafficService, useValue: trafficServiceStub }],
		}).compileComponents();

		fixture = TestBed.createComponent(RatpComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

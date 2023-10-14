import { HttpClient } from '@angular/common/http';

import { TrafficService } from './traffic.service';

describe('RatpTrafficApiResponseService', () => {
	let service: TrafficService;
	let httpSpy: jasmine.SpyObj<HttpClient>;

	beforeEach(() => {
		httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
		service = new TrafficService(httpSpy);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	// it('should call http client in getRatpTrafficData', () => {
	// 	service.getRatpTrafficData();
	// 	expect(httpSpy.get).toHaveBeenCalled();
	// });
});

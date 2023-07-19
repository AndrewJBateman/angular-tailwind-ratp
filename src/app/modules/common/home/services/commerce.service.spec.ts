import { HttpClient } from '@angular/common/http';

import { CommerceService } from './commerce.service';

describe('CommerceService', () => {
	let service: CommerceService;
	let httpSpy: jasmine.SpyObj<HttpClient>;

	beforeEach(() => {
		httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
		service = new CommerceService(httpSpy);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should call http client in getRatpCommerceData', () => {
		service.getRatpCommerceData('75005');
		expect(httpSpy.get).toHaveBeenCalled();
	});
});

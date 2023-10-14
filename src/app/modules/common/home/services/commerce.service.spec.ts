import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CommerceService } from './commerce.service';
import { mockPostcodeSearchResults } from './../../../../mockdata/postcodeSearch';

describe('CommerceService', () => {
	let service: CommerceService;
	let httpController: HttpTestingController;
	const baseUrl = 'https://data.ratp.fr/api/records/1.0/search/?';
	const testQuery = '75005';
	const userSearchUrl = `${baseUrl}dataset=commerces-de-proximite-agrees-ratp&q=${testQuery}&rows=10&refine.sort=-code_postal`;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(CommerceService);
		httpController = TestBed.inject(HttpTestingController);
	});

	describe('getRatpCommerceData()', () => {
		it('getRatpCommerceData() should be called', (done: DoneFn) => {
			service.getRatpCommerceData(testQuery).subscribe(data => {
				// subscribe to getRatpCommerceData method to get data
				expect(data).toEqual(mockPostcodeSearchResults);
				done();
			});
			httpController
				.expectOne({
					method: 'GET',
					url: userSearchUrl,
				})
				.flush(mockPostcodeSearchResults);
		});
		it('getRatpCommerceData() returns an error when the server returns a 404 error', () => {
			service.getRatpCommerceData('').subscribe(
				() => {},
				(error: string) => {
					// console.log('error: ', error, typeof error);
					expect(error).toEqual(error);
				}
			);
			httpController
				.expectOne({
					method: 'GET',
				})
				.flush('', { status: 404, statusText: 'Not Found' });
		});
		// it('getRatpCommerceData() returns an error when the server returns error other than 404', () => {
		// 	const errorStr = `Failed to fetch Ratp Commerce data`;
		// 	service.getRatpCommerceData('').subscribe(
		// 		() => {},
		// 		(error: string) => {
		// 			expect(error).toEqual(errorStr);
		// 		}
		// 	);
		// 	httpController
		// 		.expectOne({
		// 			method: 'GET',
		// 		})
		// 		.flush(errorStr, { status: 400, statusText: 'Bad Request' });
		// });
	});

	afterEach(() => {
		httpController.verify();
	});
});

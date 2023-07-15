import { TestBed } from '@angular/core/testing';
import {
	HttpTestingController,
	HttpClientTestingModule,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { CommerceService } from './commerce.service';
import { RatpResponse } from '../models/ratp-commerce';

describe('CommerceService', () => {
	let service: CommerceService;
	let httpMock: HttpTestingController;
	let httpClient: HttpClient;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [CommerceService],
		});
		service = TestBed.inject(CommerceService);
		httpMock = TestBed.inject(HttpTestingController);
		httpClient = TestBed.inject(HttpClient);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});

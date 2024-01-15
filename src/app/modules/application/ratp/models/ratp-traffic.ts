/**
 * Represents the interface for the RATP Traffic API response.
 */
export interface RatpTrafficApiResponse {
	result: {
		trafficId: RatpTraffic[];
		metros: RatpTraffic[];
		rers: RatpTraffic[];
		tramways: RatpTraffic[];
	};
	_metadata: {
		call: string;
		data: string;
		version: number;
	};
}

export interface RatpTraffic {
	line: string;
	slug?: string;
	title: string;
	message: string;
}

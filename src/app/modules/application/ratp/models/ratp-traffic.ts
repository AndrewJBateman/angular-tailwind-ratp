export interface RatpTrafficApiResponse {
	result: {
		trafficId: RatpTraffic[];
		metros: RatpTraffic[];
		rers: RatpTraffic[];
		tramways: RatpTraffic[];
	};
}

export interface RatpTraffic {
	line: string;
	slug?: string;
	title: string;
	message: string;
}

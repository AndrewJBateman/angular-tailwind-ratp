export interface RatpTrafficApiResponse {
  result: { metros: RatpTraffic[]; rers: RatpTraffic[]; tramways: RatpTraffic[] };
}

export interface RatpTraffic {
  line: string;
  slug?: string;
  title: string;
  message: string;
}

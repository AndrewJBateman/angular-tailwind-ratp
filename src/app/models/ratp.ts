// format of RATP API response
export interface RatpResponse {
  facet_groups: Facet_Group[];
  nhits: number;
  parameters: Parameter[];
  records: []
}

export interface Facet_Group {
  facet: Facet[];
  name: string;
}

export interface Facet {
  count: number;
  path: string;
  state: string;
  displayed: string;
}

export interface Parameter {
  dataset: string;
  facet: [
    string,
    string
  ];
  format: string;
  q: string;
  rows: number;
  sort: [
    string
  ];
  start: number;
  timezone: string;
}

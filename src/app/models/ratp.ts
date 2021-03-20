// format of RATP API response
export interface RatpResponse {
  facet_groups: Facet_Group[];
  nhits: number;
  parameters: Parameter[];
  records: Record[];
}

export interface Facet_Group {
  facets: Facet[];
  name: string;
}

export interface Facet {
  count: number;
  name?: string;
  path: string;
  state: string;
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

export interface Record {
  datasetid: string;
  fields: {
    code_postal: number;
    dea_fermeture?: string;
    dea_numero_rue_livraison_dea_rue_livraison: string;
    tco_libelle: string;
    ville: string;
  };
  record_timestamp: string;
  recordid: string;
}

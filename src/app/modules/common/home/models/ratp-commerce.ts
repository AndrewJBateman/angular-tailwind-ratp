// format of RATP API response
export interface RatpResponse {
	nhits: number;
	parameters: {
		dataset: string;
		format: string;
		q: string;
		refine: Refine;
		rows: number;
		start: number;
		timezone: string;
	};
	records: Record[];
}

export interface Refine {
	sort: string;
}

export interface Record {
	datasetid: string;
	fields: {
		dea_code: number;
		dea_code_postal_livraison: number;
		dea_jour_fermeture?: string;
		dea_commune_livraison: string;
		dea_nom_commerce: string;
		dea_numero_rue_livraison: string;
	};
	record_timestamp: string;
	recordid: string;
}

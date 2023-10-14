export const mockPostcodeSearchResults = {
	nhits: 19,
	parameters: {
		dataset: 'commerces-de-proximite-agrees-ratp',
		format: 'json',
		q: '75005',
		refine: { sort: '-code_postal' },
		rows: 10,
		start: 0,
		timezone: 'UTC',
	},
	records: [
		{
			datasetid: 'commerces-de-proximite-agrees-ratp',
			fields: {
				dea_code: 520626,
				dea_code_postal_livraison: 75005,
				dea_jour_fermeture: '',
				dea_commune_livraison: 'Paris',
				dea_nom_commerce: 'Tabac Notre Dame',
				dea_numero_rue_livraison_dea_rue_livraison: '3 R. Lagrange',
			},
			record_timestamp: '2023-07-11T07:22:30.201Z',
			recordid: 'c6983288d8cd68109d0ca4c136d3d88932e68531',
		},
		{
			datasetid: 'commerces-de-proximite-agrees-ratp',
			fields: {
				dea_code: 530305,
				dea_code_postal_livraison: 75005,
				dea_jour_fermeture: 'Dimanche',
				dea_commune_livraison: '123 R. Monge',
				dea_nom_commerce: 'Le Rond-Point',
				dea_numero_rue_livraison_dea_rue_livraison: '123 R. Monge',
			},
			record_timestamp: '2023-07-11T07:22:30.201Z',
			recordid: 'b2bc0abf06a67f13da15822107aa2873fdc55e4b',
		},
	],
};

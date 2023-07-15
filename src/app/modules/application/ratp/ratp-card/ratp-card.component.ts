import { Component, Input } from '@angular/core';

import { RatpTraffic } from '../models/ratp-traffic';

@Component({
	selector: 'app-ratp-card',
	templateUrl: './ratp-card.component.html',
})
export class RatpCardComponent {
	@Input()
	ratp!: RatpTraffic;
}

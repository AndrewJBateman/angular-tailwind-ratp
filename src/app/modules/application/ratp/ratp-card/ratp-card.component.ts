/**
 * Represents the RatpCardComponent class.
 * This component is responsible for displaying a RATP card with traffic information.
 * It receives a RatpTraffic object as input and renders the card accordingly.
 * The RatpTraffic object contains information about a specific line, such as the line name, title, and message.
 * If the ratp input is null, the component will not render any card.
 * This component uses the OnPush change detection strategy for better performance.
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatpTraffic } from '../models/ratp-traffic';

@Component({
	selector: 'app-ratp-card',
	templateUrl: './ratp-card.component.html',
	standalone: true,
	imports: [CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatpCardComponent {
	@Input()
	ratp: RatpTraffic | null = null;
}

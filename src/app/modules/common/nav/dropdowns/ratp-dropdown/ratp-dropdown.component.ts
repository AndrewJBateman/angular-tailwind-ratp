/**
 * Component for displaying a dropdown menu for RATP (Régie Autonome des Transports Parisiens) options.
 * This component is used in an Angular application.
 *
 * @selector app-ratp-dropdown
 * @templateUrl ./ratp-dropdown.component.html
 * @standalone true
 * @imports RouterLinkActive, RouterLink
 */
import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
	selector: 'app-ratp-dropdown',
	templateUrl: './ratp-dropdown.component.html',
	standalone: true,
	imports: [RouterLinkActive, RouterLink],
})
export class RatpDropdownComponent {}

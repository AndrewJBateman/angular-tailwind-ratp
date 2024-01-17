/**
 * Class representing the NavComponent.
 *
 * This component is responsible for displaying the navigation bar.
 * It retrieves the application name from the environment configuration.
 */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DropdownComponent } from './dropdowns/dropdown/dropdown.component';
import { RatpDropdownComponent } from './dropdowns/ratp-dropdown/ratp-dropdown.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	encapsulation: ViewEncapsulation.None,
	standalone: true,
	imports: [
		RouterLink,
		RouterLinkActive,
		RatpDropdownComponent,
		DropdownComponent,
	],
})
export class NavComponent implements OnInit {
	name: string;

	ngOnInit() {
		this.name = environment.application.name;
	}
}

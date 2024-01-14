/**
 * Class representing the NavComponent.
 *
 * This component is responsible for displaying the navigation bar.
 * It retrieves the application name from the environment configuration.
 */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	encapsulation: ViewEncapsulation.None,
})
export class NavComponent implements OnInit {
	name: string;

	ngOnInit() {
		this.name = environment.application.name;
	}
}

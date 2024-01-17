/**
 * Component for displaying a dropdown menu in an Angular application.
 *
 * This component imports the necessary modules and components from the Angular Material library
 * to create a dropdown menu with buttons and icons. It also injects the Angular Router to handle
 * navigation within the application.
 *
 * @selector app-dropdown
 * @templateUrl ./dropdown.component.html
 * @standalone true
 * @imports MatButtonModule, MatMenuModule, MatIconModule, RouterLink
 */
import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	standalone: true,
	imports: [MatButtonModule, MatMenuModule, MatIconModule, RouterLink],
})
export class DropdownComponent {
	public router = inject(Router);

	public aboutRoute = '/about';
	public contactRoute = '/contact';
}

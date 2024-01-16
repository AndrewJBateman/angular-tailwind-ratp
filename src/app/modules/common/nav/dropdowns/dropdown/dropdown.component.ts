import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	standalone: true,
	imports: [
		MatButtonModule,
		MatMenuModule,
		MatIconModule,
		RouterLink,
		RouterLinkActive,
	],
})
export class DropdownComponent {}

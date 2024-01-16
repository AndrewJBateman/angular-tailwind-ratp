/**
 * ContactComponent class represents a component in an Angular application.
 * It implements the OnInit interface.
 * This component is responsible for fetching user data from the GithubService and displaying
 * it in the contact component template.
 *
 * Properties:
 * - user$: An Observable of type User that represents the user data fetched from the GithubService.
 * - username: A string that represents the username of the user to fetch data for.
 *
 * Constructor:
 * - Accepts an instance of the GithubService as a parameter and assigns it to the githubService property.
 *
 * ngOnInit method:
 * - Overrides the ngOnInit method from the OnInit interface.
 * - Initializes the user$ property by calling the getUser method of the githubService and passing the username.
 *
 * Usage:
 * - This component can be used in the contact component template to display user data.
 * - It can be added to the declarations array of an Angular module to make it available for use in other components.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { GithubService } from './services/github.service';
import { AsyncPipe, SlicePipe, DatePipe } from '@angular/common';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	standalone: true,
	imports: [AsyncPipe, SlicePipe, DatePipe],
})
export class ContactComponent implements OnInit {
	user$: Observable<User> = new Observable();
	username = 'andrewjbateman';

	constructor(private githubService: GithubService) {}

	ngOnInit(): void {
		this.user$ = this.githubService.getUser(this.username);
	}
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./modules/common/home/home.component').then(m => m.HomeComponent),
	},
	{
		path: 'ratp/:id',
		loadComponent: () =>
			import('./modules/application/ratp/ratp.component').then(
				m => m.RatpComponent
			),
	},
	{
		path: 'parking',
		loadComponent: () =>
			import('./modules/application/parking/parking.component').then(
				m => m.ParkingComponent
			),
	},
	{
		path: 'about',
		loadComponent: () =>
			import('./modules/common/about/about.component').then(
				m => m.AboutComponent
			),
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./modules/common/contact/contact.component').then(
				m => m.ContactComponent
			),
	},
	{
		path: '**',
		loadComponent: () =>
			import('./modules/common/not-found/not-found.component').then(
				m => m.NotFoundComponent
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabledBlocking',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}

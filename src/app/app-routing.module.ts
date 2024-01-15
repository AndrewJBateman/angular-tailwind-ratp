import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/common/home/home.component';
import { NotFoundComponent } from './modules/common/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
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
		loadChildren: () => import('./modules/application/parking/parking.module'),
	},
	{
		path: 'about',
		loadChildren: () => import('./modules/common/about/about.module'),
	},
	{
		path: 'contact',
		loadChildren: () => import('./modules/common/contact/contact.module'),
	},
	{ path: '**', component: NotFoundComponent },
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

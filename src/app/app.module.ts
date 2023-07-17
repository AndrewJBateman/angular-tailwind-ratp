import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';

import { NavComponent } from './modules/common/nav/nav.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/common/home/home.component';
import { NotFoundComponent } from './modules/common/not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SvgInfoComponent } from './shared/components/svg-info/svg-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './modules/common/nav/dropdowns/dropdown/dropdown.component';
import { RatpDropdownComponent } from './modules/common/nav/dropdowns/ratp-dropdown/ratp-dropdown.component';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		HomeComponent,
		NotFoundComponent,
		SvgInfoComponent,
		DropdownComponent,
		RatpDropdownComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
		}),
		BrowserAnimationsModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
	],
	providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

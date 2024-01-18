import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';

import { NavComponent } from './modules/common/nav/nav.component';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent],
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
		NavComponent,
	],
	providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

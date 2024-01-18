import {
	Component,
	VERSION,
	OnInit,
	ChangeDetectionStrategy,
} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	title: string;
	version: string;

	ngOnInit() {
		this.title = 'angular-tailwind-ratp';
		this.version = VERSION.full;
	}
}

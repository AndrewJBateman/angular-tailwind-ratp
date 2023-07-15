import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatpComponent } from './ratp.component';

const routes: Routes = [{ path: '', component: RatpComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RatpRoutingModule {}

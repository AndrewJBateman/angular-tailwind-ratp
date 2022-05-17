import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatpRoutingModule } from './ratp-routing.module';
import { RatpComponent } from './ratp.component';
import { SpinnerComponent } from '../../common/spinner/spinner.component';
import { RatpCardModule } from './ratp-card/ratp-card.module';

@NgModule({
  imports: [CommonModule, RatpRoutingModule, RatpCardModule],
  exports: [RatpComponent],
  declarations: [RatpComponent, SpinnerComponent],
})
export class RatpModule {}

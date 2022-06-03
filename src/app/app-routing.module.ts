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
    path: 'ratp',
    loadChildren: () =>
      import('./modules/application/ratp/ratp.module').then(
        (mod) => mod.RatpModule
      ),
  },
  {
    path: 'parking',
    loadChildren: () =>
      import('./modules/application/parking/parking.module').then(
        (mod) => mod.ParkingModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/common/about/about.module').then(
        (mod) => mod.AboutModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/common/contact/contact.module').then(
        (mod) => mod.ContactModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

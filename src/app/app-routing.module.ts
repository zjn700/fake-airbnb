// tslint:disable-next-line: quotemark
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  {
    path: 'places', loadChildren: './places/places.module#PlacesPageModule',
    canLoad: [AuthGuard] },
  {
    path: 'bookings',
    loadChildren: './bookings/bookings.module#BookingsPageModule',
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }






  // {
  //   path: 'bookings',
  //   loadChildren: './bookings/bookings.module#BookingsPageModule'
  // }

  // below are the default routes provided by ng cli. one path for each route
  // just preload (PreloadAllModules) the top level pages (auth/places/bookings)
  // this lazyload routes for child pages/components (see PlacesModule and
  // ...PlacesRoutingModule for example )


  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  // { path: 'places', loadChildren: './places/places.module#PlacesPageModule' },
  // { path: 'discover', loadChildren: './places/discover/discover.module#DiscoverPageModule' },
  // { path: 'offers', loadChildren: './places/offers/offers.module#OffersPageModule' },
  // { path: 'place-detail', loadChildren: './places/discover/place-detail/place-detail.module#PlaceDetailPageModule' },
  // { path: 'offer-bookings', loadChildren: './places/offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule' },
  // { path: 'new-offer', loadChildren: './places/offers/new-offer/new-offer.module#NewOfferPageModule' },
  // { path: 'edit-offer', loadChildren: './places/offers/edit-offer/edit-offer.module#EditOfferPageModule' },
// ];

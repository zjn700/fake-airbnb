import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { PlacesRoutingModule } from './places-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlacesRoutingModule
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule { }

// below is the default module produced by ng cli.
// replace the identified items with the PlacesRoutingModule ( see => markers)


//        import { NgModule } from '@angular/core';
//        import { CommonModule } from '@angular/common';
//        import { FormsModule } from '@angular/forms';
// => import { Routes, RouterModule } from '@angular/router';

//        import { IonicModule } from '@ionic/angular';

//        import { PlacesPage } from './places.page';

// =>   const routes: Routes = [
//         {
//           path: '',
//           component: PlacesPage
//         }
//      ];

//        @NgModule({
//        imports: [
//                    CommonModule,
//                    FormsModule,
//                    IonicModule,
// =>         RouterModule.forChild(routes)
//   ],
//   declarations: [PlacesPage]
// })
// export class PlacesPageModule {}

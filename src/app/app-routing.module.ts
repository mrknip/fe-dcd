import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesDisplayComponent } from './features/favourites-display/favourites-display.component';
import { RandomImageDisplayComponent } from './features/random-image-display/random-image-display.component';

const routes: Routes = [
  { path: '', component: RandomImageDisplayComponent },
  { path: 'favourites', component: FavouritesDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

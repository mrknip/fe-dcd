import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomImageDisplayComponent } from './features/random-image-display/random-image-display.component';
import { DcdApiService } from './services/dcd-api.service';
import { FullImageUrlPipe } from './shared/pipes/full-image-url.pipe';
import { UserService } from './services/user.service';
import { ImageCardComponent } from './shared/components/image-card/image-card.component';
import { FavouritesDisplayComponent } from './features/favourites-display/favourites-display.component';
import { TabNavComponent } from './shared/components/tab-nav/tab-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent,
    FullImageUrlPipe,
    RandomImageDisplayComponent,
    FavouritesDisplayComponent,
    TabNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DcdApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

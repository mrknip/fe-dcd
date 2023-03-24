import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomImageDisplayComponent } from './features/random-image-display/random-image-display.component';
import { DcdApiService } from './services/dcd-api.service';
import { FullImageUrlPipe } from './pipes/full-image-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RandomImageDisplayComponent,
    FullImageUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DcdApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

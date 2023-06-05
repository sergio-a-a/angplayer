import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngplayerComponent } from './components/angplayer/angplayer.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoSelectionComponent } from './components/video-selection/video-selection.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AngplayerComponent,
    AboutmeComponent,
    HeaderComponent,
    VideoSelectionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

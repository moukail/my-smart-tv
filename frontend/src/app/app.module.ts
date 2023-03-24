import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoWrapperComponent } from './components/video-wrapper/video-wrapper.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { EntityStoreModule } from "./entity-store-module";
import { EntityDataModule } from "@ngrx/data";
import { StoreModule } from '@ngrx/store';
import { entityConfig } from "./entity-metadata";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    VideoWrapperComponent,
    VideoListComponent,
  ],
    imports: [
      HttpClientModule,
      StoreModule.forRoot(),
      EntityDataModule.forRoot(entityConfig),
      BrowserModule,
      MatProgressSpinnerModule,
      MatListModule,
      EntityStoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

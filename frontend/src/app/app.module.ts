import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ControlsComponent } from './components/controls/controls.component';
import { VideoWrapperComponent } from './components/video-wrapper/video-wrapper.component';
import { ControlComponent } from './components/control/control.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ControlVolumeComponent } from './components/control-volume/control-volume.component';
import { TimeComponent } from './components/time/time.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from "@angular/material/grid-list";
import {VideoItemComponent} from "./components/video-item/video-item.component";
import {EntityStoreModule} from "./entity-store-module";
import {EntityDataModule} from "@ngrx/data";
import { StoreModule } from '@ngrx/store';
import {entityConfig} from "./entity-metadata";
import {metaReducers, reducers} from "./reducers";

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    VideoWrapperComponent,
    ControlComponent,
    ProgressBarComponent,
    ControlVolumeComponent,
    TimeComponent,
    VideoListComponent,
    VideoItemComponent

  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      MatSlideToggleModule,
      MatProgressSpinnerModule,
      MatSliderModule,
      MatListModule,
      MatGridListModule,
      StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }),
      EntityDataModule.forRoot(entityConfig),
      EntityStoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

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
import {NavigableListDirective} from "./directives/NavigableListDirective";
import {NavigableListItemDirective} from "./directives/NavigableListItemDirective";
import {A11yModule} from "@angular/cdk/a11y";
import {FocusDirective} from "./directives/FocusDirective";

@NgModule({
  declarations: [
    AppComponent,
    VideoWrapperComponent,
    VideoListComponent,
    NavigableListDirective,
    NavigableListItemDirective,
    FocusDirective
  ],
    imports: [
        HttpClientModule,
        StoreModule.forRoot(),
        EntityDataModule.forRoot(entityConfig),
        BrowserModule,
        MatProgressSpinnerModule,
        MatListModule,
        EntityStoreModule,
        A11yModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

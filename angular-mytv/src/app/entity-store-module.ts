import {NgModule} from '@angular/core';
import {EntityDataService} from '@ngrx/data';
import {ChannelDataService} from "./services/channel.data-service";

@NgModule({
  providers: [
    ChannelDataService
  ]
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    channelDataService: ChannelDataService,
  ) {
    entityDataService.registerService('Channel', channelDataService);
  }
}

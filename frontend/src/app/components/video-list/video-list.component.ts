import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FocusKeyManager} from "@angular/cdk/a11y";
import {VideoItemComponent} from "../video-item/video-item.component";
import {ChannelDataService} from "../../services/channel.data-service";
import {Channel} from "../../models/channel.model";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @ViewChildren(VideoItemComponent) items!: QueryList<VideoItemComponent>;
  keyManager!: FocusKeyManager<VideoItemComponent>;

  public videoList: ({ name: string, selected: boolean })[] = [];
  private list: Channel[] = [];


  constructor(
    private channelDataService: ChannelDataService,
  ) {}

  public ngOnInit() {

    this.channelDataService.all()
      .subscribe((ELEMENT_DATA) => {
        this.list = ELEMENT_DATA
      });
  }

  ngAfterViewInit() {
    this.keyManager = new FocusKeyManager<VideoItemComponent>(this.items).withWrap();
    this.keyManager.setFirstItemActive();
  }
}

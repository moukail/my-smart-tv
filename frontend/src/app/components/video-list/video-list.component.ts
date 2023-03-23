import {
  Component,
  OnInit
} from '@angular/core';
import {ChannelDataService} from "../../services/channel.data-service";
import {Channel} from "../../models/channel.model";
import {VideoService} from "../../services/video.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  list: Channel[] = [];
  activeChannel!: Channel;

  constructor(
    private channelDataService: ChannelDataService,
    private videoService: VideoService,
  ) {}

  public ngOnInit() {
    this.channelDataService.all()
      .subscribe((ELEMENT_DATA) => {
        this.list = ELEMENT_DATA
        this.playIt(ELEMENT_DATA[4]);
      });
  }

  public playIt(channel: Channel): void {
    this.videoService.setCurrentVideoByIndex(channel);
    this.videoService.play();
    this.activeChannel = channel;
  }
}

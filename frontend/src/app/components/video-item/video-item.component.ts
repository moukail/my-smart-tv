import {Component, ElementRef, Input, OnInit} from "@angular/core";
import {FocusableOption, FocusOrigin} from "@angular/cdk/a11y";
import {VideoService} from "../../services/video.service";
import {Channel} from "../../models/channel.model";

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements FocusableOption, OnInit {
  @Input() channel!: Channel;

  private activeVideo = 0;

  constructor(private element: ElementRef,
    private videoService: VideoService,
    //private videoPlaylistService: VideoPlaylistService
  ) {}
  ngOnInit(): void {
  }

  focus(origin?: FocusOrigin): void {
    this.element.nativeElement.focus();
  }

  public playIt(index: number): void {
    //this.videoPlaylistService.setCurrentVideoByIndex(index);
    this.videoService.play();
    this.activeVideo = index;
  }

}

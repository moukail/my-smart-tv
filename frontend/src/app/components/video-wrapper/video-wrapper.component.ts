import {
  Component,
  ElementRef,
  ViewChild,
  OnInit
} from '@angular/core';

import { VideoService } from 'src/app/services/video.service';
import Hls from "hls.js";

@Component({
  selector: 'app-video-wrapper',
  templateUrl: './video-wrapper.component.html',
  styleUrls: ['./video-wrapper.component.scss']
})
export class VideoWrapperComponent implements OnInit {
  public loading: boolean = false;
  public ignore: boolean = false;
  public playing: boolean = false;
  private hls = new Hls();
  private videoListeners = {
    canplay: () => this.videoService.setLoading(false),
    seeking: () => this.videoService.setLoading(true),
  };

  @ViewChild('video', { static: true }) video!: ElementRef<HTMLVideoElement>;

  constructor(
    private videoService: VideoService,
    //private videoPlaylistService: VideoPlaylistService
  ) {}

  public ngOnInit() {
    this.subscriptions();
    Object.keys(this.videoListeners).forEach(
      videoListener => console.log(videoListener) //this.video.nativeElement.addEventListener(videoListener, this.videoListeners[videoListener])
    );

    this.video.nativeElement.addEventListener('canplay', this.videoListeners['canplay'])
    this.video.nativeElement.addEventListener('seeking', this.videoListeners['seeking'])

  }

  /** Play/Pause video on click */
  public onVideoClick() {
      if (this.playing) {
        //this.videoService.pause();
      } else {
        this.videoService.play();
      }
  }

  /** Go full screen on double click */
  public onDoubleClick() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const videoPlayerDiv = document.querySelector('.video-player');
      if (videoPlayerDiv && videoPlayerDiv.requestFullscreen) {
        videoPlayerDiv.requestFullscreen();
      }
    }
  }

  /**
   * Loads the video, if the browser supports HLS then the video use it, else play a video with native support
   */
  public load(currentVideo: string): void {
    if (Hls.isSupported()) {
      this.loadVideoWithHLS(currentVideo);
    } else {
      if (this.video.nativeElement.canPlayType('application/vnd.apple.mpegurl')) {
        this.loadVideo(currentVideo);
      }
    }
  }

  /**
   * Play or Pause current video
   */
  private playPauseVideo(playing: boolean) {
    this.playing = playing;
    this.video.nativeElement[playing ? 'play' : 'pause']();
  }

  /**
   * Setup subscriptions
   */
  private subscriptions() {
    this.videoService.playingState$.subscribe(playing => this.playPauseVideo(playing));
    this.videoService.currentVideo$.subscribe(video => this.load(video));
    this.videoService.loading$.subscribe(loading => (this.loading = loading));
  }

  /**
   * Method that loads the video with HLS support
   */
  private loadVideoWithHLS(currentVideo: string) {
    this.hls.loadSource(currentVideo);
    this.hls.attachMedia(this.video.nativeElement);
    // this.hls.on(HLS.Events.MANIFEST_PARSED, () => this.video.nativeElement.play());
  }

  /**
   * Method that loads the video without HLS support
   */
  private loadVideo(currentVideo: string) {
    this.video.nativeElement.src = currentVideo;
  }
}

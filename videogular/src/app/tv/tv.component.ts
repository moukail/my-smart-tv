import {AfterContentInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from 'rxjs';
import Hls from "hls.js";

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements AfterContentInit {
  @ViewChild('myMedia', { static: true }) myMedia!: ElementRef<HTMLVideoElement>;
  private hls = new Hls();
  videoUrl = "https://cdnamd-hls-globecast.akamaized.net/live/ramdisk/2m_monde/hls_video_ts_tuhawxpiemz257adfc/index.m3u8";
  public readonly item$: Observable<any[]>;
  cols!: number;
  gridByBreakpoint = {
    xl: 6,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private mediaObserver: MediaObserver,
    firestore: AngularFirestore
  ) {
    this.item$ = firestore.collection('channels').valueChanges();
  }

  ngAfterContentInit() {
    this.mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      //this.cols = this.gridByBreakpoint[changes[0].mqAlias];
      console.log('cols', this.cols);
    });
  }

  onVideoClick(currentVideo: string): void {
    if (Hls.isSupported()) {
      this.loadVideoWithHLS(currentVideo);
    } else {
      if (this.myMedia.nativeElement.canPlayType('application/vnd.apple.mpegurl')) {
        this.loadVideo(currentVideo);
      }
    }
  }

  private loadVideoWithHLS(currentVideo: string) {
    this.hls.loadSource(currentVideo);
    this.hls.attachMedia(this.myMedia.nativeElement);
    // this.hls.on(HLS.Events.MANIFEST_PARSED, () => this.video.nativeElement.play());
  }

  /**
   * Method that loads the video without HLS support
   */
  private loadVideo(currentVideo: string) {
    this.myMedia.nativeElement.src = currentVideo;
  }

}

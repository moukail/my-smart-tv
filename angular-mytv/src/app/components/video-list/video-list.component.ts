import {
  AfterContentInit, AfterViewInit,
  Component, ElementRef, HostListener,
  OnInit, ViewChild
} from '@angular/core';
import {ChannelDataService} from "../../services/channel.data-service";
import {Channel} from "../../models/channel.model";
import {VideoService} from "../../services/video.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit, AfterContentInit, AfterViewInit {

  list: Channel[] = [];
  activeChannel!: Channel;
  public showList = false;

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: any) {
    console.log('VideoListComponent onKeydownHandler', event.keyCode);
    this.showList = false;
    if (event.keyCode == 13){
      console.log('VideoListComponent onKeydownHandler', 'enter');
      //this.playIt(this.list[1]);
      this.showList = false;
    }
    if (event.keyCode == 38){
      console.log('VideoListComponent onKeydownHandler', 'keyUp');
      this.showList = true;
      //setTimeout(() => this.showList = false, 10000);
    }
    if (event.keyCode == 40){
      console.log('VideoListComponent onKeydownHandler', 'keyDown');
      this.showList = true;
      //setTimeout(() => this.showList = false, 10000);
    }
    if (event.keyCode == 37){
      console.log('VideoListComponent onKeydownHandler', 'keyLeft');
      this.showList = true;
      //setTimeout(() => this.showList = false, 10000);
    }
    if (event.keyCode == 39){
      console.log('VideoListComponent onKeydownHandler', 'keyRight');
      this.showList = true;
      //setTimeout(() => this.showList = false, 10000);
    }
    if (event.keyCode == 49 && this.list.length > 0){
      console.log('VideoListComponent onKeydownHandler', '1');
       this.playIt(this.list[0]);
    }
    if (event.keyCode == 50 && this.list.length > 1){
      console.log('VideoListComponent onKeydownHandler', '2');
      this.playIt(this.list[1]);
    }
  }

  constructor(
    private channelDataService: ChannelDataService,
    private videoService: VideoService,
  ) {}

  public ngOnInit() {
    console.log('VideoListComponent ngOnInit');

    this.channelDataService.all()
      .subscribe((ELEMENT_DATA) => {
        this.list = ELEMENT_DATA
        this.showList = true;
        //this.playIt(this.list[1]);
      });
  }

  public playIt(channel: Channel): void {
    console.log('VideoListComponent playIt');

    this.videoService.setCurrentVideoByIndex(channel);
    this.videoService.play();
    this.activeChannel = channel;
  }

  ngAfterContentInit(): void {
    console.log('VideoListComponent ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('VideoListComponent ngAfterViewInit');
  }
}

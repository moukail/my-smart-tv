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

  @ViewChild('gridList') gridList!: ElementRef;

  list: Channel[] = [];
  activeChannel!: Channel;
  public showList = false;
  inputFocused = false;

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: any) {
    console.log('onKeydownHandler', event.keyCode);
    this.showList = false;
    if (event.keyCode == 13){
      console.log('onKeydownHandler', 'enter');
      //this.playIt(this.list[1]);
      this.showList = false;
    }
    if (event.keyCode == 38){
      console.log('onKeydownHandler', 'keyUp');
      this.showList = true;
    }
    if (event.keyCode == 40){
      console.log('onKeydownHandler', 'keyDown');
      this.showList = true;
      //this.inputFocused = true;
      //setTimeout(() => {this.inputFocused = false});
    }
    if (event.keyCode == 37){
      console.log('onKeydownHandler', 'keyLeft');
      this.showList = true;
    }
    if (event.keyCode == 39){
      console.log('onKeydownHandler', 'keyRight');
      this.showList = true;
    }
    if (event.keyCode == 49){
      console.log('onKeydownHandler', '1');
      this.playIt(this.list[0]);
    }
    if (event.keyCode == 50){
      console.log('onKeydownHandler', '2');
      this.playIt(this.list[1]);
    }
  }

  constructor(
    private channelDataService: ChannelDataService,
    private videoService: VideoService,
  ) {}

  public ngOnInit() {
    console.log('ngOnInit');
    this.channelDataService.all()
      .subscribe((ELEMENT_DATA) => {
        this.list = ELEMENT_DATA
        this.playIt(this.list[1]);
      });
  }

  public playIt(channel: Channel): void {
    this.videoService.setCurrentVideoByIndex(channel);
    this.videoService.play();
    this.activeChannel = channel;
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
}

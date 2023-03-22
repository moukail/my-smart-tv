import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import PlaylistItem from 'src/app/interfaces/playlist-item.interface';
import { VideoPlaylistService } from 'src/app/services/video-playlist.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  public playNext: boolean = false;
  public videoEnded: boolean = false;
  public videoList: ({ name: string, selected: boolean })[] = [];
  private list: PlaylistItem[] = [];
  private activeVideo = 0;

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor(
    private videoService: VideoService,
    private videoPlaylistService: VideoPlaylistService
  ) {}

  public ngOnInit() {
    this.videoPlaylistService.list$.subscribe(list => (this.list = list));
    this.videoPlaylistService.currentVideo$.subscribe(currentVideo => {
      this.videoList = this.list.map(item => ({
        name: item.title,
        selected: item.url === currentVideo
      }));
    });
    this.videoPlaylistService.fetchList('./assets/playlist.json');
    this.videoPlaylistService
      .shouldPlayNext$
      .subscribe(playNext => (this.playNext = playNext));
    this.videoService.videoEnded$.subscribe(ended => {
      if (this.playNext && ended) {
        this.videoPlaylistService.playNextVideo();
        this.videoService.play();
      }
    });
  }

  public playIt(index: number): void {
    this.videoPlaylistService.setCurrentVideoByIndex(index);
    this.videoService.play();
    this.activeVideo = index;
  }

  public onChange(): void {
    this.playNext = !this.playNext;
    this.videoPlaylistService.setShouldPlayNext(this.playNext);
  }
}

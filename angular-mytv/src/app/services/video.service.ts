import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import {Channel} from "../models/channel.model";

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private playingState = new Subject<boolean>();
  private loading = new BehaviorSubject<boolean>(true);
  private videoEnded = new BehaviorSubject<boolean>(false);
  private currentVideo = new BehaviorSubject<string>('');
  public get loading$(): Observable<boolean> {
    return this.loading.asObservable();
  }

  public setLoading(value: boolean): void {
    this.loading.next(value);
  }

  public play(): void {
    this.playingState.next(true);
  }

  public pause(): void {
    this.playingState.next(false);
  }

  public get playingState$(): Observable<boolean> {
    return this.playingState.asObservable();
  }

  public get videoEnded$(): Observable<boolean> {
    return this.videoEnded.asObservable();
  }

  public setVideoEnded(value: boolean): void {
    this.videoEnded.next(value);
  }

  public get currentVideo$(): Observable<string> {
    return this.currentVideo.asObservable();
  }

  public setCurrentVideo(video: string): void {
    if (this.currentVideo.getValue() !== video) {
      this.currentVideo.next(video);
      this.pause();
    }
  }

  public setCurrentVideoByIndex(channel: Channel): void {
    this.setCurrentVideo(channel.video_url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  DefaultDataService,
  HttpUrlGenerator,
} from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {Channel} from "../models/channel.model";
import {environment} from "../../environments/environment";

@Injectable()
export class ChannelDataService extends DefaultDataService<Channel> {

  httpClient: HttpClient;

  constructor(httpClient: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Channel', httpClient, httpUrlGenerator);
    this.httpClient = httpClient;
  }

  all(): Observable<Channel[]> {
    return this.httpClient.get(`${environment.apiUrl}/api/v1/channel/list`)
      .pipe(map((response: any) => {
        return response;
      }));
  }
}

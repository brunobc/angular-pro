import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Store} from '@app/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

export interface Song {
  id: number;
  name: string;
  listened: boolean;
  favourite: boolean;
}

@Injectable()
export class SongsService {

  getPlaylist$: Observable<Song[]> = this.http
    .get('http://localhost:4000/playlist')
    .map(res => res.json())
    .do(next => this.store.set('playlist', next));

  constructor(
    private http: Http,
    private store: Store
  ) {}
}

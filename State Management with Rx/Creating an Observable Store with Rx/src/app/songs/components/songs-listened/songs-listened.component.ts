import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import {SongsService} from '@app/songs/services/songs.service';

import {Store} from '@app/store';

@Component({
  selector: 'app-songs-listened',
  template: `
  <div class="songs">
    <app-songs-list
      [list]="listened$ | async">
      Played
    </app-songs-list>
  </div>`
})
export class SongsListenedComponent implements OnInit {

  listened$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.listened$ = this.store.select('playlist')
    .filter(Boolean)
    .map(playlist => playlist.filter(track => track.listened));
  }

}

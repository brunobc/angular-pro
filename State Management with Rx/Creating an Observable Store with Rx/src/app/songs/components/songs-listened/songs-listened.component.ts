import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {SongsService} from '@app/songs/services/songs.service';

import {Store} from '@app/store';

@Component({
  selector: 'app-songs-listened',
  template: `
  <div class="songs">
    <div *ngFor="let item of listened$ | async">
      {{ item.artist }}
      {{ item.track }}
    <div>
  </div>`
})
export class SongsListenedComponent implements OnInit {

  listened$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.listened$ = this.store.select('playlist');
  }

}

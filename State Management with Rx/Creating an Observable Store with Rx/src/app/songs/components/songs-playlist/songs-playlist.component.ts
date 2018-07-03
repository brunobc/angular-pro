import {Component, OnInit, OnDestroy} from '@angular/core';

import {SongsService} from '@app/songs/services/songs.service';

import {Store} from '@app/store';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-songs-playlist',
  template: `
    <div class="songs">
      <div *ngFor="let item of playlist$ | async">
        {{ item.artist }}
        {{ item.track }}
      <div>
    </div>`
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {

  playlist$: Observable<any[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

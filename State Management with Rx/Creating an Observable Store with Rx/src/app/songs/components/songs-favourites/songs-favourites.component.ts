import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import {SongsService} from '@app/songs/services/songs.service';

import {Store} from '@app/store';

@Component({
  selector: 'app-songs-favourites',
  template: `
  <div class="songs">
    <app-songs-list
      [list]="favourites$ | async">
      Favourites
    </app-songs-list>
  </div>`
})
export class SongsFavouritesComponent  implements OnInit {

  favourites$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.favourites$ = this.store.select('playlist')
    .filter(Boolean)
    .map(playlist => playlist.filter(track => track.favourite));
  }

}

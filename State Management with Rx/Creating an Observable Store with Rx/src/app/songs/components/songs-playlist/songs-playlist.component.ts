import {Component} from '@angular/core';

import { Store } from '../../../store';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      <h2 class="mat-h2">Playlist</h2>
    </div>`
})
export class SongsPlaylistComponent {

  constructor(
    private store: Store
  ) {}
}

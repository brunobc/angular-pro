import {Component} from '@angular/core';

import {Store} from '../../../store';

@Component({
  selector: 'songs-favourites',
  template: `
    <div class="songs">
      <h6>Favourites</h6>
    </div>
  `
})
export class SongsFavouritesComponent {

  constructor(
    private store: Store
  ) {}
}

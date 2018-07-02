import {Component} from '@angular/core';

import {Store} from '../../../store';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <h6>Listened</h6>
    </div>`
})
export class SongsListenedComponent {

  constructor(
    private store: Store
  ) {}
}

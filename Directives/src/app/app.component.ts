import { Component } from '@angular/core';

import { Store } from './store';

@Component({
  selector: 'app-root',
  template: `
  <!--<mat-list>-->
    <!--<h3 mat-subheader>Folders</h3>-->
    <!--<mat-list-item *ngFor="let todo of todos$ | async">-->
      <!--<mat-icon mat-list-icon>folder</mat-icon>-->
      <!--<h6 mat-line>{{ todo.name }}</h6>-->
    <!--</mat-list-item>-->
  <!--</mat-list>-->
  <div credit-card>
    <app-songs-playlist></app-songs-playlist>
    <app-songs-listened></app-songs-listened>
    <app-songs-favourites></app-songs-favourites>
  </div>
  `
})
export class AppComponent {
  todos$ = this.store.select<any[]>('todos');

  constructor(private store: Store) {
    this.store.set('todos', [{ id: 1, name: 'Eat dinner' }, { id: 2, name: 'Do washing' }]);
  }
}

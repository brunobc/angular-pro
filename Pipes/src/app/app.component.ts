import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from './filesize.pipe';

interface File {
  name: string,
  size: any,
  type: string
}

@Component({
  selector: 'app-root',
  template: `
  <mat-list>
    <h3 mat-subheader>Files</h3>
    <mat-list-item *ngFor="let file of files">
      <mat-icon mat-list-icon>folder</mat-icon>
        <p mat-line>{{ file.name }}</p>
        <p mat-line>{{ file.size | filesize }}</p>
    </mat-list-item>
      <h3 mat-subheader>Mapped</h3>
      <mat-list-item *ngFor="let file of mapped">
        <mat-icon mat-list-icon>folder</mat-icon>
        <p mat-line>{{ file.name }}</p>
        <p mat-line>{{ file.size }}</p>
      </mat-list-item>
  </mat-list>
  `,
  providers: [
    FileSizePipe
  ]
})
export class AppComponent implements OnInit {
  files: File[];
  mapped: File[];

  constructor(
    private fileSizePipe: FileSizePipe
  ) {}

  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
      ];

    this.mapped = this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.fileSizePipe.transform(file.size, 'mb')
      };
    });
    }
}

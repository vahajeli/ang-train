import { Component } from '@angular/core';
import { TileComponent } from './tile/tile.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <h1>Good morning world!</h1>
    <mat-grid-list cols="8">
      <mat-grid-tile
      *ngFor="let tile of tiles"
      >
        <app-tile
        [number]="tile"
        (clicked)="toggle()"
        ></app-tile>
      </mat-grid-tile>
    </mat-grid-list>
  </main>
  `,
  imports: [TileComponent, CommonModule, MatGridListModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testi';
  tiles: number[] = Array.from({length: 64},(_, i) => i + 1);

  toggle() {
    console.log("toimii")
  }
}

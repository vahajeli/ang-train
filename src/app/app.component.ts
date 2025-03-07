import { Component, ViewChildren, QueryList } from '@angular/core';
import { TileComponent } from './tile/tile.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <h1>Good morning world!</h1>
    <mat-grid-list cols="8">
      <mat-grid-tile
      *ngFor="let tile of tileNumbers"
      >
        <app-tile
        [number]="tile"
        (clicked)="toggle($event)"
        ></app-tile>
      </mat-grid-tile>
    </mat-grid-list>
  </main>
  `,
  imports: [TileComponent, MatGridListModule, NgFor],
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'testi';
  tileNumbers: number[] = Array.from({length: 64},(_, i) => i + 1);
  @ViewChildren(TileComponent) tiles!: QueryList<TileComponent>;

  toggle(nr: number) {
    // kytke nappulan "nr" kaikki naapurit
    // ota huomioon off-by-one
    // nr: 1 - 64
    // tiles: 0 - 63
    let hasLeftNeighbor: Boolean = (nr - 1) % 8 != 0;
    let hasRightNeighbor: Boolean = nr % 8 != 0;
    if (nr > 1 && hasLeftNeighbor) {
      this.tiles.get(nr - 2)?.toggle();
    }
    if (nr < 64 && hasRightNeighbor) {
      this.tiles.get(nr)?.toggle();
    }
    if (nr > 8) {
      this.tiles.get(nr - 9)?.toggle();
    }
    if (nr < 57) {
      this.tiles.get(nr + 7)?.toggle();
    }
  }
}

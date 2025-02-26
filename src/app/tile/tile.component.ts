import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-tile',
  imports: [MatGridListModule, NgOptimizedImage],
  template: `
  <img ngSrc = "{{image}}"
  width="200"
  height="200"
  (click)="toggleSelf()"
  />
  `,
  styleUrl: './tile.component.css'
})
export class TileComponent {

  image = 'kit.jpg'
  kitten = true;
  @Input() number!: number;
  @Output() clicked = new EventEmitter();

  toggleSelf() {
    this.clicked.emit();
    //console.log(this.number);
    this.toggle();
  }

  toggle() {
    if (this.kitten) {
      this.image = 'pup.jpg'
      this.kitten = false;
    } else {
      this.image = 'kit.jpg'
      this.kitten = true;
    }
  }
}

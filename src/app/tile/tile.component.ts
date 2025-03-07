import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output, AfterContentInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tile',
  imports: [MatGridListModule, NgOptimizedImage],
  template: `
  <img ngSrc = "{{image}}"
  width="200"
  height="200"
  (click)="toggleDirectly()"
  />
  `,
  styleUrl: './tile.component.css',
  /* animations: [
    trigger('colorChange', [
      state('normal', style({
        opacity: 1.0
      })),
      state('clicked', style ({
        opacity: 0.1
      })),
      transition('clicked => normal', animate('0.5s ease-out'))
    ])
  ] */
})
export class TileComponent implements AfterContentInit {

  image = 'kit.jpg'
  kitten = true;
  state = 'normal';
  @Input() number!: number;
  @Output() clicked = new EventEmitter<number>();

  ngAfterContentInit() {
    if (Math.random() < .5) {
      this.toggle();
    }
  }

  toggleDirectly() {
    this.clicked.emit(this.number);
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
    this.state = 'clicked';
  }
}

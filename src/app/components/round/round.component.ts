import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Round } from '../../models/round.model';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-round',
  imports: [ItemComponent],
  templateUrl: './round.component.html',
  styleUrl: './round.component.scss',
})
export class RoundComponent implements OnInit, OnDestroy {
  @Input() round!: Round;

  private interval: any;

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      let total = 0;
      for (let i = 0; i < this.round.items.length - 1; i++) {
        total += this.round.items[i].total;
      }
      this.round.items[this.round.items.length - 1].value = total;
    }, 100);
  }
}

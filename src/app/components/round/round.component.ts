import { Component, Input } from '@angular/core';
import { Round } from '../../models/round.model';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-round',
  imports: [ItemComponent],
  templateUrl: './round.component.html',
  styleUrl: './round.component.scss',
})
export class RoundComponent {
  @Input() round!: Round;
  json = JSON;
}

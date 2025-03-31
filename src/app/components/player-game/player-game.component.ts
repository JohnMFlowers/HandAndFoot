import { Component, Input } from '@angular/core';
import { RoundComponent } from '../round/round.component';
import { PlayerGame } from '../../models/player-Game';

@Component({
  selector: 'app-player-game',
  imports: [RoundComponent],
  templateUrl: './player-game.component.html',
  styleUrl: './player-game.component.scss'
})
export class PlayerGameComponent {
  @Input() playerGame!: PlayerGame;
}

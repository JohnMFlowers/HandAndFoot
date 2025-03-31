import { Component, Input } from '@angular/core';
import { Game } from '../../models/game.model';
import { PlayerGameComponent } from '../player-game/player-game.component';

@Component({
  selector: 'app-game',
  imports: [PlayerGameComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  @Input() gameNumber!: number
  @Input() game!: Game;
}

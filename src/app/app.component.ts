import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { Game } from './models/game.model';
import { PlayerGame } from './models/player-Game';
import { Round } from './models/round.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GameComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  games: Game[] = [];

  ngOnInit(): void {
    const game = new Game();
    game.numberRounds = 3;
    ['Player 1', 'Player 2', 'Player 3'].forEach(name => {
      const playerGame = new PlayerGame();
      playerGame.name = name;
      for (let i = 0; i < game.numberRounds; i++) {
        const round = new Round();
        playerGame.rounds.push(round);
      }
      game.playerGames.push(playerGame);
    });
    this.games.push(game);
  }
}
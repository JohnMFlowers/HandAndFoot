import { PlayerGame } from "./player-Game";

let nextGameId = 0;

export class Game {
  id = nextGameId++;
  playerGames: PlayerGame[] = [];
  numberRounds = 1;
}

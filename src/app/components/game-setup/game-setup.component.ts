import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScoreTrackerService } from '../../services/score-tracker.service';
import { GAME_CONSTANTS } from '../../shared/constants/game-constants';

@Component({
  selector: 'app-game-setup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss']
})
export class GameSetupComponent {
  private scoreTracker = inject(ScoreTrackerService);
  
  // Configuration options
  playerCountOptions = Array.from(
    { length: GAME_CONSTANTS.MAX_PLAYERS - GAME_CONSTANTS.MIN_PLAYERS + 1 },
    (_, i) => i + GAME_CONSTANTS.MIN_PLAYERS
  );
  
  roundCountOptions = Array.from(
    { length: GAME_CONSTANTS.MAX_ROUNDS - GAME_CONSTANTS.MIN_ROUNDS + 1 },
    (_, i) => i + GAME_CONSTANTS.MIN_ROUNDS
  );
  
  // Form values
  playerCount = GAME_CONSTANTS.DEFAULT_PLAYERS;
  roundCount = GAME_CONSTANTS.DEFAULT_ROUNDS;
  playerNames: string[] = Array(GAME_CONSTANTS.DEFAULT_PLAYERS).fill('');
  
  /**
   * Updates player name array when player count changes
   */
  onPlayerCountChange(): void {
    // Preserve existing names
    const newPlayerNames = Array(this.playerCount).fill('');
    
    // Copy existing names where possible
    for (let i = 0; i < Math.min(this.playerNames.length, this.playerCount); i++) {
      newPlayerNames[i] = this.playerNames[i];
    }
    
    this.playerNames = newPlayerNames;
  }
  
  /**
   * Validates and starts the game
   */
  startGame(): void {
    // Validate player names
    const validNames = this.playerNames.filter(name => name.trim() !== '');
    
    if (validNames.length !== this.playerCount) {
      alert('Please enter names for all players');
      return;
    }
    
    // Initialize game with validated names
    this.scoreTracker.initializeGame(validNames, this.roundCount);
  }
}
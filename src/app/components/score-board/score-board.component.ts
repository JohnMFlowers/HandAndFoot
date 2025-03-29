import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreTrackerService } from '../../services/score-tracker.service';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent {
  private scoreTracker = inject(ScoreTrackerService);
  
  // Expose the readonly signals from the service
  protected players = this.scoreTracker.players;
  protected rounds = this.scoreTracker.rounds;
  protected currentRound = this.scoreTracker.currentRound;
  
  /**
   * Gets the score for a specific player and round
   */
  getScore(player: Player, roundNumber: number): number | null {
    if (player.scores.length >= roundNumber) {
      return player.scores[roundNumber - 1];
    }
    return null;
  }
  
  /**
   * Gets the CSS class for a score cell based on the round status
   */
  getScoreCellClass(round: Round, roundNumber: number): string {
    if (roundNumber === this.currentRound() && !round.completed) {
      return 'current-round';
    } else if (round.completed) {
      return 'completed-round';
    }
    return 'future-round';
  }
  
  /**
   * Formats the score for display
   */
  formatScore(score: number | null): string {
    if (score === null) {
      return '-';
    }
    return score.toLocaleString();
  }
}
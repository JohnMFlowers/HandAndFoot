import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScoreTrackerService } from '../../services/score-tracker.service';

@Component({
  selector: 'app-score-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.scss']
})
export class ScoreInputComponent {
  private scoreTracker = inject(ScoreTrackerService);
  
  // Expose readonly signals from the service
  protected players = this.scoreTracker.players;
  protected currentRound = this.scoreTracker.currentRound;
  
  // Track the scores being entered
  protected currentScores: Record<string, number> = {};
  protected showForm = false;
  
  /**
   * Initializes the form with default values
   */
  openScoreForm(): void {
    // Reset current scores
    this.currentScores = {};
    
    // Initialize with zeros for each player
    for (const player of this.players()) {
      this.currentScores[player.id] = 0;
    }
    
    this.showForm = true;
  }
  
  /**
   * Cancel score entry and close the form
   */
  cancelScoreEntry(): void {
    this.showForm = false;
  }
  
  /**
   * Submit scores for the current round
   */
  submitScores(): void {
    // Validate inputs
    for (const player of this.players()) {
      if (this.currentScores[player.id] === undefined) {
        alert(`Please enter a score for ${player.name}`);
        return;
      }
    }
    
    // Save scores
    this.scoreTracker.recordRoundScores(this.currentScores);
    this.showForm = false;
  }
}
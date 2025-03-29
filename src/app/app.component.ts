import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSetupComponent } from './components/game-setup/game-setup.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { ScoreInputComponent } from './components/score-input/score-input.component';
// import { GameResultsComponent } from './components/game-results/game-results.component';
// import { ScoringReferenceComponent } from './shared/components/scoring-reference/scoring-reference.component';
import { ScoreTrackerService } from './services/score-tracker.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GameSetupComponent,
    ScoreBoardComponent,
    ScoreInputComponent/* ,
    GameResultsComponent,
    ScoringReferenceComponent */
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private scoreTracker = inject(ScoreTrackerService);
  
  // Expose readonly signals from the service
  protected gameInProgress = this.scoreTracker.gameInProgress;
  protected gameFinished = this.scoreTracker.gameFinished;
  
  /**
   * Reset the game
   */
  resetGame(): void {
    if (confirm('Are you sure you want to reset the game? All scores will be lost.')) {
      this.scoreTracker.resetGame();
    }
  }
}
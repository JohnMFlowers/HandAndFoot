import { Injectable, signal } from '@angular/core';
import { Player, createPlayer } from '../models/player.model';
import { Round, createRound } from '../models/round.model';

/**
 * Service responsible for tracking game state and scores
 */
@Injectable({
  providedIn: 'root'
})
export class ScoreTrackerService {
  // Private signals for internal state management
  private _players = signal<Player[]>([]);
  private _rounds = signal<Round[]>([]);
  private _currentRound = signal<number>(1);
  private _gameInProgress = signal<boolean>(false);
  private _gameFinished = signal<boolean>(false);

  // Public readonly signals for components to consume
  readonly players = this._players.asReadonly();
  readonly rounds = this._rounds.asReadonly();
  readonly currentRound = this._currentRound.asReadonly();
  readonly gameInProgress = this._gameInProgress.asReadonly();
  readonly gameFinished = this._gameFinished.asReadonly();

  /**
   * Initializes a new game with the specified players and rounds
   */
  initializeGame(playerNames: string[], numberOfRounds: number): void {
    // Create player objects
    const newPlayers = playerNames.map(name => createPlayer(name));
    
    // Create round objects
    const newRounds = Array.from(
      { length: numberOfRounds }, 
      (_, i) => createRound(i + 1)
    );
    
    // Update state
    this._players.set(newPlayers);
    this._rounds.set(newRounds);
    this._currentRound.set(1);
    this._gameInProgress.set(true);
    this._gameFinished.set(false);
  }

  /**
   * Records scores for the current round
   */
  recordRoundScores(playerScores: Record<string, number>): void {
    // Get current round index
    const roundIndex = this._currentRound() - 1;
    
    // Update player scores
    const updatedPlayers = this._players().map(player => {
      // Make a copy of the current scores array
      const newScores = [...player.scores];
      
      // Add the new score for this round
      while (newScores.length <= roundIndex) {
        newScores.push(0); // Ensure array has enough elements
      }
      newScores[roundIndex] = playerScores[player.id] || 0;
      
      // Calculate new total
      const newTotal = newScores.reduce((sum, score) => sum + score, 0);
      
      // Return updated player object
      return {
        ...player,
        scores: newScores,
        totalScore: newTotal
      };
    });
    
    // Mark current round as completed
    const updatedRounds = this._rounds().map((round, index) => {
      if (index === roundIndex) {
        return {
          ...round,
          completed: true,
          endTime: new Date()
        };
      }
      return round;
    });
    
    // Update state
    this._players.set(updatedPlayers);
    this._rounds.set(updatedRounds);
    
    // Advance to next round or finish game
    if (roundIndex < this._rounds().length - 1) {
      this._currentRound.update(val => val + 1);
    } else {
      this._gameFinished.set(true);
    }
  }

  /**
   * Returns the top N players sorted by score
   */
  getWinners(limit: number = 3): Player[] {
    return [...this._players()]
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, limit);
  }

  /**
   * Resets the game state
   */
  resetGame(): void {
    this._players.set([]);
    this._rounds.set([]);
    this._currentRound.set(1);
    this._gameInProgress.set(false);
    this._gameFinished.set(false);
  }
}
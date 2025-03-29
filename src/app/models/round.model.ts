/**
 * Represents a round in the Hand and Foot card game
 */
export interface Round {
    roundNumber: number;
    completed: boolean;
    startTime?: Date;
    endTime?: Date;
  }
  
  /**
   * Factory function to create a new Round instance
   */
  export function createRound(roundNumber: number): Round {
    return {
      roundNumber,
      completed: false,
      startTime: new Date()
    };
  }
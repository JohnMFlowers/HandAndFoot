/**
 * Represents a player or team in the Hand and Foot card game
 */
export interface Player {
    id: string;
    name: string;
    scores: number[];
    totalScore: number;
  }
  
  /**
   * Factory function to create a new Player instance
   */
  export function createPlayer(name: string): Player {
    return {
      id: crypto.randomUUID(),
      name,
      scores: [],
      totalScore: 0
    };
  }
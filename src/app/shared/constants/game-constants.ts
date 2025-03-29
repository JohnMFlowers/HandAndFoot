/**
 * Constants for the Hand and Foot card game
 */
export const GAME_CONSTANTS = {
    MIN_PLAYERS: 2,
    MAX_PLAYERS: 6,
    DEFAULT_PLAYERS: 2,
    MIN_ROUNDS: 4,
    MAX_ROUNDS: 8,
    DEFAULT_ROUNDS: 4,
    SCORING: {
      RED_THREE: -500,
      BLACK_THREE: 5,
      JOKER: 50,
      DEUCE: 20,
      ACE: 20,
      FACE_CARDS: 10, // K, Q, J, 10, 9, 8
      LOW_CARDS: 5,   // 7, 6, 5, 4
      CLEAN_BOOK: 500,
      DIRTY_BOOK: 300,
      GOING_OUT_BONUS: 100
    }
  };
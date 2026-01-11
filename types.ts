
export interface User {
  id: string;
  username: string;
  password?: string;
  highScore: number;
  isGuest?: boolean;
}

export interface ScoreEntry {
  username: string;
  score: number;
  date: string;
  difficulty?: Difficulty;
}

export enum Difficulty {
  EASY = 'EASY',
  NORMAL = 'NORMAL',
  HARD = 'HARD'
}

export interface GameState {
  birdY: number;
  birdVelocity: number;
  pipes: Pipe[];
  score: number;
  isGameOver: boolean;
  isStarted: boolean;
}

export interface Pipe {
  x: number;
  topHeight: number;
  passed: boolean;
}

export enum AppView {
  AUTH = 'AUTH',
  GAME = 'GAME',
  LEADERBOARD = 'LEADERBOARD'
}

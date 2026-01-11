
import { Difficulty } from './types';

export const CANVAS_WIDTH = 400;
export const CANVAS_HEIGHT = 600;
export const BIRD_SIZE = 34;
export const PIPE_WIDTH = 60;

export const STORAGE_KEYS = {
  USERS: 'flappy_users',
  CURRENT_USER: 'flappy_session',
  LEADERBOARD: 'flappy_leaderboard'
};

export const DIFFICULTY_CONFIG = {
  [Difficulty.EASY]: {
    gravity: 0.28,
    jumpForce: -6.5,
    pipeSpeed: 2.8,
    pipeGap: 200,
    pipeSpacing: 260,
  },
  [Difficulty.NORMAL]: {
    gravity: 0.35,
    jumpForce: -7,
    pipeSpeed: 3.5,
    pipeGap: 170,
    pipeSpacing: 220,
  },
  [Difficulty.HARD]: {
    gravity: 0.42,
    jumpForce: -7.5,
    pipeSpeed: 4.5,
    pipeGap: 140,
    pipeSpacing: 180,
  }
};

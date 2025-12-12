export enum AppView {
  HOME = 'HOME',
  CHAT = 'CHAT',
  IMAGE = 'IMAGE',
  VISION = 'VISION',
  ETHICS = 'ETHICS',
  LEARN = 'LEARN',
  SETTINGS = 'SETTINGS'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[]; // For quiz: list of answers. For sorting: [Label Left, Label Right]
  correctAnswer: number; // Index of correct option
  explanation: string;
  image?: string; // Optional illustration
}

export type GameType = 'QUIZ' | 'SORTING';

export interface EthicsLevel {
  id: number;
  title: string;
  description: string;
  type: GameType;
  questions: QuizQuestion[];
  minScoreToUnlock: number;
  icon: any; // Lucide Icon name
}

export interface EthicsScenario {
  title: string;
  description: string;
  isSafe: boolean;
  explanation: string;
}

export type Language = 'id' | 'en';
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
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface EthicsScenario {
  title: string;
  description: string;
  isSafe: boolean;
  explanation: string;
}

export type Language = 'id' | 'en';

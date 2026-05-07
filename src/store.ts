import { create } from 'zustand';

export type Strategy = 1 | 2 | 3 | 4 | 5;

interface AppState {
  strategy: Strategy;
  setStrategy: (strategy: Strategy) => void;
}

export const useAppStore = create<AppState>((set) => ({
  strategy: 1,
  setStrategy: (strategy) => set({ strategy }),
}));

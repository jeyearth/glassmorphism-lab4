import { create } from "zustand";
import { STRATEGIES, type StrategyId } from "./strategies";

interface AppState {
  strategy: StrategyId;
  setStrategy: (strategy: StrategyId) => void;
  isBinaryAnimationEnabled: boolean;
  toggleBinaryAnimation: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  strategy: STRATEGIES[0].id,
  setStrategy: (strategy) => set({ strategy }),
  isBinaryAnimationEnabled: false,
  toggleBinaryAnimation: () => set((state) => ({ isBinaryAnimationEnabled: !state.isBinaryAnimationEnabled })),
}));

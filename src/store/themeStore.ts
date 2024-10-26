import { create } from 'zustand';
import { Season, ThemeState } from '../types/theme';

export const useThemeStore = create<ThemeState>((set) => ({
  currentSeason: 'winter',
  setSeason: (season: Season) => set({ currentSeason: season }),
}));
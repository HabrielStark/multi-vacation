export type Season = 'winter' | 'summer' | 'spring';

export interface ThemeState {
  currentSeason: Season;
  setSeason: (season: Season) => void;
}
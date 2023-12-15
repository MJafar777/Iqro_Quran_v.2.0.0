import { buildSelector } from '@/shared/lib/store';

export const [useSelectedSuraValue, getSelectedSuraValue] = buildSelector(
  (state) => state.currentSura,
);

import { buildSelector } from '@/shared/lib/store';

export const [useSelectedSuraReadValue, getSelectedSuraReadValue] =
  buildSelector((state) => state.currentSuraRead);

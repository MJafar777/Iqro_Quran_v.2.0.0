import { StateSchema } from '@/app/providers/StoreProvider';

export const getSelectedSuraRead = (state: StateSchema) =>
  state.currentSuraRead;

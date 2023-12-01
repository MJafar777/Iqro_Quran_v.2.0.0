import { StateSchema } from '@/app/providers/StoreProvider';

export const getSelectedOyatRead = (state: StateSchema) =>
  state.currentOyatRead;

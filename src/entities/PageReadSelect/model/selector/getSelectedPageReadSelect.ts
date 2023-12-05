import { StateSchema } from '@/app/providers/StoreProvider';

export const getSelectedPageReadSelect = (state: StateSchema) =>
  state.currentPageReadSelect;

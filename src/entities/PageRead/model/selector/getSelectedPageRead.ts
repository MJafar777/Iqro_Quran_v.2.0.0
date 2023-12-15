import { StateSchema } from '@/app/providers/StoreProvider';

export const getSelectedPageRead = (state: StateSchema) =>
  state.currentPageRead;

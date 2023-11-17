import { StateSchema } from '@/app/providers/StoreProvider';

export const getSelectedPage = (state: StateSchema) => state.currentPage;

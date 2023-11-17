import { StateSchema } from '@/app/providers/StoreProvider';

export const getReadingTranskriptLotinData = (state: StateSchema) =>
  state.readingTranskriptLotin?.data;

export const getReadingTranskriptLotinIsLoading = (state: StateSchema) =>
  state.readingTranskriptLotin?.isLoading || false;

export const getReadingTranskriptLotinError = (state: StateSchema) =>
  state.readingTranskriptLotin?.error;

import { StateSchema } from '@/app/providers/StoreProvider';

export const getReadingTranslateLotinData = (state: StateSchema) =>
  state.readingTranslateLotin?.data;

export const getReadingTranslateLotinIsLoading = (state: StateSchema) =>
  state.readingTranslateLotin?.isLoading || false;

export const getReadingTranslateLotinError = (state: StateSchema) =>
  state.readingTranslateLotin?.error;

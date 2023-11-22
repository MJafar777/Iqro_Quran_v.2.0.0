import { StateSchema } from '@/app/providers/StoreProvider';

export const getReadingTranslateKrilData = (state: StateSchema) =>
  state.readingTranslateKril?.data;

export const getReadingTranslateKrilIsLoading = (state: StateSchema) =>
  state.readingTranslateKril?.isLoading || false;

export const getReadingTranslateKrilError = (state: StateSchema) =>
  state.readingTranslateKril?.error;

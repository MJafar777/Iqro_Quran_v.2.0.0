import { StateSchema } from '@/app/providers/StoreProvider';

export const getReadingTranskriptKrilData = (state: StateSchema) =>
  state.readingTranskriptKril?.data;

export const getReadingTranskriptKrilIsLoading = (state: StateSchema) =>
  state.readingTranskriptKril?.isLoading || false;

export const getReadingTranskriptKrilError = (state: StateSchema) =>
  state.readingTranskriptKril?.error;

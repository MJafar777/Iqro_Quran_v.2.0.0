import { StateSchema } from '@/app/providers/StoreProvider';

export const getReadingArabicBookData = (state: StateSchema) =>
  state.readingArabicBook?.data;

export const getReadingArabicBookIsLoading = (state: StateSchema) =>
  state.readingArabicBook?.isLoading || false;

export const getReadingArabicBookError = (state: StateSchema) =>
  state.readingArabicBook?.error;

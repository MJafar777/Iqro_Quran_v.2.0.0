import { StateSchema } from '@/app/providers/StoreProvider';

export const getReadingArabicData = (state: StateSchema) =>
  state.readingArabic?.data;

export const getReadingArabicIsLoading = (state: StateSchema) =>
  state.readingArabic?.isLoading || false;

export const getReadingArabicError = (state: StateSchema) =>
  state.readingArabic?.error;

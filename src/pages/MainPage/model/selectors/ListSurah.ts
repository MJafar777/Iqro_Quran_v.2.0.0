import { StateSchema } from '@/app/providers/StoreProvider';

export const getListOfSurahs = (state: StateSchema) => state.mainPage.data;

export const getIsLoading = (state: StateSchema) => state.mainPage.isLoading;

export const getError = (state: StateSchema) => state.mainPage.error;

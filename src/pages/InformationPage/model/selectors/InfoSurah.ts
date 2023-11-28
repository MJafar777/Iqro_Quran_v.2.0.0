import { StateSchema } from '@/app/providers/StoreProvider';
import { InformationPageSurah } from '../../types/InfoSurah';

export const getInfoSurahs = (state: InformationPageSurah) => state.info.data;

export const getIsLoading = (state: StateSchema) => state.mainPage.isLoading;

export const getError = (state: StateSchema) => state.mainPage.error;

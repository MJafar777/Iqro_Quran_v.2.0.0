import {
  getError,
  getIsLoading,
  getListOfSurahs,
} from './model/selectors/ListSurah';
import { MainPageAsync } from './ui/MainPage.async';

export type {
  SurahListSchema,
  OneSuraInListSchema,
  ResponseOfBacend,
} from './model/types/surahType';
export { SurahListSliceReducer } from './model/slice/sliceSurahList';
export { MainPageAsync as MainPage };

export { fetchSurahlesList } from './model/service/fetchSurahList/fetchSurahList';

export { getError, getIsLoading, getListOfSurahs };

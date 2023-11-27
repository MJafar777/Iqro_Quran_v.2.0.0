import {
  getError,
  getIsLoading,
  getListOfSurahs,
} from './model/selectors/ListSurah';
import { MainPageAsync } from './ui/MainPage.async';

export type {
  SurahListSchema,
  ResponseOfBacend,
  OneSuraInListSchema,
} from './model/types/surahType';

export { MainPageAsync as MainPage };

export { SurahListSliceReducer } from './model/slice/sliceSurahList';

export { fetchSurahlesList } from './model/service/fetchSurahList/fetchSurahList';

export { getError, getIsLoading, getListOfSurahs };

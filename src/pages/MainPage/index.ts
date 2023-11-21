import { MainPageAsync } from './ui/MainPage.async';

export type {
  SurahListSchema,
  ResponseOfBacend,
  OneSuraInListSchema,
} from './model/types/surahType';

export { MainPageAsync as MainPage };

export { SurahListSliceReducer } from './model/slice/sliceSurahList';

export {
  getListOfSurahs,
  getIsLoading,
  getError,
} from './model/selectors/ListSurah';
export { fetchSurahlesList } from './model/service/fetchSurahList/fetchSurahList';

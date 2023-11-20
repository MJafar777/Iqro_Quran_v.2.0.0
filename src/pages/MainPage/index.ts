import { MainPageAsync } from './ui/MainPage.async';

export type {
  SurahListSchema,
  OneSuraInListSchema,
  ResponseOfBacend,
} from './model/types/surahType';
export { SurahListSliceReducer } from './model/slice/sliceSurahList';
export { MainPageAsync as MainPage };
export {getListOfSurahs,getIsLoading,getError} from './model/selectors/ListSurah'
export { fetchSurahlesList } from './model/service/fetchSurahList/fetchSurahList';

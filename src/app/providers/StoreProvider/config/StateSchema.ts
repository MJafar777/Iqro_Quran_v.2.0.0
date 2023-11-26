import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { rtkApi } from '@/shared/api/rtkApi';

import { SelectedSuraSchema } from '@/entities/Surah';
import { SelectedOyatSchema } from '@/entities/Oyat';
import { SelectedPageSchema } from '@/entities/Page';
import { ReadingArabicSchema } from '@/entities/ReadingArabic';
import { SurahListSchema } from '@/pages/MainPage';
import { DataTimeScheme } from '@/widgets/Nabar';
import { SearchData } from '@/entities/Main';
import { ReduxSchemeForTafsir } from '@/pages/Tafsir';

export interface StateSchema {
  currentSura: SelectedSuraSchema;
  currentOyat: SelectedOyatSchema;
  currentPage: SelectedPageSchema;

  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Asynchronous reducers
  readingArabic?: ReadingArabicSchema;
  readingTranskriptLotin?: ReadingArabicSchema;
  readingTranskriptKril?: ReadingArabicSchema;
  readingTranslateLotin?: ReadingArabicSchema;
  readingTranslateKril?: ReadingArabicSchema;
  mainPage: SurahListSchema;
  timeData: DataTimeScheme;
  search: SearchData;
  tafsirPage:ReduxSchemeForTafsir
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  get(arg0: string): unknown;
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

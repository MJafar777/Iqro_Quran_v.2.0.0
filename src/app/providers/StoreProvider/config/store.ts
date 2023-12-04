import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState, Reducer } from 'redux';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

import { selectedSuraReducer } from '@/entities/Surah';
import { selectedOyatReducer } from '@/entities/Oyat';
import { selectedPageReducer } from '@/entities/Page';
import { SurahListSliceReducer } from '@/pages/MainPage';
import { TimeDataReducer } from '@/widgets/Nabar';
import { setSearchReducer } from '@/entities/Main';
import { sliceTafsirReduce } from '@/pages/Tafsir';
import { selectedSuraReadReducer } from '@/entities/SurahRead';
import { selectedOyatReadReducer } from '@/entities/OyatRead';
import { selectedPageReadReducer } from '@/entities/PageRead';
import { selectedPageReadSelectReducer } from '@/entities/PageReadSelect';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    currentSura: selectedSuraReducer,
    currentOyat: selectedOyatReducer,
    currentPage: selectedPageReducer,
    currentSuraRead: selectedSuraReadReducer,
    currentOyatRead: selectedOyatReadReducer,
    currentPageRead: selectedPageReadReducer,
    currentPageReadSelect: selectedPageReadSelectReducer,
    mainPage: SurahListSliceReducer,
    timeData: TimeDataReducer,
    search: setSearchReducer,
    tafsirPage: sliceTafsirReduce,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);
  // @ts-ignore
  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

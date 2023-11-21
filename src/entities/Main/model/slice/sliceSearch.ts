import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { SearchData } from '../types/surahType';

const initialState: SearchData = {
  search: '',
  data: [],
};

export const SearchSlice = buildSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, { payload }: PayloadAction<SearchData>) => {
      state.data = payload.data;
      state.search = payload.search;
    },
  },
});

export const {
  actions: setSearchActions,
  reducer: setSearchReducer,
  useActions: useSetSearchActions,
} = SearchSlice;

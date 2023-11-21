import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { DataSearch, DataSearchSidebar, SearchData } from '../types/surahType';

const initialState: SearchData = {
  data: {
    data: [],
    search: '',
  },
  dataSidebar: {
    data: [],
    search: '',
  },
};

export const SearchSlice = buildSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, { payload }: PayloadAction<DataSearch>) => {
      state.data = payload;
    },
    setSearchSidebar: (state, { payload }: PayloadAction<DataSearchSidebar>) => {
      state.dataSidebar = payload;
    },
  },
});

export const {
  actions: setSearchActions,
  reducer: setSearchReducer,
  useActions: useSetSearchActions,
} = SearchSlice;

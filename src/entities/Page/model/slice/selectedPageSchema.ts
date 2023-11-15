import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { SelectedPageSchema } from '../types/selectedPageSchema';

const initialState: SelectedPageSchema = {
  pageNumber: 1,
};

export const SelectedPageSlice = buildSlice({
  name: 'Selected Page',
  initialState,
  reducers: {
    currentPage: (state, { payload }: PayloadAction<number>) => {
      state.pageNumber = payload;
    },
  },
});

export const {
  actions: selectedPageActions,
  reducer: selectedPageReducer,
  useActions: useSelectedPageActions,
} = SelectedPageSlice;

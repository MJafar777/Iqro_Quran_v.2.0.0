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
    setSelectedPage: (state, { payload }: PayloadAction<number>) => {
      state.pageNumber = payload;
    },

    incrementCurrentPage: (state) => {
      state.pageNumber += 1;
    },

    decrementCurrentPage: (state) => {
      if (state.pageNumber > 1) {
        state.pageNumber -= 1;
      }
    },
  },
});

export const {
  actions: selectedPageActions,
  reducer: selectedPageReducer,
  useActions: useSelectedPageActions,
} = SelectedPageSlice;

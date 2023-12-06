import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { SelectedPageReadSelectSchema } from '../types/selectedPageReadSelectSchema';

const initialState: SelectedPageReadSelectSchema = {
  pageNumber: 1,
};

export const SelectedPageReadSelectSlice = buildSlice({
  name: 'Selected Page',
  initialState,
  reducers: {
    setSelectedPageReadSelect: (state, { payload }: PayloadAction<number>) => {
      state.pageNumber = payload;
    },

    incrementCurrentPageReadSelect: (state) => {
      state.pageNumber += 1;
    },

    decrementCurrentPageReadSelect: (state) => {
      if (state.pageNumber > 1) {
        state.pageNumber -= 1;
      }
    },
  },
});

export const {
  actions: selectedPageReadSelectActions,
  reducer: selectedPageReadSelectReducer,
  useActions: useSelectedPageReadSelectActions,
} = SelectedPageReadSelectSlice;

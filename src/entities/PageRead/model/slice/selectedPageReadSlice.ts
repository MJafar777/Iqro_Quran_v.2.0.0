import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { SelectedPageReadSchema } from '../types/selectedPageReadSchema';

const initialState: SelectedPageReadSchema = {
  pageNumber: 1,
};

export const SelectedPageReadSlice = buildSlice({
  name: 'Selected Page',
  initialState,
  reducers: {
    setSelectedPageRead: (state, { payload }: PayloadAction<number>) => {
      state.pageNumber = payload;
    },

    incrementCurrentPageRead: (state) => {
      state.pageNumber += 1;
    },

    decrementCurrentPageRead: (state) => {
      if (state.pageNumber > 1) {
        state.pageNumber -= 1;
      }
    },
  },
});

export const {
  actions: selectedPageReadActions,
  reducer: selectedPageReadReducer,
  useActions: useSelectedPageReadActions,
} = SelectedPageReadSlice;

import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { SelectedOyatReadSchema } from '../types/selectedOyatReadSchema';

const initialState: SelectedOyatReadSchema = {
  oyatNumber: 1,
};

export const SelectedOyatReadSlice = buildSlice({
  name: 'Selected Oyat',
  initialState,
  reducers: {
    setSelectedReadOyat: (state, { payload }: PayloadAction<number>) => {
      state.oyatNumber = payload;
    },
  },
});

export const {
  actions: selectedOyatReadActions,
  reducer: selectedOyatReadReducer,
  useActions: useSelectedOyatReadActions,
} = SelectedOyatReadSlice;

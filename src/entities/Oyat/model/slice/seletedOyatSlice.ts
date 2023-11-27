import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { SelectedOyatSchema } from '../types/selectedOyatSchema';

const initialState: SelectedOyatSchema = {
  oyatNumber: 1,
};

export const SelectedOyatSlice = buildSlice({
  name: 'Selected Oyat',
  initialState,
  reducers: {
    setSelectedtOyat: (state, { payload }: PayloadAction<number>) => {
      state.oyatNumber = payload;
    },
  },
});

export const {
  actions: selectedOyatActions,
  reducer: selectedOyatReducer,
  useActions: useSelectedOyatActions,
} = SelectedOyatSlice;

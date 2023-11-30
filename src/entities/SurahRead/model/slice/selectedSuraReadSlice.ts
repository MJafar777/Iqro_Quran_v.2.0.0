import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { SelectedSuraReadSchema } from '../types/selectedSuraReadSchema';

const initialState: SelectedSuraReadSchema = {
  _id: '',
  revelation_place: '',
  revelation_order: 0,
  bismillah_pre: false,
  name_complex: '',
  name_arabic: '',
  pages: [1, 1],
  quran_order: 0,
  count_verse: 0,
  name_simple: '',
  telegram_file_id: '',
  id: '',
  translated_names: undefined,
};

export const SelectedSuraReadSlice = buildSlice({
  name: 'Selected Sura',
  initialState,
  reducers: {
    setSelectedSuraRead: (
      state,
      { payload }: PayloadAction<SelectedSuraReadSchema>,
    ) => {
      Object.assign(state, payload);
    },
  },
});

export const {
  actions: selectedSuraReadActions,
  reducer: selectedSuraReadReducer,
  useActions: useSelectedSuraReadActions,
} = SelectedSuraReadSlice;

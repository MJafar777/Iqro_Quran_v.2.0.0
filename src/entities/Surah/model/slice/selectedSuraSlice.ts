import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { SelectedSuraSchema } from '../types/selectedSuraSchema';

const initialState: SelectedSuraSchema = {
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

export const SelectedSuraSlice = buildSlice({
  name: 'Selected Sura',
  initialState,
  reducers: {
    setSelectedSura: (
      state,
      { payload }: PayloadAction<SelectedSuraSchema>,
    ) => {
      Object.assign(state, payload);
    },
  },
});

export const {
  actions: selectedSuraActions,
  reducer: selectedSuraReducer,
  useActions: useSelectedSuraActions,
} = SelectedSuraSlice;

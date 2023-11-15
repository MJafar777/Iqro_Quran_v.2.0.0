import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { SelectedSuraSchema, SuraSchema } from '../types/selectedSuraSchema';

const initialState: SelectedSuraSchema = {
  suraId: 1,
  nameKril: '',
  nameLotin: 'Fotiha',
  numberOfOyat: 7,
  selectedOyat: 1,
};

export const SelectedSuraSlice = buildSlice({
  name: 'Selected Sura',
  initialState,
  reducers: {
    currentSura: (state, { payload }: PayloadAction<SuraSchema>) => {
      // state.suraId = payload.suraId;
      // state.nameKril = payload.nameKril;
      // state.nameLotin = payload.nameLotin;
      // state.numberOfOyat = payload.numberOfOyat;

      // Object.assign(state, payload) qismi, payload obyektining barcha xususiyatlari state obyektiga nusxalanadi
      // Yuqoridagi vazifani bajaradi
      Object.assign(state, payload);
    },

    currentOyat: (state, { payload }: PayloadAction<number>) => {
      state.selectedOyat = payload;
    },
  },
});

export const {
  actions: selectedSuraActions,
  reducer: selectedSuraReducer,
  useActions: useSelectedSuraActions,
} = SelectedSuraSlice;
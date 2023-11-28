import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SurahInfoOfBackend, SurahInfoSchema } from '../types/surahInfoType';
import { fetchInfoSurah } from '../service/fetchInfoSurah/fetchInfoSurah';

const initialState: SurahInfoSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const SurahListSlice = createSlice({
  name: 'surahInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfoSurah.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchInfoSurah.fulfilled,
        (state, action: PayloadAction<SurahInfoOfBackend>) => {
          state.isLoading = false;
          if (action.payload.data) {
            state.data = action.payload.data;
          }
        },
      )
      .addCase(fetchInfoSurah.rejected, (state, action) => {
        state.error = 'err';
        state.isLoading = false;
      });
  },
});

export const { actions: SurahInfoAction } = SurahListSlice;
export const { reducer: SurahInfoReducer } = SurahListSlice;

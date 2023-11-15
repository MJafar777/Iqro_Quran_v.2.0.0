import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OneSuraInListSchema, SurahListSchema } from '../types/surahType';
import { fetchSurahlesList } from '../service/fetchSurahList/fetchSurahList';

const initialState: SurahListSchema = {
  isLoading: false,
  error: undefined,
  data: [],
  status: '',
  results: 0
};

export const SurahListSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSurahlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchSurahlesList.fulfilled,
        (state, action: PayloadAction<OneSuraInListSchema[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchSurahlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: SurahListSliceActions } = SurahListSlice;
export const { reducer: SurahListSliceReducer } = SurahListSlice;

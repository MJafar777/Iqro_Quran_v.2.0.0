import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ResponseOfBacend, SurahListSchema } from '../types/surahType';
import { fetchSurahlesList } from '../service/fetchSurahList/fetchSurahList';

const initialState: SurahListSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const SurahListSlice = createSlice({
  name: 'SurahListSlice',
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
        (state, action: PayloadAction<ResponseOfBacend>) => {
          state.isLoading = false;

          if (action.payload.data) {
            state.data = action.payload.data;
          }
        },
      )
      .addCase(fetchSurahlesList.rejected, (state, action) => {
        state.error = 'err';
        state.isLoading = false;
      });
  },
});

export const { actions: SurahListSliceActions } = SurahListSlice;
export const { reducer: SurahListSliceReducer } = SurahListSlice;

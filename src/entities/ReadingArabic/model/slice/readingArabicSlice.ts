import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ReadngArabicText,
  ReadngArabicTextSchema,
} from '../types/readingArabicSchema';
import { fetchReadingArabic } from '../services/fetchReadingArabic';

const initialState: ReadngArabicTextSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const readingArabicSlice = createSlice({
  name: 'Reading Arabic',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReadingArabic.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchReadingArabic.fulfilled,
        (state, action: PayloadAction<ReadngArabicText>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchReadingArabic.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: readingArabicActions } = readingArabicSlice;
export const { reducer: readingArabicReducer } = readingArabicSlice;

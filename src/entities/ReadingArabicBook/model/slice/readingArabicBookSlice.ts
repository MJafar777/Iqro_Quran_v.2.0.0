import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReadingQuranData } from '../types/readingSura';
import { ReadingArabicBookSchema } from '../types/readingArabicBookSchema';
import { fetchReadingArabicBook } from '../services/fetchReadingArabicBook';

const initialState: ReadingArabicBookSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const readingArabicBookSlice = createSlice({
  name: 'Reading ArabicBook',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReadingArabicBook.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchReadingArabicBook.fulfilled,
        (state, action: PayloadAction<ReadingQuranData>) => {
          state.isLoading = false;

          if (state.data && state.data[action.payload.data[0]?.quran_order]) {
            if (
              !state.data[
                action.payload.data[0]?.quran_order
              ]?.data?.resourse?.includes(
                action.payload?.resourse?.length > 0
                  ? action.payload?.resourse[0]
                  : '',
              )
            ) {
              state.data[action.payload.data[0]?.quran_order].data.resourse = [
                ...(state.data[action.payload.data[0]?.quran_order].data
                  ?.resourse || []),
                ...(action.payload.resourse || []),
              ];
            } else {
              state.data[action.payload.data[0]?.quran_order].data.resourse = [
                ...state.data[action.payload.data[0]?.quran_order].data
                  .resourse,
              ];
            }
          } else {
            if (!state.data) state.data = {};

            state.data[action.payload.data[0]?.quran_order] = {
              quran_order: action.payload.data[0]?.quran_order,
              data: action.payload,
            };
          }
        },
      )
      .addCase(fetchReadingArabicBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: readingArabicBookActions } = readingArabicBookSlice;
export const { reducer: readingArabicBookReducer } = readingArabicBookSlice;

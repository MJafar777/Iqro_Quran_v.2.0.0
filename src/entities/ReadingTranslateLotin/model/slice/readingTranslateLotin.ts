import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchReadingTranslateLotin } from '../services/fetchReadingTranslateLotin';
import { ReadingArabicSchema, ReadingQuranData } from '../..';

const initialState: ReadingArabicSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const readingTranslateLotinSlice = createSlice({
  name: 'Reading Translate Lotin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReadingTranslateLotin.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchReadingTranslateLotin.fulfilled,
        (state, action: PayloadAction<ReadingQuranData>) => {
          state.isLoading = false;

          if (state.data && state.data[action.payload.data[0]?.quran_order]) {
            if (
              !state.data[
                action.payload.data[0]?.quran_order
              ]?.data?.resourse?.some((obj) =>
                action.payload?.resourse?.length > 0
                  ? Object.keys(obj).includes(
                      String(Object.keys(action.payload?.resourse[0])),
                    )
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
      .addCase(fetchReadingTranslateLotin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: readingTranslateLotinActions } =
  readingTranslateLotinSlice;
export const { reducer: readingTranslateLotinReducer } =
  readingTranslateLotinSlice;

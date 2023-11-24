import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchReadingTranslateKril } from '../services/fetchReadingTranslateKril';
import { ReadingArabicSchema, ReadingQuranData } from '../..';

const initialState: ReadingArabicSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const readingTranslateKrilSlice = createSlice({
  name: 'Reading Translate Kril',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReadingTranslateKril.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchReadingTranslateKril.fulfilled,
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
      .addCase(fetchReadingTranslateKril.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: readingTranslateKrilActions } =
  readingTranslateKrilSlice;
export const { reducer: readingTranslateKrilReducer } =
  readingTranslateKrilSlice;

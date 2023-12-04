import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReadingArabicTextSchema } from '../types/readingArabicSchema';
import { fetchReadingArabic } from '../services/fetchReadingArabic';
import { QuranDataText } from '../types/readingSura';

const initialState: ReadingArabicTextSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
  loadedFontFaces: [],
};

export const readingArabicSlice = createSlice({
  name: 'Reading Arabic',
  initialState,
  reducers: {
    addLoadedFontFaceReadingArabic: (state, action: PayloadAction<string>) => {
      state.loadedFontFaces.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReadingArabic.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchReadingArabic.fulfilled,
        (state, action: PayloadAction<QuranDataText>) => {
          state.isLoading = false;

          if (
            state.data &&
            state.data[action.payload.data[0]?.chapter_id.quran_order]
          ) {
            if (
              !state.data[
                action.payload.data[0]?.chapter_id.quran_order
              ].data.data.some(
                (verse) =>
                  verse.verse_number === action.payload.data[0].verse_number,
              )
            ) {
              state.data[
                action.payload.data[0]?.chapter_id.quran_order
              ].data.data = [
                ...state.data[action.payload.data[0]?.chapter_id.quran_order]
                  .data.data,
                ...action.payload.data,
              ];
            } else {
              state.data[
                action.payload.data[0]?.chapter_id.quran_order
              ].data.data = [
                ...state.data[action.payload.data[0]?.chapter_id.quran_order]
                  .data.data,
              ];
            }
          } else {
            if (!state.data) state.data = {};

            state.data[action.payload.data[0]?.chapter_id.quran_order] = {
              quran_order: action.payload.data[0]?.chapter_id.quran_order,
              data: action.payload,
            };
          }
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
export const { addLoadedFontFaceReadingArabic } = readingArabicSlice.actions;

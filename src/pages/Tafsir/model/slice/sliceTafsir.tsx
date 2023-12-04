/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ApiResponse, ReduxSchemeForTafsir } from '../types/typeTafsir';
import { fetchTafsirList } from '../service/fetchTafsir/fetchTafsirList';
import {
  QuranDataText,
  ReadingArabicTextSchema,
} from '@/entities/ReadingArabic';

const initialState: ReadingArabicTextSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
  loadedFontFaces: [],
};

const sliceTafsir = createSlice({
  name: 'TafsirPage',
  initialState,
  reducers: {
    addLoadedFontFace: (state, action: PayloadAction<string>) => {
      state.loadedFontFaces.push(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTafsirList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchTafsirList.fulfilled,
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
      .addCase(
        fetchTafsirList.rejected,
        (state, action: PayloadAction<string | undefined, string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      ),
});

export const { reducer: sliceTafsirReduce } = sliceTafsir;
export const { actions: slicerTafserAction } = sliceTafsir;
export const { addLoadedFontFace } = sliceTafsir.actions;

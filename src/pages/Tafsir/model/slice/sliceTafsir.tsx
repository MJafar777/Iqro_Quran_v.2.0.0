import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  QuranDataText,
  ReadingArabicTextSchema,
} from '@/entities/ReadingArabic';
import { fetchTafsirList } from '../service/fetchTafsir/fetchTafsirList';

const initialState: ReadingArabicTextSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
  loadedFontFaces: [],
};

export const sliceTafsir = createSlice({
  name: 'sliceTafsir',
  initialState,
  reducers: {
    addLoadedFontFace: (state, action: PayloadAction<string>) => {
      state.loadedFontFaces.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTafsirList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
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
      .addCase(fetchTafsirList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: sliceTafsirActions } = sliceTafsir;
export const { reducer: sliceTafsirReducer } = sliceTafsir;
export const { addLoadedFontFace } = sliceTafsir.actions;

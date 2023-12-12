import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReadingQuranSchema } from '../types/readingArabicSchema';
import { fetchReadingArabic } from '../services/fetchReadingArabic';
import { QuranDataText } from '../types/readingSura';

const initialState: ReadingQuranSchema = {
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

          if (!state.data) state.data = {};

          if (state.data[action.payload.data[0]?.page_number]) {
            state.data[action.payload.data[0]?.page_number][
              action.payload.data[0]?.chapter_id.quran_order
            ] = {
              _id: action.payload.data[0]?._id,
              name_complex: action.payload.data[0]?.chapter_id.name_complex,
              name_arabic: action.payload.data[0]?.chapter_id.name_arabic,
              name_simple: action.payload.data[0]?.chapter_id.name_simple,
              pages: action.payload.data[0]?.chapter_id.pages,
              quran_order: action.payload.data[0]?.chapter_id.quran_order,
              count_verse: action.payload.data[0]?.chapter_id.count_verse,

              // ----- Lines V1 -----
              linesV1: {},
              // ----- Lines V2 -----
              linesV2: {},
            };
          } else {
            // ----- Page Number -----
            state.data[action.payload.data[0]?.page_number] = {
              // ----- Sura Number -----
              [action.payload.data[0]?.chapter_id.quran_order]: {
                // ----- Sura Datas -----
                _id: action.payload.data[0]?._id,
                name_complex: action.payload.data[0]?.chapter_id.name_complex,
                name_arabic: action.payload.data[0]?.chapter_id.name_arabic,
                name_simple: action.payload.data[0]?.chapter_id.name_simple,
                pages: action.payload.data[0]?.chapter_id.pages,
                quran_order: action.payload.data[0]?.chapter_id.quran_order,
                count_verse: action.payload.data[0]?.chapter_id.count_verse,

                // ----- Lines V1 -----
                linesV1: {},
                // ----- Lines V2 -----
                linesV2: {},
              },
            };
          }

          action.payload.data.forEach((oyat) => {
            oyat.words.forEach((word) => {
              const lineNumber = word.line_number;
              const lineNumber2 = word.line_number2;

              // ----- Line V1 -----
              if (
                state.data &&
                !state.data[action.payload.data[0]?.page_number][
                  action.payload.data[0]?.chapter_id.quran_order
                ].linesV1[lineNumber]
              ) {
                state.data[action.payload.data[0]?.page_number][
                  action.payload.data[0]?.chapter_id.quran_order
                ].linesV1[lineNumber] = {
                  words: [],
                  startOyat: oyat.verse_number,
                  endOyat: oyat.verse_number,
                };
              }

              if (state.data)
                state.data[action.payload.data[0]?.page_number][
                  action.payload.data[0]?.chapter_id.quran_order
                ].linesV1[lineNumber].words?.push(word);

              // ----- Line V2 -----
              if (
                state.data &&
                !state.data[action.payload.data[0]?.page_number][
                  action.payload.data[0]?.chapter_id.quran_order
                ].linesV2[lineNumber2]
              ) {
                state.data[action.payload.data[0]?.page_number][
                  action.payload.data[0]?.chapter_id.quran_order
                ].linesV2[lineNumber2] = {
                  words: [],
                  startOyat: oyat.verse_number,
                  endOyat: oyat.verse_number,
                };
              }

              if (state.data)
                state.data[action.payload.data[0]?.page_number][
                  action.payload.data[0]?.chapter_id.quran_order
                ].linesV2[lineNumber2].words?.push(word);
            });
          });
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

//  if (state.data && state.data[action.payload.data[0]?.chapter_id.quran_order]) {
//    if (
//      !state.data[action.payload.data[0]?.chapter_id.quran_order].data.data.some(
//        (verse) => verse.verse_number === action.payload.data[0].verse_number,
//      )
//    ) {
//      state.data[action.payload.data[0]?.chapter_id.quran_order].data.data = [
//        ...state.data[action.payload.data[0]?.chapter_id.quran_order].data.data,
//        ...action.payload.data,
//      ];
//    } else {
//      state.data[action.payload.data[0]?.chapter_id.quran_order].data.data = [
//        ...state.data[action.payload.data[0]?.chapter_id.quran_order].data.data,
//      ];
//    }
//  } else {
//    if (!state.data) state.data = {};

//    state.data[action.payload.data[0]?.chapter_id.quran_order] = {
//      quran_order: action.payload.data[0]?.chapter_id.quran_order,
//      data: action.payload,
//    };
//  }

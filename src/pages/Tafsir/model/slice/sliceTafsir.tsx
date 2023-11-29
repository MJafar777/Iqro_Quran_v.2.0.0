/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse, ReduxSchemeForTafsir } from '../types/typeTafsir';
import { fetchTafsirList } from '../service/fetchTafsir/fetchTafsirList';

const initialState: ReduxSchemeForTafsir = {
  error: undefined,
  loadedFontFaces: ['p1-v1'],
  data: {
    1: {
      data: [],
      isNextPageHas: true,
    },
  },
  isLoading: false,
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
        (state, action: PayloadAction<ApiResponse>) => {
          state.isLoading = false;
          const chapterId = action.payload?.data[0]?.chapter_id?.quran_order;
          console.log(state.data[chapterId]?.data?.length);
          if (
            chapterId &&
            (state.data[chapterId]?.data?.length === 0 ||
              state.data[chapterId]?.data?.length === undefined)
          ) {
            state.data[chapterId] = {
              data: action.payload.data,
              isNextPageHas: action.payload.results - 10 > 0,
            };
          } else if (chapterId && state.data[chapterId]?.data?.length! > 0) {
            console.log(action.payload.data[0].verse_number);
            if (
              state.data[chapterId].data![state.data[chapterId].data?.length!]
                ?.verse_number === action.payload.data[0].verse_number
            ) {
              console.log('Datra');
              state.data[chapterId] = {
                data: [...state.data[chapterId].data!, ...action.payload.data],
                isNextPageHas: action.payload.results === 0,
              };
            }
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

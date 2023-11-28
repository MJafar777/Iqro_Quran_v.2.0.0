/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BackendResForTafsir, ReduxSchemeForTafsir } from '../types/typeTafsir';
import { fetchTafsirList } from '../service/fetchTafsir/fetchTafsirList';

const initialState: ReduxSchemeForTafsir = {
  isLoading: false,
  data: [],
  error: undefined,
  loadedFontFaces:['p1-v1']
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
        (state, action: PayloadAction<BackendResForTafsir>) => {
          state.isLoading = false;
          // @ts-ignore
          if (!state?.data[action?.payload?.data[0]?.chapter_id?.quran_order]) {
            // @ts-ignore
            state.data[action?.payload?.data[0]?.chapter_id?.quran_order] =
              action?.payload.data;
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
export const {addLoadedFontFace}=sliceTafsir.actions


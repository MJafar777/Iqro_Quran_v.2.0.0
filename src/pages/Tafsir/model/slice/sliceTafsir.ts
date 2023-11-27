import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BackendResForTafsir, ReduxSchemeForTafsir } from '../types/typeTafsir';
import { fetchTafsirList } from '../service/fetchTafsir/fetchTafsirList';

const initialState: ReduxSchemeForTafsir = {
  isLoading: false,
  data: [],
  error: undefined,
};

const sliceTafsir = createSlice({
  name: 'TafsirPage',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTafsirList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchTafsirList.fulfilled,
        (state, action: PayloadAction<BackendResForTafsir>) => {
          state.isLoading = false;
          state.data = action.payload.data;
          console.log(action.payload.data, 'redux');

          state.error = undefined;
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

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchReadingTranskriptLotin } from '../services/fetchReadingTranskriptLotin';
import { ReadingArabicSchema, ReadingQuranData } from '../..';

const initialState: ReadingArabicSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const readingTranskriptLotinSlice = createSlice({
  name: 'Reading Transkript Lotin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReadingTranskriptLotin.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchReadingTranskriptLotin.fulfilled,
        (state, action: PayloadAction<ReadingQuranData>) => {
          state.isLoading = false;
          console.log(action.payload.data[0].quran_order);

          if (state.data && state.data[action.payload.data[0].quran_order]) {
            if (
              !state.data[
                action.payload.data[0].quran_order
              ].data.resourse.includes(
                action.payload.resourse.length > 0
                  ? action.payload?.resourse[0]
                  : '',
              )
            ) {
              state.data[action.payload.data[0].quran_order].data.resourse = [
                ...(state.data[action.payload.data[0].quran_order].data
                  .resourse || []),
                ...(action.payload.resourse || []),
              ];
            } else {
              state.data[action.payload.data[0].quran_order].data.resourse = [
                ...state.data[action.payload.data[0].quran_order].data.resourse,
              ];
            }
          } else {
            if (!state.data) state.data = {};

            state.data[action.payload.data[0].quran_order] = {
              quran_order: action.payload.data[0].quran_order,
              data: action.payload,
            };
          }
        },
      )
      .addCase(fetchReadingTranskriptLotin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: readingTranskriptLotinActions } =
  readingTranskriptLotinSlice;
export const { reducer: readingTranskriptLotinReducer } =
  readingTranskriptLotinSlice;

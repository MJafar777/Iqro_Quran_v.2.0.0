/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SegmentSchemeBack, SegmentSchemeRedux } from '../types/typeSegments';
import { fetchAudioSegments } from '../service/fetchAudioSegments/fetchAudioSegments';

const initialState: SegmentSchemeRedux = {
  isLoading: false,
  error: '',
  data: undefined,
};

const sliceSegment = createSlice({
  name: 'TafsirPage',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    // @ts-ignore
    builder
      .addCase(fetchAudioSegments.pending, (state: SegmentSchemeRedux) => {
        state.isLoading = true;
      })
      .addCase(
        fetchAudioSegments.fulfilled,
        (state, action: PayloadAction<SegmentSchemeBack>) => {
          state.isLoading = false;
          const quran_order = action.payload.data.audio_url
            ?.replace('/suras/', '')
            .replace('.mp3', '');

          if (!state.data) {
            // @ts-ignore
            state.data = {
              [quran_order]: {
                quran_order,
                data: action.payload.data,
              },
            };
            // @ts-ignore
          } else if (state.data && !state.data[quran_order]) {
            // @ts-ignore
            state.data[quran_order] = {
              quran_order: quran_order,
              data: action.payload.data,
            };
          }
        },
      )
      .addCase(
        fetchAudioSegments.rejected,
        (state, action: PayloadAction<string | undefined, string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      ),
});

export const { reducer: sliceSegmentReduce } = sliceSegment;
export const { actions: sliceSegmentAction } = sliceSegment;

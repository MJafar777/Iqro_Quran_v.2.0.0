/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SegmentSchemeBack } from '../../types/typeSegments';

interface MyApiResponse {
  data: SegmentSchemeBack;
}

export const fetchAudioSegments = createAsyncThunk<
  SegmentSchemeBack, // Return type
  { chapterId: number },
  ThunkConfig<string> // ThunkConfig type
>(
  'tafsirpage/listOfTafsir', // Action type
  async (prop, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    const { chapterId } = prop;

    if (!chapterId) throw new Error('');
    try {
      const response = await (axios.get(
        `http://iqro-quran.uz/developmentBackend/api/v1/chapter/audio/num/${chapterId}`,
      ) as Promise<MyApiResponse>);

      if (!response.data) {
        throw new Error();
      }

      return response.data; // TypeScript should now recognize the type
    } catch (error) {
      return rejectWithValue('Failed to fetch tafsir list');
    }
  },
);

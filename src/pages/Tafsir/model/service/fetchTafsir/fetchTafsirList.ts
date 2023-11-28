import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BackendResForTafsir } from '../../types/typeTafsir';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface MyApiResponse {
  data: BackendResForTafsir;
}

export const fetchTafsirList = createAsyncThunk<
  BackendResForTafsir, // Return type
  { chapterId: number },
  ThunkConfig<string> // ThunkConfig type
>(
  'tafsirpage/listOfTafsir', // Action type
  async (prop, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { chapterId } = prop;

    if (!chapterId) throw new Error('');

    try {
      const response = await (axios.get(
        `http://iqro-quran.uz/developmentBackend/api/v2/verse/by_chapter/chapter?chapter=${chapterId}`,
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

import { createAsyncThunk } from '@reduxjs/toolkit';
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
  async (prop, thunk) => {
    const { extra, rejectWithValue } = thunk;
    const { chapterId } = prop;

    try {
      const response = await (extra.get(`/verse/by_chapter/chapter?chapter=${chapterId}`) as Promise<MyApiResponse>)
      return response.data; // TypeScript should now recognize the type
    } catch (error) {
      return rejectWithValue('Failed to fetch tafsir list');
    }
  }
);

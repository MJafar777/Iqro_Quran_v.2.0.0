/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BackendResForTafsir } from '../../types/typeTafsir';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { peekaboo } from '@/peekabo';

interface MyApiResponse {
  data: BackendResForTafsir;
}

export const fetchTafsirList = createAsyncThunk<
  BackendResForTafsir, // Return type
  { chapterId: number; page_number: number },
  ThunkConfig<string> // ThunkConfig type
>(
  'tafsirpage/listOfTafsir', // Action type
  async (prop, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { chapterId ,page_number} = prop;

    if (!chapterId) throw new Error('');

    try {
      const response = await (axios.get(
        `${peekaboo}/verse/by_chapter/chapter?chapter=${chapterId}&page=${page_number}&per_page=10`,
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

/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApiResponse } from '../../types/typeTafsir';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { peekaboo } from '@/peekabo';

interface MyApiResponse {
  data: ApiResponse;
}

export const fetchTafsirList = createAsyncThunk<
  ApiResponse, // Return type
  { chapterId: 1; page_number: 1 },
  ThunkConfig<string> // ThunkConfig type
>(
  'tafsirpage/listOfTafsir', // Action type
  async (prop, thunkApi) => {
    console.log('fetch');
    const { extra, rejectWithValue } = thunkApi;
    const { chapterId, page_number } = prop;

    console.log(chapterId);
    if (!chapterId) throw new Error('');
    try {
      const response = await (axios.get(
        `${peekaboo}/verse/by_chapter/for_text?chapter=${chapterId}&page=${page_number}`,
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

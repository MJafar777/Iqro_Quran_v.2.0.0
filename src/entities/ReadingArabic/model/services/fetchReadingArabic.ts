import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ReadngArabicText } from '../types/readingArabicSchema';

export const fetchReadingArabic = createAsyncThunk<
  ReadngArabicText,
  { suraId: number; pageNumber: number; limitOfPage: number },
  ThunkConfig<string>
>(
  'readingArabic',
  async ({ suraId = 1, pageNumber = 1, limitOfPage = 1 }, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!suraId) {
      throw new Error('');
    }

    try {
      const response = await extra.api.get<ReadngArabicText>(
        `verse/by_chapter/chapter?chapter=${suraId}&page=${pageNumber}&per_page=${limitOfPage}`,
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { QuranDataText } from '../types/readingSura';

export const fetchReadingArabic = createAsyncThunk<
  QuranDataText,
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
      const response = await extra.api.get<QuranDataText>(
        `verse/by_chapter/chapter?chapter=${suraId}&page=${pageNumber}&per_page=10`,
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

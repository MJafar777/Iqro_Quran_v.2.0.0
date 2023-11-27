import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ReadingQuranData } from '../..';

export const fetchReadingTranslateLotin = createAsyncThunk<
  ReadingQuranData,
  { suraId: number; pageNumber: number; limitOfPage: number },
  ThunkConfig<string>
>(
  'readingTranslateLotin',
  async ({ suraId = 1, pageNumber = 1, limitOfPage = 1 }, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!suraId) {
      throw new Error('');
    }

    try {
      const response = await extra.api.get<ReadingQuranData>(
        `verse/by_chapter/page/lotin?chapter=${suraId}&page=${pageNumber}&limit=${limitOfPage}`,
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

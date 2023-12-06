/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { QuranDataText } from '@/entities/ReadingArabic';

export const fetchTafsirList = createAsyncThunk<
  QuranDataText,
  { chapterId: number; page_number: number },
  ThunkConfig<string>
>('readingArabic', async ({ chapterId = 1, page_number = 1 }, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!chapterId) {
    throw new Error('');
  }

  try {
    const response = await extra.api.get<QuranDataText>(
      `verse/by_chapter/for_text?chapter=${chapterId}&page=${page_number}`,
    );

    //

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});

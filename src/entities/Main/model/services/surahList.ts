import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SurahList } from '../types/surahType';
import { peekaboo } from '@/peekabo';



export const fetchArticleById = createAsyncThunk<
    SurahList,
    string | undefined,
    ThunkConfig<string>
>('surahList', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!articleId) {
    throw new Error('');
  }

  try {
    const response = await extra.api.get<SurahList>(
      `${peekaboo}/chapter`
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
